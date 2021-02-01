'use strict';

const { Router } = require('express');
const router = new Router();

const Place = require('./../models/place');

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
      //res.render('places/create');
      res.redirect('/places');
      //res.redirect(`/create/${place._id}`);
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/places', (req, res, next) => {
  Place.find({})
    .then((places) => {
      res.render('places/display', { places });
    })
    .catch((error) => {
      next(error);
    });
});

/*router.get('/places/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Place.findById(id)
    .then((place) => {
      res.render('places/single');
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Place.findById(id)
    .then((place) => {
      res.render('places/confirm-deletion', { place: place });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Place.findByIdAndRemove(id)
    .then(() => {
      res.redirect('places/display');
    })
    .catch((error) => {
      next(error);
    });
});*/

module.exports = router;
