
var express = require('express');
//var path = require('path');
var app = express();
import path from 'path';

const PATH_DIST = path.resolve(__dirname, '../client/public');
app.use(express.static(PATH_DIST));

//app.use('/static', express.static(path.resolve(__dirname, '../client')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('https://codeforgeek.com/2015/08/restful-api-node-mongodb/')
});
