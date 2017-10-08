//Food data of each kind of food like energy, fat from reliable source.
function Food(taskDao) {
    this.taskDao = taskDao;
}

module.exports = Food;
Food.prototype = {

    //User can manualy add a kind of food that is not in our database.
    confirm: function (req, res) {
        var self = this;
        var record = req.body
        self.taskDao.addItem(record, function (err) {
            if (err) {
                res.json({success:false, error: err});
            }
            res.json({success:true});
        });
    },

    //Search for a certain food.
    search: function (req, res) {
        var self = this;
        var food = req.body['food']
        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.name=@name and type="food"',
            parameters: [{
                name: '@name',
                value: food
            }]
        };

        self.taskDao.find(querySpec, function (err, items) {
            if (err) {
                res.json({ success: false, error: err });
                return;
            }
            if (items.length > 0) {
                if (items[0].password == md5(password)) {
                    res.json({ success: true, id: items[0].id });
                }
                else {
                    res.json({ success: false, error: "Wrong password." });
                }
            }
            else
                res.json({ success: false, error: "User does not exist." });
        });
    },

    //Get all food data.
    all: function (req, res) {
        var self = this;
        var username = req.body
        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.type="food"'
        };

        self.taskDao.find(querySpec, function (err, items) {
            if (err) {
                res.json({ success: false, error: err });
                return;
            }
            res.json({ success: true, food: items });

        });
    }
};