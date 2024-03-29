'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  users = require('../../app/controllers/users'),
  shops = require('../../app/controllers/shops');

module.exports = function(app) {
  var authenticate = passport.authenticate('bearer', {
    session: false
  });

  // Shop Routes
  app.route('/admin/shops')
    .get(authenticate, users.requiresLogin, shops.list)
    .post(authenticate, users.requiresLogin, shops.create);

  app.route('/admin/shops/:shopId')
    .get(authenticate, users.requiresLogin, shops.read)
    .put(authenticate, users.requiresLogin, shops.hasAuthorization, shops.update)
    .delete(authenticate, users.requiresLogin, shops.hasAuthorization, shops.delete);

  // Finish by binding the shop middleware
  app.param('shopId', shops.shopByID);



  // Shop- Owner Routes
  app.route('/api/shops-owner')
    .get(authenticate, users.requiresLogin, shops.listOwner)
    .post(authenticate, users.requiresLogin, shops.create);

  app.route('/api/shops-owner/:shopId')
    .get(authenticate, users.requiresLogin, shops.read)
    .put(authenticate, users.requiresLogin, shops.hasAuthorization, shops.update)
    .delete(authenticate, users.requiresLogin, shops.hasAuthorization, shops.delete);


  // Shop-list Routes
  app.route('/api/shops')
    .get(authenticate, users.requiresLogin, shops.list); //TODO: list food,servie,higlight

  app.route('/api/shops/:shopId')
    .get(authenticate, users.requiresLogin, shops.read);

};