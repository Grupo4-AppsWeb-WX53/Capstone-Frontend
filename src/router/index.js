import {createRouter, createWebHistory} from "vue-router";
import shoppingCar from "@/sales-management-bc/components/shopping-car.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/shopping-chart", component: shoppingCar}
    ]
})
export default router;