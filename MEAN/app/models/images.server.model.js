'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Image Schema
 */
var ImageSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  path: {
    type: String,
    default: '',
    trim: true
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  userId: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  shopId: {
    type: Schema.ObjectId,
    ref: 'Shop'
  }
});



mongoose.model('Image', ImageSchema);
