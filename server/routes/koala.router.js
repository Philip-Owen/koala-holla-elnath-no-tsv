const express = require('express');
const router = express.Router();
const pool = require('..modules/pool');


app.get('/', (req, res) =>{
    const queryText = 'SELECT * FROM koala';
    pool.queryText(queryText)
        .then((result) => {
            console.log('query results: ', result);            
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('error making select query:', err);
            res.sendStatus(500);
        });
});

app.post('/', (req, res) => {
    const queryText = 'INSERT INTO koala("name", "gender", "age", "ready_to_transfer", "notes") VALUES($1, $2, $3, $4, $5)';
    pool.queryText(queryText, [req.body.name, req.body.gender, req.body.age, req.body.ready_to_transfer, req.body.notes])
        .then((result) => {
            console.log('query results: ', result);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('error making insert query:', err);
            res.sendStatus(500);
        });
});

module.exports = router;
