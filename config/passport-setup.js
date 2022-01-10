const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../db/index.js');
require('dotenv').config();

const {BASEURL} = process.env;
// const BASEURL = 'http://localhost';

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
    }).catch((err) => console.error('Passport Deserialize Err'));
});

passport.use(
  new GoogleStrategy({
    //options for google strategy
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${BASEURL}:3000/auth/google/callback`
  }, (accessToken, refreshToken, profile, done) => {
    // console.log('profile:', profile);
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
            thumbnail: profile.photos[0].value
          })
            .then(newUser => {
              done(null, newUser);
            }).catch((err) => console.error('Error'));
        }
      }).catch((err) => console.error('Google Strategy Err'));
  })
);