const mongoose = require('mongoose');

const { Schema } = mongoose;

const incomeSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Describe the income in detail']
  },
  amount: {
    type: Number,
    required: [true, 'Please add the invoice amount']
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;
