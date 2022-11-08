const { Schema } = require('mongoose')

const Cheesemaker = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    details: { type: String, required: false },
    cheeses: { type: String, required: false },
    review: { type: String, required: false },
    rating: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Cheesemaker
