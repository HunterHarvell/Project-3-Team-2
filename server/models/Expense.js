const mongoose = require('mongoose');

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
  createAt: {
    type: Date,
    default: Date.now
  }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
