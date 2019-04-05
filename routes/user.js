var express = require('express');
var router = express.Router();
var connection = require('../config/connection');

router.post('/login', function(req, res) {
  connection.query(
    `INSERT INTO users_list(user, email, first_name, last_name, star_review)VALUE("${
      req.body.id
    }","${req.body.email}", "${req.body.first_name}", "${
      req.body.last_name
    }", "${req.body.star_review}")`,
    function(error, results, fields) {
      if (error) throw error;
      else {
        console.log('post made');
      }
    }
  );
});

router.get('/:id', function(req, res) {
  connection.query(
    `SELECT * FROM users_list WHERE user = "${req.params.id}"`,
    function(req, results) {
      if (results) {
        console.log(results);
        res.json(results);
      } else {
        console.log('sucks to suck');
      }
    }
  );
});
router.get('/', function(req, res) {
  connection.query('SELECT * FROM users_list', function(req, results) {
    if (results) {
      res.json(results);
    }
  });
});

router.post('/reviews', function(req, res) {
  connection.query(
    'INSERT INTO users.reviews(userId, review, stars )VALUES(?, ?, ?)',
    [req.body.userId, req.body.name, req.body.stars],
    function(error, results) {
      if (error) throw error;
      else {
        console.log('post made');
        res.status(200).send();
      }
    }
  );
});

router.get('/reviews', function(req, res) {
  connection.query('SELECT * FROM reviews', function(req, results) {
    if (results) {
      res.json(results);
    }
  });
});

module.exports = router;
