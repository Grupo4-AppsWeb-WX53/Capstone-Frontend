<script>
import {ShoppingCartService} from "@/sales-management-bc/services/shopping-service";

export default {
  name: "shoppingCart",
  data() {
    return {
      products: null
    }
  },
  shoppingService: null,
  mounted() {
    new ShoppingCartService().getAll().then((response) => {
      this.products = response.data.items;
    })
  }
};

</script>

<template>
  <div>
    <h1>Carrito de compras</h1>
    <pv-datatable :value="products">
      <pv-column field="id" header="ID"></pv-column>
      <pv-column field="title" header="Title"></pv-column>
      <pv-column field="price" header="Price"></pv-column>
    </pv-datatable>
  </div>
  <h2>Order Summary</h2>
  <p>Total de Precio</p>
  <div>

  </div>
</template>

<style scoped>

</style>