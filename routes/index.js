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
      res.redirect('/create/places');
      //res.redirect(`/create/${place._id}`);
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/create/places', (req, res, next) => {
  Place.find({})
    .then((places) => {
      res.render('places/display', { places });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/create/places/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Place.findById(id)
    .then((place) => {
      res.render('places/single', { place: place });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/create/places/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Place.findByIdAndDelete(id)
    .then(() => {
      console.log(Deleted);
      res.redirect('/create/places');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
