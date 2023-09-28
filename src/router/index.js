//Routing Module

import {createRouter, createWebHistory} from "vue-router";
import personalDataComponent from "@/profile-management/components/personal-data-component.vue";
import homeComponent from "@/profile-management/components/home-component.vue";
import MarketComponent from "../store-inventory-management/pages/market.component.vue";
import MarketBuyerComponent from "../store-inventory-management/pages/market-Buyer-component.vue";
import MarketSupplierComponent from "../store-inventory-management/pages/market-Supplier-component.vue";
import ProductSelectionComponent from "../store-inventory-management/pages/product-Selection-component.vue"
//import ShoppingChartComponent from "../sales-payment-delivery-management/components/shopping-chart-component.vue";
//import NotificationComponent from "../public/pages/notification-component.vue";
import InventoryComponent from "../store-inventory-management/components/inventory-component.vue";
import PaypalComponent from "../payments/components/paypal.component.vue";
import StripeComponent from "../payments/components/stripe.component.vue";
import paymentMethodsBuyerComponent from "../payments/pages/payment-methods-buyer.component.vue";
//import shoppingCar from "@/sales-management-bc/components/shopping-car.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home", component: homeComponent},
	{path: "/personal-data", component: personalDataComponent},
        { path: "/", redirect: "/home"},
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
        //{ path: "/shopping-chart", component: ShoppingChartComponent },
        //{ path: "/notification", component: NotificationComponent},
        { path: "/paypal", component: PaypalComponent},
        { path: "/stripe", component: StripeComponent},
        { path: "/payment", name: 'doctor-payment-methods', component: paymentMethodsBuyerComponent},
        { path: "/supplier/inventory/add" ,
          name: 'Inventory',
          component: InventoryComponent },
	//{ path: "/shopping-chart", component: shoppingCar}
    ]
})

export default router;
