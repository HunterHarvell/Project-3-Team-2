const mongoose = require('mongoose');

const { Schema } = mongoose;

const incomeSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;
