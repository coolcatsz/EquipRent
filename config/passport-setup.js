const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../db/index.js');
require('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({
    where: {
      id: id
    }
  })
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    //options for google strategy
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('profile:', profile);
    //passport cb
    //check if user already exists
    User.findOne({
      where: {
        googleId: profile.id}
    })
      .then(currentUser => {
        if (currentUser) {
          //user already exists
          done(null, currentUser);
        } else {
          //user doesn't exist, create new user
          User.create({
            username: profile.displayName,
            googleId: profile.id,
            email: profile.email,
            thumbnail: profile.photos[0].value
          })
            .then(newUser => {
              done(null, newUser);
            });
        }
      });
  })
);