<template >
    <div class="font-bold flex align-items-center justify-content-center p-4 border-round">
        <h2>Product Selected</h2>
    </div>
    <div class="container">

        <div class="row pt-5">
            <div class="col-md-1"></div>
            <!-- display photo-->
            <div class="col-md-4 col-12">
                <img :src="`${products.photoUrl}`" class="img-fluid" alt="">
            </div>

            <!-- display product detail-->
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{products.title}}</h4>
                <h4 class="font-weight-bold"> $ {{products.price}}</h4>
                <p>
                    {{ products.description }}
                </p>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            products: {}
        }
    },
    props: ["baseURL", "products"],
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id)
    }
}

</script>

<style scoped>

</style>