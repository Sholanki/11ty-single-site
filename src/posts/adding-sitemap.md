---
date: 2021-08-29T11:18:34.000-07:00
title: 'Adding sitemap'
description: Adding sitemap
published: true
tags:
  - sitemap
  - googleanalytics
---

So, for adding sitemap, I was confused on how to do it and what is sitemap exactly! Unfortunately, I have never done anything with Google Analytics and these sites helped me in creating Google analytics and sitemap for my website.

### The sites
1. [Google analytics for my website](https://jec.fyi/blog/setting-up-seo-and-google-analytics) - This site is beautiful. It tells how to set up Google Analytics for 11ty website step by step.
2. [Creating sitemap](https://www.belter.io/eleventy-sitemap/) - It gives a debrief of how to create site map for 11ty. 
   
For creating sitemap for my own website, I followed the steps mentioned in the first article and then the second one. This is what I did:
1. Create [Google analytics](https://analytics.google.com/) account.
2. Copy the measurement id
3. Write this piece of code in my `base.njk` file:
   ```
    <script async 
        src="https://www.googletagmanager.com/gtag/js?id=your_tracking_id">
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
        dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'your_tracking_id');
    </script>
   ```
4. Add `robots.njk` file under src->root folder.
5. In `site.json` file inside '_data' folder, I included the url of my website
6. Add [Google Search console](https://search.google.com/search-console/welcome?utm_source=about-page) for my website
7. Add the following code under `env.js` file inside '_data' folder
   ```
    tracking: {
      gtag: 'G-GDVBL4Z373',
    },
   ```

And that's that