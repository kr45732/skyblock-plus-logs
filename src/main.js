import { createApp, h } from 'vue/dist/vue.esm-bundler'
import App from "./App.vue";
import Messages from "./components/Messages.vue"
import {
  applyPolyfills,
  defineCustomElements
} from "@skyra/discord-components-core/loader";
import * as Router from "vue-router"

applyPolyfills().then(() => {
  defineCustomElements();
});


const router = Router.createRouter({
  history: Router.createWebHistory(),
  routes: [{ path: '/logs', component: Messages },],
});

const app = createApp({ render: () => h(App) }).use(router);
app.config.compilerOptions.isCustomElement = tag => tag.match(/discord-[\w-]*/);
app.mount("#app");