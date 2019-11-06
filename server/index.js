const express = require ('express');
const bodyParse = require ('body-parser');
const routes = require('./routes/route');
const mongoose = require ('mongoose');


const app = express();
const port = 4000;
app.use(bodyParse.json());

app.use('/', routes);

app.listen(4000, function(){
    console.log('server running at ' +port);
});