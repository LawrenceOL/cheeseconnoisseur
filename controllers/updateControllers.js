const { Cheese, Cheesemaker, Review, Rating } = require('../models')

//updates cheese
const updateCheese = async (req, res) => {
  try {
    const cheese = await Cheese.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(cheese)
  } catch (err) {
    res.send(err.message)
  }
}

//update cheesemaker name by cheesemaker id
const updateCheesemaker = async (req, res) => {
  try {
    const cheesemaker = await Cheesemaker.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.json(cheesemaker)
  } catch (err) {
    res.send(err.message)
  }
}

//update review by reviewid
const updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.body)
    review.details = 'handleChange'
    await review.save()
    return res.status(201).json({ review })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//by rating id
const updateRating = async (req, res) => {
  try {
    const rating = await Rating.findById(req.body)
    rating.rating = 1
    await rating.save()
    return res.status(201).json({ rating })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  updateCheese,
  updateCheesemaker,
  updateReview,
  updateRating
}
