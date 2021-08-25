---
date: 2021-08-25T11:18:34.000-07:00
title: 'Optimising Images'
description: Optimising images
published: true
tags:
  - images
---

So, today I inserted images with optimisation in mind. This was a straightforward process and I basically ran into issues because of the inconsistency in input folder structure and the output folder structure. This is the process that I followed:
1. Install the eleventy image plugin by using the code `npm install @11ty/eleventy-img`
2. Create an images folder
3. Add the `addPassThroughCopy` for the images folder
4. Now, in .eleventy.js, we do some custom coding to include `webp` format of images which is of reduced compression size and to get various sizes of the image stored in 'image' directory and take only the least size and the most optimum format of the image to be served by 11ty.
5. We include `alt` attribute as a must in the function. It can be made optional but it is good practice to have 'alt' attribute of the image so that a brief description of the image can convey the message when the image is not being displayed
6. In the function, input and output directories should match. In case of mismatch, the image is not displayed on website.
7. I got most help from this [site](https://mahmoudashraf.dev/blog/how-to-optimize-and-lazyloading-images-on-eleventy/).

Well, that's it for now. Stay tuned as always!