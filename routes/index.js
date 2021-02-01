'use strict';

const { Router } = require('express');
const router = new Router();

const Place = require('./../models/place');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

module.exports = router;
