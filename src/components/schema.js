const mongoose = require('mongoose');
const addQuote = mongoose.model('Quote', quoteSchema);

const quoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = addQuote;
