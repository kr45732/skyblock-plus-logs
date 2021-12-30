import Vue from "vue";
import App from "./App.vue";
import {
  applyPolyfills,
  defineCustomElements
} from "@skyra/discord-components-core/loader";

Vue.config.productionTip = false;
// Tell Vue to ignore all components defined in the @skyra/discord-components-core package.
Vue.config.ignoredElements = [/discord-[\w-]*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
