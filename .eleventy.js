const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.setBrowserSyncConfig({
      files: './_site/css/**/*.css'
    });
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addFilter("readableDate", dateObj => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
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