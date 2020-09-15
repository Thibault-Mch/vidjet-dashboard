<template>
  <div class="billing grid-container">
    <PaymentHistory />
    <div class="big-card">
      <Invoice />
    </div>
    <div class="credit-card">
      <CreditCard />
      <button class="button-pen" @click="showModal = true">
        <img src="../assets/modal.svg" alt="usage-icon" class="pen-icon" />
      </button>
    </div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <form @submit="showModal = false">
          <h1>Add a new credit card</h1>
          <div class="name">
            <p>Cardholder name</p>
            <input type="text" required />
          </div>
          <div class="card-number">
            <p>Card number</p>
            <input type="text" required />
          </div>
          <div class="date-cvc">
            <p>Exp date</p>

            <input type="text" required />
            <p>CVC</p>
            <input type="text" required />
          </div>
          <div class="buttons">
            <button class="button-back" @click="showModal = false">
              Back
            </button>
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import CreditCard from "../components/CreditCard";
import PaymentHistory from "../components/PaymentHistory";
import Invoice from "../components/Invoice";

export default {
  components: {
    CreditCard,
    Invoice,
    PaymentHistory
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>
<style scoped>
.credit-card {
  position: relative;
  width: 575px;
}

/*Modal styling*/
.buttons {
  display: flex;
  justify-content: space-around;
}

input[type="submit"] {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.18);
  border-radius: 20px;
  padding: 0 1rem;
  height: 29.5px;
}

.name {
  display: flex;
}

.name input {
  margin-top: 12px;
  margin-left: 1rem;
  width: 63%;
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 1px solid #585858;
}

.card-number {
  display: flex;
}

.card-number input {
  margin-top: 12px;
  margin-left: 45px;
  width: 63%;
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 1px solid #585858;
}

.date-cvc {
  display: flex;
}

.date-cvc input {
  margin-top: 12px;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 25%;
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 1px solid #585858;
}

.button-pen {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 0.5rem 0.5rem 0.3rem 0.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;

  padding: 0 1rem 1rem 1rem;
}

h1 {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  color: #585858;
}

p {
  font-size: 16px;
  line-height: 20px;
  color: #585858;
}

input {
  height: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}

.button-back {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.18);
  border-radius: 20px;
  padding: 0.5rem 1rem;
}

/* grid */
/*.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 0.7fr;
  grid-gap: 16px 16px;
  grid-template-areas:
    ". big-card"
    ". big-card";
}*/

/*@media (min-width: 800px) {*/
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 0.7fr;
  grid-gap: 16px 16px;
  grid-template-areas:
    ". big-card"
    ". big-card";
}
.big-card {
  grid-area: big-card;
}
/*  }*/

/*.grid-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
};*/
</style>
