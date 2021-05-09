const express = require('express')

const routes = express.Router()

// GET ALL RECORDS

routes.get('/records', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    conn.query('SELECT * FROM records ORDER BY date DESC', (err, resp) => {
      if (err) return res.send(err)

      res.json(resp)
    });
  });
});

//POST NEW RECORD

routes.post('/records', (req, res) => {
  const record = req.body

  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    conn.query('INSERT INTO records set ?',[record], (err, resp) => {
      if (err) return res.send(err)

      res.json(resp)
    });
  });
});


// DELETE RECORD

routes.delete('/records/:id', (req, res) => {
  const id = req.params.id

  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('DELETE FROM records WHERE id = ?',[id], (err, resp) => {
      if (err) return res.send(err)

      res.send('Record deleted succefully')
    });
  });
});


// UPDATE RECORD


routes.put('/records/:id', (req, res) => {
  const id = req.params.id
  const data = req.body

  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query(
      'UPDATE records set ? where id = ?',[data , id], 
      (err, resp) => {
        if (err) return res.send(err)

        res.send('Record Updated Succefully')
    });
  });
});

// GET LAST TEN RECORDS

routes.get('/lasttenrecords/', (req, res) => {

  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    conn.query('SELECT * FROM records ORDER BY date DESC LIMIT 10', (err, resp) => {
      if (err) return res.send(err)

      res.json(resp)
    });
  });
});

// GET INCOMES

routes.get("/records/incomes", (req, res) => {

  req.getConnection((err, conn) =>{
    if (err) return res.send(err)

    conn.query(
        "SELECT * FROM records WHERE amount > 0",
        (err, resp) => {
          if(err) return console.log(err)

          res.json(resp);
    });
  });
});

// GET EXPENSES

routes.get("/records/expenses", (req, res) => {

  req.getConnection((err, conn) =>{
    if (err) return res.send(err)

    conn.query(
        "SELECT * FROM records WHERE amount < 0",
        (err, resp) => {
          if(err) return console.log(err)

          res.json(resp);
    });
  });
});



module.exports = routes