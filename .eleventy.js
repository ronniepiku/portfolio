module.exports = function (eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy('src/assets');

  // Watch CSS and JS for changes
  eleventyConfig.addWatchTarget('src/css/');
  eleventyConfig.addWatchTarget('src/assets/js/');

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
    pathPrefix: '/portfolio/',
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
