---
date: 2020-08-19T11:18:34.000-07:00
title: 'Making separate page for posts'
description: Making separate page for posts
published: true
tags:
  - postPage
---

So, this is one of those undertakings where I wanted to create separate page for posts. So, this is what I came up with:
1. I installed `@11ty/eleventy-navigation` plugin which helps in navigation of items. It is an amazing tool that gives the order of navigation through order and navigation item with `key`value.
2. I added a post.njk file and made it a part of navigation list.
3. I iterated the posts from the post.njk file and it now acts as a separate page for posts.

## Working process
The working process was a bit time consuming as I did not go by the concept of looking into the root cause of things. So, plenty of time was wasted but in the process, this is what I learnt:
1. When in doubt, recheck the old code. I was going around in circles that nothing was wrong with the code that I have used. In retrospective, the old code has stopped working, so it made me understand that I have to see the new code additions that have been made.
2. I tend to skirt around the main issue thinking that it can be fixed by using a patch. It isn't so. It is better to face the root issue rather than skirting around it. Here, the main issue was of how I was filtering the collections and sorting it out. When I fixed it, the issue got fixed.

### References used
1. [11ty Navigation Plugin](https://www.11ty.dev/docs/plugins/navigation/)