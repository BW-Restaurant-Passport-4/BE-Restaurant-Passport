const router = require("express").Router();

const Restaurants = require("./restaurant-model.js");

router.get('/', (req, res) => {
  Restaurants.find()
    .then(results => {
      res.json(results)
    })
})


module.exports = router;