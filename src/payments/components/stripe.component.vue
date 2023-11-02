<template>
  <div class="container d-flex justify-content-center align-items-center h-100">
    <div class="card p-4">
      <div class="flex inline-block mr-8 ml-8 justify-content-between pr-8 pl-8 align-items-center">

        <div class="m-0">
          <h2>Payment details</h2>
          <router-link to="/payment" class="mb-4">
            <span class="material-icons">arrow_back</span> Back
          </router-link>
          <h2>E-wallet</h2>
          <pv-card class="activity">
            <template #content>
              <div class="flex inline-block justify-content-between text-gray-700">
                <i class="fa-brands fa-stripe-s"></i>
                <span>Stripe</span>
                <div class="text-white font-bold flex align-items-center justify-content-center p-4 border-round">
                  <router-link to="/stripe" custom v-slot="{ navigate }">
                    <pv-button
                        @click="navigate"
                        role="link"
                        v-bind:class="{'lightblue': !clicked, 'green': clicked}"
                        v-on:click="clicked = !clicked"
                    >
                      ADD
                    </pv-button>
                  </router-link>
                </div>
              </div>
              <div>
                <h3>1. Add your stripe email address</h3>
                <div>
                  <h4>Email address*</h4>
                  <input v-model="stripeEmail" placeholder="E-mail">
                </div>
                <h3>2. Link automate payment</h3>
                <div class="linea">
                  <h4>Choose*</h4>
                  <div>
                    <pv-button class="me-3">Accept</pv-button>
                    <pv-button>Decline</pv-button>
                  </div>
                </div>
              </div>
            </template>
          </pv-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StripeComponent",
  data() {
    return {
      stripeEmail: '',
      clicked: false
    }
  }
}
</script>

<style scoped>

</style>
