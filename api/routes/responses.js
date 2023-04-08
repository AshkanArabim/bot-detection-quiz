var express = require('express');
var router = express.Router();

// store responses into server
router.post("/response", jsonParser, (req, res) => {
  // store data from the front end

  const data = req.body;
  const id = data.id;
  const word = data.word;

  console.log(data);

  // connect to database and store data
  con.connect((err) => {
    const sql = `UPDATE sql_tweets SET scam = '${word}' WHERE tweet_id = ${id};`;
    con.query(sql, async (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  });
});
