const { Schema } = require('mongoose')

const Cheesemaker = new Schema(
  {
    name: { type: String, required: true },
    details: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Cheesemaker
