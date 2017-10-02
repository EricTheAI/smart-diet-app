
var async = require('async');
var azure = require('azure-storage');

var blobSvc = azure.createBlobService("smartbiteediag117","pukORxT+Aeov+cx7+Vzi9RA24jMkpl58K2ypTCnEZfL3SmCqI3+4ZyOkL6iEK4qBmNzDLD+BvYzYjzVz+RTTYQ==");

function Profile(taskDao) {
  this.taskDao = taskDao;
}

module.exports = Profile;
Profile.prototype = {
    update: function (req, res) {
        var self = this;
        blobSvc.createAppendBlobFromText('images', 'asdsad', 'test.txt', function(error, result, response){
            if(!error){
               res.json({"result":result})
            }else{
              res.json({"result":error})
            }
          });
    },

};