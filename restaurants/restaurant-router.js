const router = require("express").Router();

const Restaurants = require("./restaurant-model.js");

router.get('/', (req, res) => {
  Restaurants.find()
    .then(results => {
      res.json(results)
    })
})

router.get('/:id/passport', (req, res) => {
  let { id } = req.params;
  Restaurants.getRestaurantsById(id)
    .then(results => {
      res.json(results)
    })
})


module.exports = router;