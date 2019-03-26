module.exports = (api, options, rootOptions) => {
  api.injectImports('src/main.js', `import '@/plugins/element.js'`)
  api.render('./template');
};
