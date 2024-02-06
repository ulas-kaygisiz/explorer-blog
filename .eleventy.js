// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("bloginfo", function(title, author) {
    return `<blockquote>${title} by <strong>${author}</strong></blockquote>`;
});

};