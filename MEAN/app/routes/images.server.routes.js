'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  users = require('../../app/controllers/users'),
  images = require('../../app/controllers/images'),
  multiparty = require('connect-multiparty'),
  path = require('path'),
  rootPath = path.normalize(__dirname + '/../../../images/'),
  multipartyMiddleware = multiparty({
    uploadDir: rootPath
  });


module.exports = function(app) {
  var authenticate = passport.authenticate('bearer', {
    session: false
  });
  var x = function(req, res, next) {
    console.log('aa');
    next();
  };

  app.route('/api/shops/images')
    .post(authenticate, users.requiresLogin, multipartyMiddleware, images.uploadAlbums);

  app.route('/api/images/:imageId')
    .get(images.processImage, images.outputImage);

  app.route('/api/shops/:shopId/albums')
    .post(x, authenticate, users.requiresLogin, multipartyMiddleware, images.uploadAlbums);
  /*.get(authenticate, users.requiresLogin, images.read)
  .post(authenticate, users.requiresLogin, images.hasAuthorization, images.create)
  .put(authenticate, users.requiresLogin, images.hasAuthorization, images.update)
  .delete(authenticate, users.requiresLogin, images.hasAuthorization, images.delete);*/


  app.param('imageId', images.findByID);
};