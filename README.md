# vue-cli-plugin-global-config
[![npm](https://img.shields.io/npm/v/vue-cli-plugin-global-config.svg) ![npm](https://img.shields.io/npm/dm/vue-cli-plugin-global-config.svg)](https://www.npmjs.com/package/vue-cli-plugin-global-config) [![vue-cli3](https://img.shields.io/badge/vue--cli-3.x-brightgreen.svg)](https://github.com/vuejs/vue-cli)

  Global Config Plugin for [vue-cli@^3.0](https://cli.vuejs.org)


### Install

If you haven't yet installed vue-cli 3, first follow the install instructions [here](https://cli.vuejs.org/guide/installation.html)

Then create a project and add the Global Config plugin:

```bash
vue create my-app
cd my-app

vue add global-config
# or
vue add vue-cli-plugin-global-config
```

> **Warning**:
  It is recommended to commit your project's current state before running vue
  add, since the command will invoke the plugin's file generator and potentially
  make changes to your existing files.


### Additional information

* [Global Config](https://vuejs.org/v2/api/#Global-Config)
  Vue.config is an object containing Vue’s global configurations. You can modify
  its properties listed below before bootstrapping your application:
* [CLI Plugin Development * Guide](https://cli.vuejs.org/dev-guide/plugin-dev.html#cli-plugin)
  A CLI plugin is an npm package that can add additional features to the project
  using Vue CLI.

**Plugin generate structure:**
```
├── .env
├── .env.production
└── src
    └── plugins
        └── vue-global-config
            └── index.js
```


**Plugin modify:**
```
└── src
    └── main.js
```
