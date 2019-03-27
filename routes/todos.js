var express = require('express');
var router = express.Router();
var connection = require('../config/connection');
var app = express();

/* GET users listing. */
//why isn't the route '/users'-- i think its because the app sends us to this so we are already in users...
router.post('/', function(req, res) {
  let startingBid = parseInt(req.body.startingBid);
  connection.query(
    `INSERT INTO todos(userId, description, title, startingBid, minStar, expiration)VALUE("${
      req.body.userid
    }","${req.body.description}", "${req.body.title}", "${startingBid}", "${
      req.body.minStar
    }", "${req.body.expiredTime}")`,
    function(error, results, fields) {
      if (error) throw error;
      else {
        console.log('post made');
      }
    }
  );
});

router.get('/minStar/:minstar', function(req, res) {
  console.log(req.params.minstar);
  connection.query(
    ` SELECT * FROM todos WHERE minStar >= "${req.params.minstar}"`,
    function(req, results) {
      if (results) {
        console.log(results);
        return res.send(results);
      }
    }
  );
});

router.get('/:id', function(req, res) {
  connection.query(
    ` SELECT * FROM todos WHERE userId = "${req.params.id}"`,
    function(req, results) {
      if (results) {
        return res.send(results);
      }
    }
  );
});

module.exports = router;
