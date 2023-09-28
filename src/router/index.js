//Routing Module

import {createRouter, createWebHistory} from "vue-router";

import personalDataComponent from "@/profile-management/components/personal-data-component.vue";
import homeComponent from "@/profile-management/components/home-component.vue";
import MarketComponent from "../store-inventory-management/pages/market.component.vue";
import MarketBuyerComponent from "../store-inventory-management/pages/market-buyer-component.vue";
import MarketSupplierComponent from "../store-inventory-management/pages/market-supplier-component.vue";
import ProductSelectionComponent from "../store-inventory-management/pages/product-selection-component.vue"
import inventoryComponent from "@/store-inventory-management/components/inventory-component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: "/", redirect: "/home"},
        {path: "/personal-data", component: personalDataComponent},
        { path: "/home", component: homeComponent},
        { path: "/market",
            name: "Market",
            component: MarketComponent},
        { path: "/supplier/market",
            name: "Market-Supplier",
            component: MarketSupplierComponent},
        { path: "/buyer/market",
            name: "Market-buyer",
            component: MarketBuyerComponent},
        { path: "/product-selection", name: "Product-selection",component: ProductSelectionComponent },

        { path: "/supplier/inventory/add" ,
            name: 'Inventory',
            component: inventoryComponent },
    ]
})
export default router;