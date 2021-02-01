'use strict';

const { Router } = require('express');
const router = new Router();

const Place = require('./../models/place');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

router.get('/create', (req, res, next) => {
  res.render('places/create');
});

router.post('/create', (req, res, next) => {
  const data = req.body;
  console.log(data);

  Place.create({
    name: data.name,
    type: data.type
  })
    .then((place) => {
      res.redirect('index');
      //res.redirect(`/create/${place._id}`);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
