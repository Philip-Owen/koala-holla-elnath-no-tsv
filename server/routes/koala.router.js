// *********************************************************
//                      Dependencies 
// *********************************************************

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// *********************************************************
//                      Routes 
// *********************************************************
// *******GET routes*******
router.get('/', (req, res) =>{
    const queryText = 'SELECT * FROM koala ORDER BY "id"';
    pool.query(queryText)
        .then((result) => {
            // console.log('query results: ', result);            
            res.send(result.rows);
        })//end then result
        .catch((err) => {
            // console.log('error making select query:', err);
            res.sendStatus(500);
        });
});//end router get 

router.get('/ready', (req, res) =>{
    const queryText = 'SELECT * FROM koala WHERE "ready_to_transfer" = ' + "'Yes'";
    pool.query(queryText)
        .then((result) => {
            console.log('query results: ', result);            
            res.send(result.rows);
        })//end then result
        .catch((err) => {
            console.log('error making select query:', err);
            res.sendStatus(500);
        });
});//end router get 

// *******POST Routes*******
router.post('/', (req, res) => {
    console.log('req.body: ', req.body);
    const queryText = 'INSERT INTO koala("name", "gender", "age", "ready_to_transfer", "notes") VALUES($1, $2, $3, $4, $5)';
    pool.query(queryText, [req.body.name, req.body.gender, req.body.age, req.body.ready_to_transfer, req.body.notes])
        .then((result) => {
            console.log('query results: ', result);
            res.sendStatus(201);
        }) 
        .catch((err) => {
            // console.log('error making insert query:', err);
            res.sendStatus(500);
        }); 
});//end router post 

// *******PUT routes*******
router.put('/:id', (req, res) => {
    const queryText = 'UPDATE koala SET "ready_to_transfer" = $1 WHERE "id" = $2';
    pool.query(queryText, [req.body.ready_to_transfer, req.params.id])
        .then((result) => {
        console.log('query results: ', result);
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error making insert query:', err);
        res.sendStatus(500);
    });
})//end update to database 

// *******DELETE routes*******
router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM koala WHERE "id"= $1'
    pool.query(queryText, [req.params.id])
        .then((result) => {
         console.log('query results: ', result);
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error making insert query:', err);
        res.sendStatus(500);
    });
})//end delete in database 


module.exports = router;
