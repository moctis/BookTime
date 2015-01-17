'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors'),
  Image = mongoose.model('Image'),
  fs = require('fs'),
  config = require('../../config/config'),
  path = require('path'),
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

exports.readFull = function(req, res) {
  var image = req.image;

  //res.jsonp(req.image);
  res.contentType('image/jpeg');

  var storePath = path.normalize(config.imagesPath + image.path);

  if (!fs.existsSync(storePath)) {
    res.status(400).send('Image is not found:');
  } else {
    var data1 = fs.readFileSync(storePath);
    res.send(data1);
  }

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
  Image
    .findById(id)
    .populate('owner', 'displayName')
    .exec(function(err, image) {
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


exports.uploadAlbums = function(req, res, next) {
  // We are able to access req.files.file thanks to
  // the multiparty middleware
  var image = new Image();

  image.path = image._id;
  image.owner = req.user;
  image.shopId = req.shop._id;

  var storePath = path.normalize(config.imagesPath + image.path);
  fs.rename(req.files.file.path, storePath);
  image.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      console.log(req.files);
      console.log(image);

      var shop = req.shop;
      shop.albums = shop.albums || [];
      shop.albums.push(image);

      shop.save(function(err) {
        if (err) {
          return res.status(400).send({
            message: errorHandler.getErrorMessage(err)
          });
        } else {
          return res.jsonp(image);
        }
      });

    }
  });
};

exports.nocache = function(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
};