const { Cheese, Cheesemaker, Review, Rating } = require('../models')

const deleteCheese = async (req, res) => {
  try {
    const cheese = await Cheese.findById(req.body)
    await cheese.deleteOne()
    return res.status(201).json({ cheese })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteCheesemaker = async (req, res) => {
  try {
    const cheesemaker = await Cheesemaker.findById(req.body)
    await cheesemaker.deleteOne()
    return res.status(201).json({ cheesemaker })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.body)
    await review.deleteOne()
    return res.status(201).json({ review })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteRating = async (req, res) => {
  try {
    const rating = await Rating.findById(req.body)
    await rating.deleteOne()
    return res.status(201).json({ rating })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  deleteCheese,
  deleteCheesemaker,
  deleteReview,
  deleteRating
}
