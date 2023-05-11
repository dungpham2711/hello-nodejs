import express from 'express';

var app = express();

app.get('/api/hello', function(req, res) {
    res.send('Hello node');
});

app.listen(3001, function() {
    console.log('listening on http://localhost:3001');
})
