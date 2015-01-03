'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
 BearerStrategy = require('passport-http-bearer').Strategy,
  User = require('mongoose').model('User');

module.exports = function() {
  // Use local strategy
  console.log('BearerStrategy');
  passport.use(new BearerStrategy(
    function(token, done) {
      console.log('barer token', token);
      User.findOne({ token: token }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
      });
    }
  ));
};
