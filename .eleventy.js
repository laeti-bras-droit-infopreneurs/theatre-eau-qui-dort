const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  const md = markdownIt({ html: true, breaks: false });

  // Filtre markdown : les champs texte du CMS sont en Markdown
  eleventyConfig.addFilter("md", (content) => (content ? md.render(content) : ""));
  eleventyConfig.addFilter("mdInline", (content) => (content ? md.renderInline(content) : ""));

  // Fichiers copiés tels quels dans le site généré
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/llms.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
