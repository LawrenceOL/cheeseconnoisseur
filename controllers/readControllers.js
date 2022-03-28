const { Cheese, Cheesemaker, Review, Rating } = require('../models')

const readCheese = async (req, res) => {
  try {
    const { id } = req.body
    const cheese = await Cheese.findById(id)
    if (cheese) {
      return res.status(200).json({ cheese })
    }
    return res.status(404).send('cheese with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const readCheesemaker = async (req, res) => {
  try {
    const { id } = req.body
    const cheesemaker = await Cheesemaker.findById(id)
    if (cheesemaker) {
      return res.status(200).json({ cheesemaker })
    }
    return res
      .status(404)
      .send('Cheesemaker with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const readReview = async (req, res) => {
  try {
    const { id } = req.body
    const review = await Review.findById(id)
    if (review) {
      return res.status(200).json({ review })
    }
    return res.status(404).send('Review with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const readRating = async (req, res) => {
  try {
    const { id } = req.body
    const rating = await Rating.findById(id)
    if (rating) {
      return res.status(200).json({ rating })
    }
    return res.status(404).send('Rating with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  readCheese,
  readCheesemaker,
  readReview,
  readRating
}
