
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