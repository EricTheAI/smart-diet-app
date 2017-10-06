var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');
var md5 = require("blueimp-md5");

function Users(taskDao) {
  this.taskDao = taskDao;
}

module.exports = Users;
Users.prototype = {
    login: function (req, res) {
        var self = this;
        var username = req.body['username']
        var password = req.body['password']
        if(!username)
        {
            res.json({success:false, error: "username missing."});
            return;
        }
        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.username=@username',
            parameters: [{
                name: '@username',
                value: username
            }]
        };
       
        self.taskDao.find(querySpec, function (err, items) {
            if (err) {
                throw (err);
                res.json({success:false, error: err});
                return;
            }
            if(items.length > 0)
            {
                if(items[0].password == md5(password))
                {
                    res.json({success:true, id: items[0].id});
                }
                else
                {
                    res.json({success:false, error: "Wrong password."});
                }
            }
            else
                res.json({success:false, error: "User does not exist."});
        });
    },

    register: function (req, res) {
        var self = this;
        var user = req.body;
        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.username=@username',
            parameters: [{
                name: '@username',
                value: username
            }]
        };
        self.taskDao.find(querySpec, function (err, items) {
            if (err) {
                throw (err);
                res.json({success:false, error: err});
                return;
            }
            if(items.length > 0)
            {
                res.json({success:false, error: "Duplicated username"});
                return;
            }
        });
        user.type = "user"
        user.password = md5(user.password)
        self.taskDao.addItem(user, function (err, doc) {
            if (err) {
                throw (err);
                res.json({success:false, error, err})
            }
            res.json({success:true, id:doc.id})
        });
    },

    completeTask: function (req, res) {
        var self = this;
        var completedTasks = Object.keys(req.body);

        async.forEach(completedTasks, function taskIterator(completedTask, callback) {
            self.taskDao.updateItem(completedTask, function (err) {
                if (err) {
                    callback(err);
                } else {
                    callback(null);
                }
            });
        }, function goHome(err) {
            if (err) {
                throw err;
            } else {
                res.redirect('/');
            }
        });
    }
};