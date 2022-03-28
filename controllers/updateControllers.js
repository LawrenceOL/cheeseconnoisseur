const { Cheese, Cheesemaker, Review, Rating } = require('../models')

const updateCheese = async (req, res) => {
  try {
    const cheese = await Cheese.findById(req.body)
    await cheese.save()
    return res.status(201).json({ cheese })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateCheesemaker = async (req, res) => {
  try {
    const cheesemaker = await Cheesemaker.findById(req.body)
    await cheesemaker.save()
    return res.status(201).json({ cheesemaker })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.body)
    await review.save()
    return res.status(201).json({ review })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateRating = async (req, res) => {
  try {
    const rating = await Rating.findById(req.body)
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
