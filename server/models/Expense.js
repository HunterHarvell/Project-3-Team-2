const mongoose = require('mongoose');

const { Schema } = mongoose;

const expenseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
