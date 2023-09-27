import './assets/main.css'
import 'primevue/resources/themes/md-dark-indigo/theme.css';
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

import Card from 'primevue/card';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Toolbar from 'primevue/toolbar';

import { createApp } from 'vue'
import App from './App.vue';
import PrimeVue from "primevue/config";

const app = createApp(App);
app.use(PrimeVue);
app.component('pv-card', Card);
app.component('pv-button', Button);
app.component('pv-select-button', SelectButton);
app.component('pv-sidebar', Sidebar);
app.component('pv-avatar', Avatar);
app.component('pv-menu', Menu);
app.component('pv-menubar', Menubar);
app.component('pv.toolbar', Toolbar);
app.mount('#app');