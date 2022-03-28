const { Schema } = require('mongoose')

const Cheese = new Schema(
  {
    name: { type: String, required: true },
    details: { type: String, required: false },
    cheesemaker: { type: Schema.Types.ObjectId, ref: 'Cheesemaker' },
    review: { type: Schema.Types.ObjectId, ref: 'Review' },
    rating: { type: Schema.Types.ObjectId, ref: 'Rating' }
  },
  { timestamps: true }
)

module.exports = Cheese
