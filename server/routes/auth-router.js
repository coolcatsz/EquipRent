const { Router } = require('express');
const authRouter = Router();
const passport = require('passport');

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
  }));

//auth logout
authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// authRouter.get('/user', (req, res) => {
//   console.log(req.user);
// });
module.exports = authRouter;