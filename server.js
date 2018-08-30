var express = require('express');
var app = express();
var server = require('http').createServer(app);
const path = require('path');

app.set('port' , process.env.PORT || 3000);

app.use(express.static(path.join('')));

app.listen(app.get('port'), ()=>{
    console.log("server listening in port "+ app.get('port'));
});