const { Router } = require('express')
const updateRouter = Router()
const updateControllers = require('../controllers/updateControllers')

updateRouter.put('/updateCheese', updateControllers.updateCheese)
updateRouter.put('/updateCheesemaker', updateControllers.updateCheesemaker)
updateRouter.put('/updateReview', updateControllers.updateReview)
updateRouter.put('/updateRating', updateControllers.updateRating)

module.exports = updateRouter
