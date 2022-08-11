const express = require('express');
const path = require('path')
const router = express.Router();
const axios = require('axios');

router.get('/:topic',async(req,res)=>{

    url = "https://newsapi.org/v2/top-headlines?apiKey=c7aebe8658a1426882926938b9dc5e95&language=en" + "&category="+req.params.topic;
    
    const newsApi = await axios.get(url)
    articles = newsApi.data.articles;

    res.render(path.join(__dirname,'../views/news'),{articles:articles,topic:req.params.topic});
})

module.exports = router;