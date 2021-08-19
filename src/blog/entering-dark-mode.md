---
title: Entering The Dark Mode
---


Well, as terrible as the title sounds, it is all about toggling between light theme and the dark theme and how I went about doing it. Well, I searched on net online and there wasn't much help out there on how to integrate scss files. So, here is the process that I followed which might be helpful for the other souls who are looking out to integrate dark mode in their 11ty files:
1. So, first things first, I installed `node-sass-promise`, `node-sass` and `clean-sass`.
2. After installation, I wrote a separate scss file for dark mode named as 'night-mode'
3. I created a styles.11ty.js where the scss files are rendered into css files. I also learnt the fact that if there is any file having a suffix `.11ty.js`, it will be rendered by 11ty server. This [article](https://dev.to/adamkdean/simple-scss-with-11ty-kmn) written by adamkdean provided to be most helpful in this.
4. After that, it came down to adding and removing class when toggling themes from light mode to dark mode. Here, this [pull](https://github.com/Dref360/dref360.github.io/commit/58a073aeb1c16083c6df2a5c6fbbb770e1b031fa) request by Dref360 proved to be most helpful.
5. After integrating these two, I was finally able to achieve toggling from dark mode to light mode and vice versa.