---
title: My Journey in 11ty
---

### 11ty Journey so far
#### So, what I am writing in this post is to make use of all the things that I have learned so far in 11ty and make use of markdown language that I have come to discover so far. So, first things first, what did I use and learn so far:

#### - There is something called unordered list of items
#### - I am using it right now by using the syntax `-First item`.
#### - With one site at disposal, I can learn and tweak plenty of things at my disposal and have fun
#### - It is fun if I know why, it is still fun if I do not know why. As long as I am curious and want to do something, I am good
  
  #### Ok, it is time to list down what I have learnt and still learning in 11ty so far in an orderly way :)
  1. `npm init -y` and `npm install @11ty/eleventy` are the most initial scripts that are to be run in the beginning to install package.json and to install eleventy
  2. Next, comes modification of scripts in package.json to serve and build eleventy
  3. After that comes inclusion of .eleventy.js to specify my input and output directories of my project folder and to actually create the  
  4. Next comes layouts where by using html boilerplate the layout can be defined.
        - A hot tip: I use html5 boilerplate plugin in visual studio code. One simply has to install it and after installation, if one simply writes html, one is nudged as suggestion to include the boilerplate and voila, the boilerplate is included
  5. The template goes inside `_includes/*.njk` and it can be extended or included in other markdown files
  6. Next comes css which goes inside `css/*.css` and it can be included using the code `link rel="stylesheet" href="/css/*.css"` and in .eleventy.js, add the code `addPassThroughCopy()` function for css.
  7. Next comes collection where we write posts or articles inside folder like ***articles*** or ***posts*** and inside it write a json file namely as article.json or post.json and include tags for it so that they can be all consolidated within that specific tagname.
  8. To iterate through the collection, I can use for loop through collection of items and display it
  9. Now comes pagination. Phew! In pagination, we describe size of items like 3 or any other random number. Now, all the posts are distributed as per that size within that pagination size. So, if there are 10 posts, there will be list of `10 div 3 = 3 and 1 remaining post` i.e. 4 pages of 3 posts each excluding the last one which has 1 post.
  10. Next are functions which are conveniently put inside `partials/*.njk` which can be included inside other njk files using the code `include filename.njk` to include it.

#### Well, that's all to it and a whole load of imagination. Here are the list of reference websites that I found useful while making website and having fun
1. For markdown, I found this nifty [site](https://www.markdownguide.org/cheat-sheet/).
2. For 11ty, I foun these fabulous sites which were suggested to me bymy friends. They are:
   - [11ty.rocks](https://11ty.rocks/)
   - [Creating 1 page website](https://11ty.rocks/posts/eleventy-templating-static-code-demos/)
   - [Creating 11ty site from scratch](https://11ty.rocks/posts/create-your-first-basic-11ty-website/)
   - [Piccalil course](https://piccalil.li/course/learn-eleventy-from-scratch/)
   - [Nunjucks templating](https://mozilla.github.io/nunjucks/templating.html)

#### A big thank you to the online creators and their courses, my peers who have been in this journey and who have helped me put up this website. A big **THANK YOU** to all. Without your collaboration and your shared efforts online, this would not have been possible.
