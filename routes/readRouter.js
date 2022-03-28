const { Router } = require('express')
const readRouter = Router()
const readControllers = require('../controllers/readControllers')

readRouter.get('/', (req, res) => res.send('I am gRoot'))
readRouter.get('/readCheese', readControllers.readCheese)
readRouter.get('/readCheesemaker', readControllers.readCheesemaker)
readRouter.get('/readReview', readControllers.readReview)
readRouter.get('/readRating', readControllers.readRating)

module.exports = readRouter
