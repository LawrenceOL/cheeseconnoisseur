const { Schema } = require('mongoose')

const Rating = new Schema(
  {
    rating: { type: Integer, required: true },
    rating: { type: Schema.Types.ObjectId, ref: 'Rating' },
    cheese: { type: Schema.Types.ObjectId, ref: 'Cheese' }
  },
  { timestamps: true }
)

module.exports = Rating
