//Routing Module


import {createRouter, createWebHistory} from "vue-router";
import personalDataComponent from "@/profile-management/components/personal-data-component.vue";
import homeComponent from "@/profile-management/components/home-component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home"},
        {path: "/personal-data", component: personalDataComponent},
        { path: "/home", component: homeComponent},
    ]
})
export default router;