import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from "./router/router.js";

import '@fortawesome/fontawesome-free/js/all'

import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Sidebar from "primevue/sidebar";
import Toolbar from "primevue/toolbar";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.component('pv-button', Button);
app.component('pv-menubar', Menubar);
app.component('pv-sidebar', Sidebar);
app.component('pv-toolbar', Toolbar);
app.mount('#app');