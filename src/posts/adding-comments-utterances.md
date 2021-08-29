---
date: 2021-08-28T11:18:34.000-07:00
title: 'Adding comments'
description: Adding comments using utterances
published: true
tags:
  - utterance
  - comments
---

I stumbled upon this nifty [site](https://dev.to/antopiras89/add-comments-to-your-static-blog-with-utterances-3jao) through which comments can be added using github login. It was easy to do. The one mistake I made was I did not restart the server due to which the changes were not reflected. These are the steps that I followed:
1. Install the utterance app on the repo and make my repo public.
2. Utterances app comes with eight themes and it can be configured in the code to whichever theme I want. The code below:
   ```
    <script src="https://utteranc.es/client.js" repo="antoBit/antodev" issue-term="title" label="💬" theme="dark-blue" crossorigin="anonymous" async></script>
   ```
3. After applying it in the template njk file, extend it to the posts, you want the comments to show and voila, the comments will be shown.
