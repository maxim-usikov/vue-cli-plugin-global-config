import Vue from 'vue';

/**
 * Suppress all Vue logs and warnings.
 *
 * @see: https://vuejs.org/v2/api/#silent
 */
Vue.config.silent = process.env.VUE_APP_GLOBAL_CONFIG_SILENT;

/**
 * Define custom merging strategies for options.
 *
 * The merge strategy receives the value of that option defined on the parent
 * and child instances as the first and second arguments, respectively. The
 * context Vue instance is passed as the third argument.
 *
 * @see: https://vuejs.org/v2/api/#optionMergeStrategies
 */
Vue.config.optionMergeStrategies = {};

/**
 * Configure whether to allow vue-devtools inspection. This option’s default
 * value is true in development builds and false in production builds. You can
 * set it to true to enable inspection for production builds.
 *
 * @see: https://vuejs.org/v2/api/#devtools
 */
Vue.config.devtools = process.env.VUE_APP_GLOBAL_CONFIG_DEV_TOOLS;

/**
 * Assign a handler for uncaught errors during component render function and
 * watchers. The handler gets called with the error and the Vue instance.
 *
 * @see: https://vuejs.org/v2/api/#errorHandler
 */
Vue.config.errorHandler = undefined

/**
 * Assign a custom handler for runtime Vue warnings. Note this only works during
 * development and is ignored in production.
 *
 * @see: https://vuejs.org/v2/api/#warnHandler
 */
Vue.config.warnHandler = undefined;

/**
 * Make Vue ignore custom elements defined outside of Vue (e.g., using the Web
 * Components APIs). Otherwise, it will throw a warning about an Unknown custom
 * element, assuming that you forgot to register a global component or
 * misspelled a component name.
 *
 * @see: https://vuejs.org/v2/api/#ignoredElements
 */
Vue.config.ignoredElements = [];

/**
 * Define custom key alias(es) for `v-on`.
 *
 * @see: https://vuejs.org/v2/api/#keyCodes
 */
Vue.config.keyCodes = {};

/**
 * Set this to true to enable component init, compile, render and patch
 * performance tracing in the browser devtool performance/timeline panel. Only
 * works in development mode and in browsers that support the performance.mark
 * API.
 *
 * @see: https://vuejs.org/v2/api/#performance
 */
Vue.config.performance = process.env.VUE_APP_GLOBAL_CONFIG_PERFORMANCE;

/**
 * Set this to false to prevent the production tip on Vue startup.
 *
 * @see: https://vuejs.org/v2/api/#productionTip
 */
Vue.config.productionTip = process.env.VUE_APP_GLOBAL_CONFIG_PRODUCTION_TIP;
