---
date: 2020-08-19T11:18:34.000-07:00
title: 'Adding RSS Feed in my site'
description: Including RSS Feed in my website
published: true
tags:
  - postPage
---

So, this was pretty sraightforward. All I had to do to include RSS feed in my website was to go through the steps as mentioned on this [site](https://www.11ty.dev/docs/plugins/rss/). The steps that I followed were:
1. Run this code `npm install @11ty/eleventy-plugin-rss --save-dev`
2. In .eleventy.js file, include this code:
   ```
     const pluginRss = require("@11ty/eleventy-plugin-rss");
    module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    };
   ```

3. Include a feed.njk file having template for your metadata, posts, author, bio, link, etc. 11ty will parse feed.njk and produce feed.xml on its own and voila the feed.xml will be displayed on yoursite/feed.xml

ENJOY!!