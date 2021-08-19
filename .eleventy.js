const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.setBrowserSyncConfig({
      files: './_site/css/**/*.css'
    });
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addCollection("orderedDemos", function (collection) {
        return collection.getFilteredByTag("demo").sort((a, b) => {
          return a.data.order - b.data.order;
        });
      });

    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };