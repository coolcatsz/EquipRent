const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { Users } = require('../db/index.js');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    //options for google strategy
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    //passport cb
    //check if user already exists
    Users.findOne({ googleId: profile.id })
      .then(currentUser => {
        if (currentUser) {
          //user already exists
          done(null, currentUser);
        } else {
          //user doesn't exist, create new user
          Users.create({
            username: profile.displayName,
            googleId: profile.id,
            thumbnail: profile.photos[0].value
          })
            .then(newUser => {
              done(null, newUser);
            });
        }
      });
  })
);