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

### References used
1. [11ty Navigation Plugin](https://www.11ty.dev/docs/plugins/navigation/)