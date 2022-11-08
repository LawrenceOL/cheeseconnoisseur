const { Router } = require('express')
const createRouter = Router()
const createControllers = require('../controllers/createControllers')

createRouter.post('/createCheese', createControllers.createCheese)
createRouter.post('/createCheesemaker', createControllers.createCheesemaker)
createRouter.post('/createReview', createControllers.createReview)
createRouter.post('/createRating', createControllers.createRating)

module.exports = createRouter
