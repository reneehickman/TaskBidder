var express = require('express');
var router = express.Router();
var connection = require('../config/connection');

/* GET users listing. */
//why isn't the route '/users'-- i think its because the app sends us to this so we are already in users...
router.post('/', function(req, res) {
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
  console.log(req.params);
  connection.query(
    'SELECT * FROM users_list WHERE user = ' + req.params.id,
    function(req, results) {
      if (results) {
        res.json(results);
      }
    }
  );
});

module.exports = router;
