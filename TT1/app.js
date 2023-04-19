const express = require('express');
const app = express();
const port = 3000;

const api = require('./api');

app.use('/api', api);

app.use('*', (req, res) => {
    res.status(404).json({
        status: '404',
        message: 'Page not found',
    });
});

app.listen(port, () => {
    console.log('Server started on port 3000');
});