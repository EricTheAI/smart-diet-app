
var azure = require('azure-storage');
var blobSvc = azure.createBlobService("smartbiteediag117", "pukORxT+Aeov+cx7+Vzi9RA24jMkpl58K2ypTCnEZfL3SmCqI3+4ZyOkL6iEK4qBmNzDLD+BvYzYjzVz+RTTYQ==");

function Profile(taskDao) {
  this.taskDao = taskDao;
}

module.exports = Profile;
Profile.prototype = {
  getProfile: function (req, res) {
    var self = this;
    var userid = req.body['userid'];
    var querySpec = {
      query: 'SELECT * FROM root r WHERE r.userid=@userid and r.type = "profile"',
      parameters: [{
        name: '@userid',
        value: userid
      }]
    };
    self.taskDao.find(querySpec, function (err, items) {
      if (items.length > 0)
        res.json(items[0]);
      else
        res.json({ success: false, error: "Don't have a profile." })
    });
  },

  update: function (req, res) {
    var self = this;
    var profile = req.body;
    profile.type = 'profile';
    var querySpec = {
      query: 'SELECT * FROM root r WHERE r.userid=@userid and r.type = "profile"',
      parameters: [{
        name: '@userid',
        value: profile.userid
      }]
    };

    self.taskDao.find(querySpec, function (err, items) {
      if (err) {
        res.json({ success: false, error: err });
        return;
      }
      if (items.length > 0) {
        var doc = items[0];
        for(var key in profile)
        {
          if(key in doc)
          {
            doc[key] = profile[key];
          }
        }
        self.taskDao.updateItem(doc, function (err) {
          if (err) {
            res.json({ success: false, error: err });
          } else {
            res.json({ success: true });
          }
        });
      }
      else {
        self.taskDao.addItem(profile, function (err, doc) {
          if (err) {
            res.json({ success: false, error: err })
            return;
          }
          res.json({ success: true })
        });
      }
    });
  },
};