'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors'),
  Shop = mongoose.model('Shop'),
  _ = require('lodash');

/**
 * Create a shop
 */
exports.create = function(req, res) {
  var shop = new Shop(req.body);
  shop.owner = req.user;

  shop.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err),
        err: err
      });
    } else {
      res.jsonp(shop);
    }
  });
};

/**
 * Show the current shop
 */
exports.read = function(req, res) {
  res.jsonp(req.shop);
};

/**
 * Update a shop
 */
exports.update = function(req, res) {
  var shop = req.shop;

  shop = _.extend(shop, req.body);

  shop.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(shop);
    }
  });
};

/**
 * Delete an shop
 */
exports.delete = function(req, res) {
  var shop = req.shop;

  shop.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(shop);
    }
  });
};

/**
 * List of Shops
 */
exports.list = function(req, res) {
  //console.log('req', req.query);  got   req {q: 'xx', terms: 'food' }
  console.log('q', req.query.q);
  Shop
    .find()
    .where({
      name: {
        '$regex': req.query.q,
        '$options': 'i'
      }
    })
    .sort('-created').populate('owner', 'displayName').exec(function(err, shops) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.jsonp(shops);
      }
    });
};


/**
 * List of Shops
 */
exports.listOwner = function(req, res) {
  Shop
    .find()
    .where({
      owner: req.user._id
    })
    .sort('-created').populate('owner', 'displayName').exec(function(err, shops) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.jsonp(shops);
      }
    });
};

/**
 * Shop middleware
 */
exports.shopByID = function(req, res, next, id) {
  Shop.findById(id).populate('owner', 'displayName').exec(function(err, shop) {
    if (err) return next(err);
    if (!shop) return next(new Error('Failed to load shop ' + id));
    req.shop = shop;
    next();
  });
};

/**
 * Shop authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
  if (!req.shop.owner._id.equals(req.user._id)) {
    return res.status(403).send({
      message: 'User is not authorized'
    });
  }
  next();
};