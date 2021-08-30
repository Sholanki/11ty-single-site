const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const striptags = require("striptags");
const embedTwitter = require("eleventy-plugin-embed-twitter");

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addNunjucksAsyncShortcode("Image", async (src, alt) => {
    if (!alt) {
      throw new Error(`Missing \`alt\` on myImage from: ${src}`);
    }

    let stats = await Image(src, {
      widths: [640, 960, 1200, 1800, 2400],
      formats: ["jpeg", "webp", "jpg"],
      urlPath: "/images/",
      outputDir: "./public/images/",
    });

    let lowestSrc = stats["jpeg"][0];

    const srcset = Object.keys(stats).reduce(
      (acc, format) => ({
        ...acc,
        [format]: stats[format].reduce(
          (_acc, curr) => `${_acc} ${curr.srcset} ,`,
          ""
        ),
      }),
      {}
    );

    const source = `<source type="image/webp" srcset="${srcset["webp"]}" >`;

    const img = `<img
      loading="lazy"
      alt="${alt}"
      src="${lowestSrc.url}"
      sizes='(min-width: 1024px) 1024px, 100vw'
      srcset="${srcset["jpeg"]}"
      width="${lowestSrc.width}"
      height="${lowestSrc.height}">`;

    return `<div class="image-wrapper"><picture> ${source} ${img} </picture></div>`;
  });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginRss, {
      posthtmlRenderOptions: {
        closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
      }
    });
  
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(embedTwitter);
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.setBrowserSyncConfig({
      files: './public/css/**/*.css'
    });
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addFilter("readableDate", dateObj => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });

    eleventyConfig.addFilter("jsonTitle", (str) => {
      let title = str.replace(/((.*)\s(.*)\s(.*))$/g, "$2&nbsp;$3&nbsp;$4");
      title = title.replace(/"(.*)"/g, '\\"$1\\"');
      return title;
    });

    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addCollection("orderedDemos", function (collection) {
        return collection.getFilteredByTag("demo").sort((a, b) => {
          return a.data.order - b.data.order;
        });
      });

      eleventyConfig.addFilter("head", (array, n) => {
        if( n < 0 ) {
          return array.slice(n);
        }
    
        return array.slice(0, n);
      });
    
      const now = new Date();
      const livePosts = p => p.date <= now && p.data.published;
      eleventyConfig.addCollection('posts', collection => {
        return collection.getFilteredByGlob('./src/posts/*.md');
      });
    
      eleventyConfig.addCollection('featuredPosts', collection => {
        return collection.getFilteredByGlob('./src/posts/*.md')
          .filter(
            post => post.data.featured_post && livePosts(post)
          )
          .sort((a,b) => {
            return a.data.post_weight - b.data.post_weight;
          });
      });
    
      eleventyConfig.addCollection("tagList", function(collection) {
        let tagSet = new Set();
        collection.getAll().forEach(function(item) {
          if( "tags" in item.data ) {
            let tags = item.data.tags;
    
            tags = tags.filter(function(item) {
              switch(item) {
                // this list should match the `filter` list in tags.njk
                case "all":
                case "nav":
                case "post":
                case "posts":
                  return false;
              }
    
              return true;
            });
    
            for (const tag of tags) {
              tagSet.add(tag);
            }
          }
        });
    
        // returning an array in addCollection works in Eleventy 0.5.3
        return [...tagSet];
      });

    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };

  function extractExcerpt(article) {
    if (!article.hasOwnProperty("templateContent")) {
      console.warn(
        'Failed to extract excerpt: Document has no property "templateContent".'
      );
      return null;
    }
  
    let excerpt = null;
    const content = article.templateContent;
  
    excerpt = striptags(content)
      .substring(0, 250) // Cap at 250 characters
      .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
      .trim()
      .concat("...");
  
    return excerpt;
  };