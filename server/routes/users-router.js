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

usersRoute.put('/theme/:id', (req, res) => {
  const theme = req.body;
  User.update(theme, {where: { id: req.params.id }})
    .then(([data]) => {
      if (data === 0) {
        res.status(404);
      }
      res.sendStatus(200);
    })
    .catch(err => console.error(err, 'backErr'));
});

module.exports = usersRoute;