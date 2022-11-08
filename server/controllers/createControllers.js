const { Cheese, Cheesemaker, Review, Rating } = require('../models')

const createCheese = async (req, res) => {
  try {
    const cheese = await new Cheese(req.body)
    await cheese.save()
    return res.status(201).json({ cheese })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createCheesemaker = async (req, res) => {
  try {
    const cheesemaker = await new Cheesemaker(req.body)
    await cheesemaker.save()
    return res.status(201).json({ cheesemaker })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({ review })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createRating = async (req, res) => {
  try {
    const rating = await new Rating(req.body)
    await rating.save()
    return res.status(201).json({ rating })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createCheese,
  createCheesemaker,
  createReview,
  createRating
}
