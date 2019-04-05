var express = require('express');
var router = express.Router();
var connection = require('../config/connection');
var app = express();

router.get('/', function(req, res) {
  connection.query('SELECT * FROM todos', function(req, results) {
    if (results) {
      res.json(results);
    }
  });
});

router.get('/personal/:id', function(req, res) {
  console.log('mom');
  connection.query(
    ` SELECT * FROM todos WHERE userId = "${req.params.id}"`,
    function(err, results) {
      if (results) {
        return res.send(results);
      }
    }
  );
});

router.get('/minStar/:minstar', function(req, res) {
  connection.query(
    ` SELECT * FROM market WHERE minStar <= "${req.params.minstar}"`,
    function(req, results) {
      if (results) {
        // console.log(results);
        return res.send(results);
      }
    }
  );
});
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
  connection.query(
    ` SELECT * FROM market WHERE minStar <= "${req.params.minstar}"`,
    function(req, results) {
      if (results) {
        // console.log(results);
        return res.send(results);
      }
    }
  );
});

///// create axios calls for these gets for todos market place

router.delete('/delete/:id', function(req, res) {
  connection.query(`DELETE FROM todos WHERE id = "${req.params.id}"`, function(
    error,
    results
  ) {
    if (error) return console.error(error);

    console.log('Deleted Row(s):', results.affectedRows);
  });
});

router.get('/market/:id', function(req, res) {
  connection.query(
    ` SELECT * FROM market WHERE best_bidderId = "${
      req.params.id
    }" AND expired = 1`,
    function(req, results) {
      if (results) {
        return res.send(results);
      }
    }
  );
});

//update mysql on new best bid
router.put('/market', function(req, res) {
  let startingBid = parseInt(req.body.startingBid);
  connection.query(
    `UPDATE market SET best_bid = ${req.body.best_bid}, best_bidderId = "${
      req.body.best_bidderId
    }"  WHERE taskId = ${req.body.taskId}`,
    function(error, results, fields) {
      if (error) throw error;
      else {
        console.log('item updated');
      }
    }
  );
});

//update todo when the bidding is expired
router.put('/expired/:id', function(req, res) {
  let startingBid = parseInt(req.body.startingBid);
  connection.query(
    `UPDATE market SET expired = 1 WHERE taskId = ${req.params.id}`,
    function(error, results, fields) {
      if (error) throw error;
      else {
        console.log('item updated');
      }
    }
  );
});

router.post('/market', function(req, res) {
  let startingBid = parseInt(req.body.startingBid);
  connection.query(
    `INSERT INTO market(userId, description, title, best_bid, minStar, expiration_date)VALUE("${
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

module.exports = router;

/////create a todod route for personal
