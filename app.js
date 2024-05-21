var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/docs', function (req, res) {
    res.send('This is the documentation for the Hello World backend project.');
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port ' + (process.env.PORT || 3000) + '!');
});