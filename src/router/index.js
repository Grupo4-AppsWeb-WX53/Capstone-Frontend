//Routing Module


import {createRouter, createWebHistory} from "vue-router";
import personalDataComponent from "@/profile-management/components/personal-data-component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/personal-data", component: personalDataComponent}
    ]
})
export default router;