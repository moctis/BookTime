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
	}
});

mongoose.model('Shop', ShopSchema);
