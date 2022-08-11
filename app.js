const express = require('express');
const app = express();
const path = require('path')
const port = 3000;
const router = express.Router();
const ejs = require('ejs');


app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use('/',require(path.join(__dirname,'src/routes/news.js')));
app.use('/',require(path.join(__dirname,'src/routes/country.js')));
app.use('/',require(path.join(__dirname,'src/routes/topics.js')));


app.listen(port,()=>{
    console.log("Listning on port 3000");
})