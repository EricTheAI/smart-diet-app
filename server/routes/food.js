var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');

function Food(taskDao) {
  this.taskDao = taskDao;
}

module.exports = Food;
Food.prototype = {
    login: function (req, res) {
        var self = this;
        var username = req.body['username']
        var password = req.body['password']
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
                res.json({success:false, error: err})
            }
            res.json({success:true})
        });
    },

    register: function (req, res) {
        var self = this;
        var user = req.body;
        user.type = "user"
        self.taskDao.addItem(user, function (err) {
            if (err) {
                throw (err);
                res.json({success:false})
            }
            res.json({success:true})
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