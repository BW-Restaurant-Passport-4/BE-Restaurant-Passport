const router = require("express").Router();

const Restaurants = require("./restaurant-model.js");

//GET METHODS
router.get('/', (req, res) => {
  Restaurants.find()
    .then(results => {
      res.json(results)
    })
})
router.get('/passport', (req, res) => {
  let { userId } = req.decodedJwt;
  Restaurants.getRestaurantsByUserId(Number(userId))
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

// router.post('/passport', (req, res) => {
//   let body = req.body;
//   let token = req.decodedJwt;
//   console.log(token);
//   // insert the restaurant
//   Restaurants.add(body)
//     .then(results => {
//       //retrieve the id
//       Restaurants.findById(results.id)
//         .then(restaurants => {
//           //add to the join table
//           Restaurants.addRestaurantById(restaurants)
//             .then(restaurant => {
//               res.json(restaurant)
//             })
//         })
//       res.status(200).json(results)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json(err)
//     })
// })

//PUT METHODS
router.put('/:id', (req, res) => {
  let { id } = req.params;
  let body = req.body;
  Restaurants.update(id, body)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      res.json({ message: 'Error updating restaurant.' })
    })
})
//DELETE METHODS
router.delete('/:id', (req, res) => {
  let { id } = req.params;
  Restaurants.remove(id)
    .then(results => {
      console.log(results)
      if (results) {
        res.json({ message: 'Successfully deleted restaurant.' })
      } else {
        res.status(401).json({ message: 'ID not found.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Error removing restaurant.' })
    })
})

module.exports = router;