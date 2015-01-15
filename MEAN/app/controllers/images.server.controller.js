'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors'),
  Image = mongoose.model('Image'),
  _ = require('lodash');

/**
 * Create a image
 */
exports.create = function(req, res) {
  var image = new Image(req.body);
  image.owner = req.user;

  image.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(image);
    }
  });
};

/**
 * Show the current image
 */
exports.read = function(req, res) {
  res.jsonp(req.image);
};

/**
 * Update a image
 */
exports.update = function(req, res) {
  var image = req.image;

  image = _.extend(image, req.body);

  image.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(image);
    }
  });
};

/**
 * Delete an image
 */
exports.delete = function(req, res) {
  var image = req.image;

  image.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(image);
    }
  });
};

/**
 * List of images
 */
exports.list = function(req, res) {
  Image.find().sort('-created').populate('owner', 'displayName').exec(function(err, images) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(images);
    }
  });
};

/**
 * image middleware
 */
exports.findByID = function(req, res, next, id) {
  Image.findById(id).populate('owner', '').exec(function(err, image) {
    if (err) return next(err);
    if (!image) return next(new Error('Failed to load image ' + id));
    req.image = image;
    next();
  });
};

/**
 * image authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
  if (!req.image.owner._id.equals(req.user._id)) {
    return res.status(403).send({
      message: 'User is not authorized'
    });
  }
  next();
};


exports.uploadFile = function(req, res, next) {
  // We are able to access req.files.file thanks to
  // the multiparty middleware
  console.log('uploadFile:', req.files.file.path);
  console.log(req.files);



  res.jsonp({
    result: 'OK'
  });
};