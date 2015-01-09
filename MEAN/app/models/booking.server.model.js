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
    default: 'PENDING'
  }
});

mongoose.model('Booking', BookingSchema);