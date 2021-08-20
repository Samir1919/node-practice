express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');


router.post('/', async (req, res) => {
    var brand = new Brand({
        name: req.body.name
    });

    brand.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the Brand." });
        } else {
            res.send(data);
        }
    });
});

router.get('/', async (req, res) => {
    try {
        let data = await Brand.find({})
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
});

module.exports = router;