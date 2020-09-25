<!-- not working yet attempt to make the modal a component -->

<template>
  <div class="credit-card-modal">
  <transition name="fade" appear>
      <div
        class="modal-overlay"
        @click="toggleModal"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal">
        <!-- modal disapear on back or on save if all fields are filled -->
        <form class="form" @submit="toggleModal">
          <h1>Add a new credit card</h1>
          <div class="credit-card-form">
            <div class="cardholder-name">
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
          </div>
          <div class="buttons">
            <button class="button-back" @click="toggleModal">
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
export default {
  props: ['showModal'],

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      console.log(this.showModal);
    }
  }
};

</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 625px;
  height: 330px;
  background-color: #fff;
  box-shadow: 0px 0px 250px 100px rgba(0, 0, 0, 0.2), inset 0px 0px 10px 3px #DFDFDF;
  border-radius: 7px;
}

h1 {
  margin-top: 2.1rem;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #585858;
}

p {
  width: auto;
  font-size: 16px;
  line-height: 20px;
  color: #585858;
}

input {
  height: 20px;
  font-size: 16px;
}

.credit-card-form {
  margin: 1.5rem auto 1.5rem auto;
  width: 500px;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.cardholder-name {
  display: flex;
}

.cardholder-name input {
  margin-top: 12px;
  margin-left: 1rem;
  width: 320px;
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
  width: 330px;
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
  width: 160px;
  margin-top: 12px;
  margin-left: 1rem;
  margin-right: 1rem;
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 1px solid #585858;
}


/*save button*/
input[type="submit"] {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.18);
  border-radius: 20px;
  padding: 0 1rem;
  height: 36px;
  width: 86px;
}
input[type="submit"]:hover {
  transform: scale(1.15) perspective(1px);
}

.button-back {
  font-size: 14px;
  font-weight: 300;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.18);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  height: 36px;
  width: 86px;
}
.button-back:hover {
  transform: scale(1.15) perspective(1px);
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
</style>
