'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Shop Schema
 */
var ShopSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name cannot be blank'
  },
  address: {
    type: String,
    default: '',
    trim: true
  },
  address2: {
    type: String,
    default: '',
    trim: true
  },
  operationTime: {
    type: String,
    default: '',
    trim: true
  },
  detail: {
    type: String,
    default: '',
    trim: true
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  catalog: {
    type: String,
    default: 'unknow',
    trim: true
  },
  reviews: {
    type: Number,
    default: 0
  },
  booked: {
    type: Number,
    default: 0
  },
  photos: {
    type: Number,
    default: 0
  },
  rank: {
    type: Number,
    default: 0
  },
  services: [{
    title: String,
    detail: String
  }]
});

mongoose.model('Shop', ShopSchema);