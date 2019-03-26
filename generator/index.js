module.exports = (api, options, rootOptions) => {
  api.injectImports('src/main.js', `import '@/plugins/vue-global-config'`)
  api.render('./template');
};
