const pluginsRss = require("@11ty/eleventy-plugin-rss");



module.exports = function(eleventyConfig){
    // eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addPlugin(pluginsRss);













    return{
        dir: {
            input: "src",
            output: "public",
            includes: "_includes"
            // layout: "_layouts"
        }
    }
}