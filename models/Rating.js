const { Schema } = require('mongoose')

const Rating = new Schema(
  {
    rating: { type: String, required: true },
    cheese: { type: Schema.Types.ObjectId, ref: 'Cheese' }
  },
  { timestamps: true }
)

module.exports = Rating
