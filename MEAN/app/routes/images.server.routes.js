'use strict';

/**
* Module dependencies.
*/
var passport = require('passport'),
users = require('../../app/controllers/users'),
images = require('../../app/controllers/images'),
multiparty = require('connect-multiparty'),
multipartyMiddleware = multiparty();

module.exports = function(app) {
  var authenticate = passport.authenticate('bearer', {
    session: false
  });

  app.route('/shops/images')
  .post(authenticate, users.requiresLogin, multipartyMiddleware, images.uploadFile);


  app.route('/shops/images/:imageId')
  .get(authenticate, users.requiresLogin, images.read)
  .post(authenticate, users.requiresLogin, images.hasAuthorization, images.create)
  .put(authenticate, users.requiresLogin, images.hasAuthorization, images.update)
  .delete(authenticate, users.requiresLogin, images.hasAuthorization, images.delete);


  app.param('imageId', images.findByID);
};
