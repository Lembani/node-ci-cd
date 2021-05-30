const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    res.status(200).json({
        message: 'Hello random internet visitor'
    });
});

module.exports = app;