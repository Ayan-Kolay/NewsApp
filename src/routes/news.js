const express = require('express');
const path = require('path')
const router = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/',async(req,res)=>{
    const newsApi = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=c7aebe8658a1426882926938b9dc5e95")
    articles = newsApi.data.articles;
    res.render(path.join(__dirname,'../views/news'),{articles:articles,topic:"everything"});
})

router.post('/',async function(req,res){
    const q = req.body.query;
    const resp = q.split(' ')[0];
    url = "https://newsapi.org/v2/top-headlines?apiKey=c7aebe8658a1426882926938b9dc5e95&language=en"
    url = url+"&q="+resp;

    const newsApi = await axios.get(url);

    article = newsApi.data.articles;

    res.render(path.join(__dirname,'../views/news'),{articles:article,topic:"everything"})

})

module.exports = router;