const { Router } = require('express');
const authRouter = Router();
const passport = require('passport');
const { User } = require('../../db/index.js');

//auth login with google
authRouter.get('/auth/google', 
  passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

//callback redirect for google
authRouter.get('/auth/google/callback', 
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/fail'
  })
);

authRouter.get('/auth/verify', (req, res) => {
  const cookies = req.cookies;
  console.log('session', req.session.passport.user);
  User.findByPk(req.session.passport.user)
    .then((user) => {
      console.log(user);
      res.status(200).send(user);
    });
  // console.log('cooookies', cookies);
}
);

//auth logout
authRouter.get('/logout', (req, res) => {
  req.logout();
  res.clearCookie('session');
  res.redirect('/');
});

module.exports = authRouter;