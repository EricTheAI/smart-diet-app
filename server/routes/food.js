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