module.exports = function (eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/css');

  // Watch CSS for changes
  eleventyConfig.addWatchTarget('src/css/');

  // Custom filter: format date
  eleventyConfig.addFilter('dateFormat', (value) => {
    const date = new Date(value);
    return date.toLocaleDateString('en-GB', {
      month: 'short',
      year: 'numeric',
    });
  });

  // Custom filter: year only
  eleventyConfig.addFilter('year', () => new Date().getFullYear());

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
