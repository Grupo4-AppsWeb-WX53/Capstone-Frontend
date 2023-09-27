import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import index from "./router";

import '@fortawesome/fontawesome-free/js/all'

//Prime Vue Material Design Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Sidebar from "primevue/sidebar";
import Toolbar from "primevue/toolbar";

const app = createApp(App);

app.use(index);
app.use(PrimeVue, { ripple: true });
app.component('pv-button', Button);
app.component('pv-menubar', Menubar);
app.component('pv-sidebar', Sidebar);
app.component('pv-toolbar', Toolbar);
app.mount('#app');