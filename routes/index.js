const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/createControllers')

router.get('/', (req, res) => res.send('I am gRoot'))

router.post('/createCheese', controllers.createCheese)
router.post('/createCheesemaker', controllers.createCheesemaker)
router.post('/createReview', controllers.createReview)
router.post('/createRating', controllers.createRating)

module.exports = router
