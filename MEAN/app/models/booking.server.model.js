'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Booking Schema
 */
var BookingSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  shopId: {
    type: Schema.ObjectId,
    ref: 'Shop'
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    default: 'pending'
  },
  bookDateTime: {
    type: Date,
    default: Date.now
  },
  person: {
    type: Number,
    default: 0
  },
  comment: {
    type: String,
    default: '(none)'
  },
  promotion: {
    type: String
  },
});

mongoose.model('Booking', BookingSchema);