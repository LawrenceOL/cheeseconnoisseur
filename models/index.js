const mongoose = require('mongoose')
const CheesemakerSchema = require('./Cheesemaker')
const CheeseSchema = require('./Cheese')
const RatingSchema = require('./Rating')
const ReviewSchema = require('./Review')

const Cheesemaker = mongoose.model('Cheesemaker', CheesemakerSchema)
const Cheese = mongoose.model('Cheese', CheeseSchema)
const Rating = mongoose.model('Rating', RatingSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
  Cheesemaker,
  Cheese,
  Rating,
  Review
}
