var express = require("express");
var router = express.Router();

// fetch tweets from server
router.get("/tweets", (req, res) => {
  //connect to database and fetch data
  con.connect((err) => {
    const sql = "SELECT * FROM tweets.sql_tweets";
    con.query(sql, async (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  });
});

module.exports = router;
