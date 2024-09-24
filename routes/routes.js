const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');

router.get('/', Controller.index);
router.post('/save', Controller.reymelKalbo);
router.get('/get-data', Controller.getData);

router.get('/test-connection', (req, res) => {
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Database connection failed:', err);
            return res.status(500).send('Database connection error');
        }
        connection.release(); // Release the connection back to the pool
        res.send('Database connected successfully!');
    });
});


module.exports = router;

