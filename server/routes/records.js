
//Record represents a record of every meal.
function Records(taskDao) {
    this.taskDao = taskDao;
}

module.exports = Records;
Records.prototype = {
    //
    createRecord: function (req, res) {
        var self = this;
        var record = req.body
        record.type = "record";
        self.taskDao.addItem(record, function (err) {
            if (err) {
                res.json({ success: false,  error, err})
            }
            res.json({ success: true })
        });

    },

    getRecords: function (req, res) {
        var self = this;
        var userid = req.body["userid"];

        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.userid=@userid and r.type="record"',
            parameters: [{
                name: '@userid',
                value: userid
            }]
        };

        self.taskDao.find(querySpec, function (err, items) {
            if (err) {
                res.json({ success: false, error: err });
                return;
            }
            if (items.length > 0) {
                    res.json({records:items});
                }
                else {
                    res.json({});
                }
            })
        },
};