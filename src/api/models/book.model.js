'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const book = new Schema({
  id_category: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
  },
  name: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
  },
  price: {
    type: Number,
    required: [true, "can't be blank"],
  },
  release_date: {
    type: Date,
    $dateToString: { format: "%Y-%m-%d", date: "$date" },
    default: new Date()
  },
  img: {
    type: Array
  },
  count: {
    type: Number
  },
  available: {
    type: Boolean,
    required: [true, "can't be blank"],
  },
  describe: {
    type: String,
    default: "",
  },
  id_publisher: {
    type: String,
    required: [true, "can't be blank"],
  },
  id_author: {
    type: String,
    required: [true, "can't be blank"],
  },
  view_counts: {
    type: Number,
    default: 0,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  sales: {
    type: Number,
    default: 0,
    validate: {
      validator: function (value) {
        return Number.isInteger(value) && value >= 0 && value <= 100;
      },
      message: '{VALUE} is not an integer value'
    }
  }
});
module.exports = mongoose.model('book', book);