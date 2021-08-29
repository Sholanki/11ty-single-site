---
date: 2021-08-28T11:18:34.000-07:00
title: 'Embedding tweets'
description: Embedding tweets
published: true
tags:
  - embedTweets
---

Well, it all started with this tweet:

https://twitter.com/BiswasSholanki/status/1424753601767899136

And from here, the journey of 11ty began. Currently, I am in the stage where I am embedding tweets. So how to do it?
These are the steps that I followed:
1. Use the code `npm install eleventy-plugin-embed-twitter`
2. After that in eleventy.js file, add the code: 
   	```
       const embedTwitter = require("eleventy-plugin-embed-twitter");

        module.exports = function(eleventyConfig) {
        eleventyConfig.addPlugin(embedTwitter);
        };
    ```

3. In any post wherever, you want to tweet, paste the link in a separate line and voila your tweet is embedded.

Thanks to this [site](https://www.npmjs.com/package/eleventy-plugin-embed-twitter), I was able to embed my tweet.   