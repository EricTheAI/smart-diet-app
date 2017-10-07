var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');

function Food(taskDao) {
  this.taskDao = taskDao;
}

module.exports = Food;
Food.prototype = {
    confirm: function (req, res) {
        var self = this;
        var record = req.body
        console.log(record)
        
        // self.taskDao.addItem(user, function (err) {
        //     if (err) {
        //         throw (err);
        //         res.json({success:false})
        //     }
        //     res.json({success:true})
        // });
    },

    search: function (req, res) {
        var self = this;
        var username = req.body
        res.json({food:"apple pie", fat: 12321, image:"https://smartbiteediag117.blob.core.windows.net/images/contest"});
        return;
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