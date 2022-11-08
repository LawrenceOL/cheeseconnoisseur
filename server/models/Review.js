const { Schema } = require('mongoose')

const Review = new Schema(
  {
    reviewer_name: { type: String, required: false },
    details: { type: String, required: false },
    cheese: { type: Schema.Types.ObjectId, ref: 'Cheese' }
  },
  { timestamps: true }
)

module.exports = Review
