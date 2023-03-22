const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;
