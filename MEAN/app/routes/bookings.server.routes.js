'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  users = require('../../app/controllers/users'),
  bookings = require('../../app/controllers/bookings');

module.exports = function(app) {
  var authenticate = passport.authenticate('bearer', {
    session: false
  });

  // Finish by binding the booking middleware
  app.param('bookingId', bookings.bookingByID);

  // booking  Routes
  app.route('/api/bookings')
    .get(authenticate, users.requiresLogin, bookings.list)
    .post(authenticate, users.requiresLogin, bookings.create);

  app.route('/api/schedules')
    .get(authenticate, users.requiresLogin, bookings.schedule);

  app.route('/api/bookings/:bookingId')
    .get(authenticate, users.requiresLogin, bookings.read)
    .put(authenticate, users.requiresLogin, bookings.hasAuthorization, bookings.update)
    .delete(authenticate, users.requiresLogin, bookings.hasAuthorization, bookings.delete);


};