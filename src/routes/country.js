const express = require('express');
const path = require('path')
const router = express.Router();
const axios = require('axios');

router.get('/:topic/:country',async(req,res)=>{

    let newsApi;
    let url;
    if(req.params.topic==="everything"){
        url = "https://newsapi.org/v2/top-headlines?country="+req.params.country+"&apiKey=c7aebe8658a1426882926938b9dc5e95";
        newsApi = await axios.get(url)
    }
    else{
        url = "https://newsapi.org/v2/top-headlines?country="+req.params.country+"&category="+req.params.topic+"&apiKey=c7aebe8658a1426882926938b9dc5e95";
        newsApi = await axios.get(url)
    }
    articles = newsApi.data.articles;
    res.render(path.join(__dirname,'../views/news'),{articles:articles,topic:req.params.topic});
})

module.exports = router;