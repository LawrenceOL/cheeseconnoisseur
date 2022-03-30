const { Router } = require('express')
const deleteRouter = Router()
const deleteControllers = require('../controllers/deleteControllers')

deleteRouter.delete('/deleteCheese', deleteControllers.deleteCheese)
deleteRouter.delete('/deleteCheesemaker', deleteControllers.deleteCheesemaker)
deleteRouter.delete('/deleteReview', deleteControllers.deleteReview)
deleteRouter.delete('/deleteRating', deleteControllers.deleteRating)

module.exports = deleteRouter
