'use strict';

const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ['coffee_shop', 'bookstore'],
      required: true
    }
  },
  { timestamps: true }
);

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
