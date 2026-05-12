module.exports = function(eleventyConfig) {
  // 1. 强制收集 posts 文件夹下的所有 md 文件作为 blog 集合
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/*.md");
  });

  // 2. 文件夹透传
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};