---
date: 2020-08-21T12:18:34.000-07:00
title: 'Adding Postcards'
description: Showing posts as postcards in post page
published: true
tags:
  - postcards
---

So, one of the nifty tools in 11ty website is creating postcards. I thought, I will give it a try. So, this is how I went about it:
1. First and foremost, it is basic css. Adding `grid-template` and `grid-rows`. It is best explained in this [site](https://learncssgrid.com/). It clears the concept of how to create templating of the postcards.
2. Next comes, what to include inside the cards - `title`, `date` `excerpt` and so on. Currently, I have kept it only till title and I plan to expand it further to include `excerpt` and `images`.
3. Next comes the animation part, so that on hover, the card pops out. This [article](https://dev.to/jonoyeong/how-to-make-your-cards-pop-10ok) from jonathanyeong proved to be extremely helpful. It describes how the popping of card can be done using `transform` and using 2 classes. It is a good read.

Well, that's covered for now. ENJOY!