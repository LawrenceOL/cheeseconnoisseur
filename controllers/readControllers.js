const { Cheese, Cheesemaker, Review, Rating } = require('../models')

// all read<documentType> functions below use findById

const readCheese = async (req, res) => {
  try {
    console.log(req.body)
    const cheese = await Cheese.findById(req.body)
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
    const cheesemaker = await Cheesemaker.findById(req.body)
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
    const review = await Review.findById(req.body)
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
    const rating = await Rating.findById(req.body)
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
