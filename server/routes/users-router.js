const { Router } = require('express');
const usersRoute = Router();
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

module.exports = usersRoute;