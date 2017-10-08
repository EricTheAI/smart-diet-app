var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');
var azure = require('azure-storage');

var blobSvc = azure.createBlobService("smartbiteediag117", "pukORxT+Aeov+cx7+Vzi9RA24jMkpl58K2ypTCnEZfL3SmCqI3+4ZyOkL6iEK4qBmNzDLD+BvYzYjzVz+RTTYQ==");


function Records(taskDao) {
    this.taskDao = taskDao;
}

module.exports = Records;
Records.prototype = {
    foodDetect: function (req, res) {
        var self = this;
        var image = req.body['image']
        var image_name = Date.now()
        console.log(req.body)
        console.log(image)
        blobSvc.createAppendBlobFromText('images', image_name.toString(), image, function (error, result, response) {
            if (!error) {
                res.json({ food: "banana" })
            } else {
                res.json({ "result": error })
            }
        });

    },

    createRecord: function (req, res) {
        var self = this;
        var record = req.body
        self.taskDao.addItem(record, function (err) {
            if (err) {
                res.json({ success: false })
            }
            res.json({ success: true })
        });

    },

    getRecords: function (req, res) {
        var self = this;
        var image = req.body['image']
        var image_name = Date.now()
        console.log(image)
        blobSvc.createAppendBlobFromText('images', image_name.toString(), image, function (error, result, response) {
            if (!error) {
                res.json({ food: "banana" })
            } else {
                res.json({ "result": error })
            }
        });

    },

};