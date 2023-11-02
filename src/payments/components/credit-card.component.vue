<template>
  <div>
    <router-link to="/payment" class="mb-4">
      <span class="material-icons">arrow_back</span> Back
    </router-link>

    <div class="card">
      <h2>Payment details</h2>
      <form @submit.prevent="submitPayment">
        <h3>1. Add a credit/debit card information</h3>
        <div class="form-group">
          <label for="cardNumber">Card details*:</label>
          <input type="text" v-model="cardNumber" id="cardNumber" pattern="\d{16}"  required>
        </div>

        <div class="form-group">
          <label for="expiryDate">Expiry date*:</label>
          <input type="text" v-model="expiryDate" id="expiryDate" pattern="^(0[1-9]|1[0-2])\/\d{2}$"  required>
        </div>

        <div class="form-group">
          <label for="cvv">CVC*:</label>
          <input type="text" v-model="cvv" id="cvv" pattern="\d{3}"  required>
        </div>

        <div class="form-group">
          <label for="cardholderName">Cardholder name*:</label>
          <input type="text" v-model="cardholderName" id="cardholderName" pattern="[A-Za-z\s]+"  required>
        </div>
        <h3>2. Add your billing address</h3>

        <div class="form-group">
          <label for="country">Country:</label>
          <input type="text" v-model="country" id="country" pattern="[A-Za-z\s]+" required>
        </div>

        <div class="form-group">
          <label for="city">City:</label>
          <input type="text" v-model="city" id="city" pattern="[A-Za-z\s]+"  required>
        </div>

        <div class="form-group">
          <label for="state">State/Province:</label>
          <input type="text" v-model="state" id="state" pattern="[A-Za-z\s]+"  required>
        </div>

        <div class="form-group">
          <label for="zipCode">ZIP code:</label>
          <input type="text" v-model="zipCode" id="zipCode" pattern="\d{5}" required>
        </div>

        <button type="submit">ADD</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
      country: '',
      city: '',
      state: '',
      zipCode: ''
    }
  },
  methods: {
    submitPayment() {
      console.log('Card details:', this.cardNumber);
      console.log('Expiry date:', this.expiryDate);
      console.log('CVC:', this.cvv);
      console.log('Cardholder name:', this.cardholderName);
      console.log('Country:', this.country);
      console.log('Ciyt:', this.city);
      console.log('State/Province:', this.state);
      console.log('ZIP code:', this.zipCode);
    }
  }
}
</script>

<style scoped>
.material-icons {
  font-size: 1.5em;
  margin-bottom: 16px;

}
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-title {
  font-size: 1.5em;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
h3 {
  text-align: left;

}

</style>
