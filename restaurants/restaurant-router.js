const router = require("express").Router();

const Restaurants = require("./restaurant-model.js");

//GET METHODS
router.get('/', (req, res) => {
  Restaurants.find()
    .then(results => {
      res.json(results)
    })
})
router.get('/:id', (req, res) => {
  let { id } = req.params;
  Restaurants.findById(id)
    .then(results => {
      if (results.length > 0) {
        res.status(200).json(results)
      } else {
        res.status(400).json({
          message: `Restaurant with id ${id} does not exist.`
        })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving Id.' })
    })
})
router.get('/:id/passport', (req, res) => {
  let { id } = req.params;
  Restaurants.getRestaurantsById(id)
    .then(results => {
      res.json(results)
    })
})

//POST METHODS
router.post('/', (req, res) => {
  let body = req.body;
  Restaurants.add(body)
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router;