<template>
  <div class="container">
    <div class="card-for-creditCard">
      <div class="icon-site">
        <img src="../assets/credit-card.svg" alt="usage-icon" />
        <h3>Credit card information</h3>
      </div>
      <div v-for="item in creditCards.creditCards.cards" v-bind:key="item.id">
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({creditCards: 'creditCards'})
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
  /*padding-right: 1rem;*/
}

@media (max-width: 576px) {
  .card-for-creditCard {
    width: 400px;
    padding: 0.5rem 0;
    font-size: 14px;
    line-height: 20px;
    color: #585858;
    position: relative;
    align-items: center;
  }
  .inline {
    margin-left: 1.5rem;
    margin-right: 1rem;
  }
}
</style>

