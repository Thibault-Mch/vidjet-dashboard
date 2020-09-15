<template>
  <div class="container">
    <div class="card-for-creditCard">
      <div class="icon-site">
        <img src="../assets/credit-card.svg" alt="usage-icon" />
        <h3>Credit card information</h3>
      </div>
      <div v-for="item in creditCards.cards" v-bind:key="item.id">
        <div class="inline">
          <p>{{ item.type }}</p>
          <p>
            <span> {{ item.lastFourDigit }} </span>
          </p>
          <p>Expiration date</p>
          <p>
            <span> {{ item.expirationDate }} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creditCards: {}
    };
  },
  created() {
    fetch("http://localhost:3000/creditCards")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.creditCards = data;
      });
  }
};
</script>

<style scoped>
.card-for-creditCard {
  height: 111px;
  width: 575px;
  background: #ffffff;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 0.5rem 0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #585858;
  position: relative;
}
.icon-site {
  display: flex;
  margin-left: 1rem;
}

.icon-site h3 {
  padding-left: 1.5rem;
}

.inline {
  display: flex;
  justify-content: space-around;
  margin-right: 6rem;
}

span {
  color: black;
  padding-right: 1rem;
}
</style>
