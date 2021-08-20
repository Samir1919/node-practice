express = require('express');
const router = express.Router();
const Category = require('../models/Category');


router.get('/', async (req, res) => {
    try {
        let data = await Category.find({})
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

router.post('/', async (req, res) => {
    var cat = new Category({
        name: req.body.name
    });

    cat.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the category." });
        } else {
            res.send(data);
        }
    });
});

module.exports = router;