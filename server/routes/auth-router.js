const { Router } = require('express');
const authRouter = Router();
const { GOOGLECLIENTID } = require('process.env');

//auth login with google
authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

//callback redirect for google
authRouter.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

//auth logout
authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;