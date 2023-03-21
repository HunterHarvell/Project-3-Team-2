const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const expenseSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Describe the expense in detail']
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

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
