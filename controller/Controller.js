const db = require('../config/db');

const main = {
    index: (req, res) => {
        res.render('index');  
    },
    reymelKalbo: (req, res) => {
      console.log(req.body); 
      const { lastName, firstName, email, gender } = req.body;
  
      const sql = 'INSERT INTO tblReymelPugo (lastName, firstName, email, gender) VALUES (?, ?, ?, ?)';
      db.query(sql, [lastName, firstName, email, gender], (err, result) => {
          if (err) throw err;
          res.send('Data saved successfully!');
      });
  },
  
  getData: (req, res) => {
    const sql = 'SELECT * FROM tblReymelPugo';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database query error');
        }
        res.render('get', { data: results });
    });
}

};

module.exports = main;
