//Routing Module

import {createRouter, createWebHistory} from "vue-router";

import personalDataComponent from "@/profile-management/components/personal-data-component.vue";
import homeComponent from "@/profile-management/components/home-component.vue";
import MarketComponent from "../store-inventory-management/pages/market.component.vue";
import MarketBuyerComponent from "../store-inventory-management/pages/market-buyer-component.vue";
import MarketSupplierComponent from "../store-inventory-management/pages/market-supplier-component.vue";
import ProductSelectionComponent from "../store-inventory-management/pages/product-selection-component.vue"
import inventoryComponent from "@/store-inventory-management/components/inventory-component.vue";
import PaypalComponent from "../payments/components/paypal.component.vue";
import StripeComponent from "../payments/components/stripe.component.vue";
import CreditCardComponent from "../payments/components/credit-card.component.vue";
import paymentMethodsBuyerComponent from "@/payments/pages/payment-methods-buyer.component.vue";

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
        { path: "/credit-card", component: CreditCardComponent},
        { path: "/paypal", component: PaypalComponent},
        { path: "/stripe", component: StripeComponent},
        { path: "/payment", name: 'doctor-payment-methods', component: paymentMethodsBuyerComponent},
        { path: "/supplier/inventory/add" ,
            name: 'Inventory',
            component: inventoryComponent },
    ]
})
export default router;