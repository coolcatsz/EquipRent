const { Router } = require('express');
const usersRoute = Router();
const { User } = require('../../db');
const { getAllUsers, getUserById } = require('../helpers/userHelper');

usersRoute.get('/allUser', (req, res) => {
  getAllUsers()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(500));
});

usersRoute.get('/show/:id', (req, res) => {
  getUserById(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(500));
});

usersRoute.patch('/theme/:id', (req, res) => {

  console.log('body', req.params.id);
  User.update( 
    {theme: req.body.theme},
    {where: { id: req.params.id }}
  )
    .then((data) => res.sendStatus(200))
    .catch(err => console.error(err));
  // User.update(
  //   { theme: theme },
  //   { where: { id: id }}
  // )
  //   .then(() => {
  //     res.sendStatus(204);
  //   })
  //   .catch(err => console.error(err));
});

module.exports = usersRoute;