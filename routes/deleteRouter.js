const { Router } = require('express')
const deleteRouter = Router()
const deleteControllers = require('../controllers/deleteControllers')

deleteRouter.post('/deleteCheese', deleteControllers.deleteCheese)
deleteRouter.post('/deleteCheesemaker', deleteControllers.deleteCheesemaker)
deleteRouter.post('/deleteReview', deleteControllers.deleteReview)
deleteRouter.post('/deleteRating', deleteControllers.deleteRating)

module.exports = deleteRouter
