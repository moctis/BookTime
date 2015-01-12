'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors'),
  Booking = mongoose.model('Booking'),
  Shop = mongoose.model('Shop'),
  _ = require('lodash');

/**
 * Create a Booking
 */
exports.create = function(req, res) {
  var booking = new Booking(req.body);
  booking.owner = req.user;

  booking.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(booking);
    }
  });
};

/**
 * Show the current booking
 */
exports.read = function(req, res) {
  res.jsonp(req.booking);
};

/**
 * Update a booking
 */
exports.update = function(req, res) {
  var booking = req.booking;

  booking = _.extend(booking, req.body);

  booking.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(booking);
    }
  });
};

/**
 * Delete an booking
 */
exports.delete = function(req, res) {
  var booking = req.booking;

  booking.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(booking);
    }
  });
};


/**
 * List of Bookings
 */
exports.list = function(req, res) {
  Shop.findShopIdByShopOwner(req.user._id, function(err, shopIds) {
    // list booking by Shop Owner or  booker 

    Booking
      .find({
        $or: [{
          owner: req.user._id
        }, {
          shop: {
            $in: shopIds
          }
        }]
      })
      .populate('owner', '_id,displayName')
      .populate('shop')
      .sort('-created')
      .exec(function(err, bookings) {
        if (err) {
          return res.status(400).send({
            message: errorHandler.getErrorMessage(err)
          });
        } else {
          res.jsonp(bookings);
        }
      });
  });
};

/**
 * Booking middleware
 */
exports.bookingByID = function(req, res, next, id) {
  Booking.findById(id).populate('owner', 'displayName').exec(function(err, booking) {
    if (err) return next(err);
    if (!booking) return next(new Error('Failed to load booking ' + id));
    req.booking = booking;
    next();
  });
};

/**
 * Booking authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
  if (req.booking.owner.id !== req.user.id) {
    return res.status(403).send({
      message: 'User is not authorized'
    });
  }
  next();
};