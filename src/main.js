import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from "./router/index.js";

import '@fortawesome/fontawesome-free/js/all'

//Prime Vue Material Design Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Button from "primevue/button";
import Card from "primevue/card";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from "primevue/dialog";
import Dropdown from 'primevue/dropdown';
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";
import OrderList from 'primevue/orderlist';
import Sidebar from "primevue/sidebar";
import Tag from "primevue/tag";
import Toolbar from "primevue/toolbar";
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component("pv-column", Column);
app.component('pv-data-table', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('pv-dialog', Dialog);
app.component('Dropdown', Dropdown);
app.component('pv-input-text', InputText);
app.component('pv-menubar', Menubar);
app.component('OrderList', OrderList);
app.component('pv-sidebar', Sidebar);
app.component('pv-tag', Tag);
app.component('pv-toolbar', Toolbar);
app.component('pv-card', Card);
app.component('pv-avatar', Avatar);
app.mount('#app');