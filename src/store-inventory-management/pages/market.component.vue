<template>
    <main id="Home-page">
        <h1>Market</h1>
    </main>

    <!--buttons addCaterory + Inventory-->
    <div class="card">
        <div class="card-container blue-container flex align-items-center justify-content-center">
            <div class="text-white font-bold flex align-items-center justify-content-center p-4 border-round mr-3">
                <router-link
                    to="/supplier/market"
                    custom
                    v-slot="{ navigate }"
                >
                    <pv-button
                        @click="navigate"
                        role="link"
                        v-bind:class="{'lightblue': !clicked, 'green': clicked}"
                        v-on:click ="clicked = !clicked"
                    >
                        Supplier
                    </pv-button>
                </router-link>
            </div>

            <div class=" text-white font-bold flex align-items-center justify-content-center p-4 border-round">
                <router-link
                    to="/buyer/market"
                    custom
                    v-slot="{ navigate }"
                >
                    <pv-button
                        @click="navigate"
                        role="link"
                        v-bind:class="{'lightblue': !clicked, 'green': clicked}"
                        v-on:click ="clicked = !clicked"
                    >
                        Buyer
                    </pv-button>
                </router-link>
            </div>
        </div>
        <h3>Select your user for a better experience</h3>

    </div>
    <!--/buttons addCaterory + Inventory-->

    <!--products load-->

    <div class="pv-card">

        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="font-bold flex align-items-center justify-content-center p-4 border-round">
                    <h2>Top Categories</h2>
                </div>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`${slotProps.data.photoUrl}`" :alt="slotProps.data.photoUrl" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold">{{ slotProps.data.title }}</div>
                                <div class="text-2xl text-blue-400">{{ slotProps.data.description }}</div>

                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round">
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </div>
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <img class="w-9 shadow-2 border-round" :src="`${slotProps.data.photoUrl}`" :alt="slotProps.data.photoUrl" />
                            <div class="text-2xl font-bold">{{ slotProps.data.title }}</div>
                            <div class="text-2xl text-blue-800">{{ slotProps.data.description }}</div>

                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
    <!--/products load-->



</template>

<script>
import { ProductsApiService } from '../services/products-api.service.js';

export default {
    data() {
        return {
            products: {},
            layout: 'grid',
            productsService: null,
            value: null
        };
    },
    created() {
        console.log("created");
        this.productsService = new ProductsApiService();
        this.productsService.getCategoryAll()
            .then((response) => {
                this.products = response.data;
                console.log(response);
            });
        console.log(this.products);
    }
};
</script>

<style scoped>

.lightblue {
    background-color: #0099AD;
    position: relative;
    border-radius: 20px;
    width: 150px;
    text-align: center;
    display:table-cell;
    vertical-align:middle;
}

.green {
    background-color: #2D8425;
}

h3{
    text-align: center;
    color: #0099AD;

}
.container {
    padding: 0px !important;
}
.v-btn.withoutupercase {
    text-decoration: none;
}
.v-chip.v-size--default {
    border-radius: 50px !important;
    font-size: 14px !important;
    height: 40px !important;
    width: 40px !important;
}
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
}
.card1 {
    z-index: 10;
}
.card2 {
    z-index: 1;
}

</style>

