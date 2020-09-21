<template>
  <div class="payment-history">
    <div class="payment-history-icon">
      <img
        src="../assets/payment-history.svg"
        alt="usage-icon"
        class="pen-icon"
      />
      <h3>Payment history</h3>
    </div>
    <div class="payment-header">
      <p>Amount</p>
      <p>Status</p>
      <p>Invoice creation date</p>
      <p>Payment</p>
    </div>
    <div
      v-for="item in invoices.invoices"
      v-bind:key="item.id"
      style="display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr; text-align: center; border: 1px solid #DCDBDB;
      box-sizing: border-box;
      border-radius: 5px;
      margin-bottom: 5px"
    >
      <p>${{ item.amount }}</p>
      <!-- if else for payment status -->
      <section
        v-if="item.status === 0"
        style="background: #FCF3DB ;border-radius: 4px; color: #F6C146; font-weight: 600;"
      >
        <p>Pending</p>
      </section>
      <section
        v-else-if="item.status === 1"
        style="background: #E3F4F5 ;border-radius: 4px; color: #5CC9BF; font-weight: 600;"
      >
        <p>Paid</p>
      </section>
      <section
        v-else
        style="background: #FCE3DB ;border-radius: 4px; color: #FF5D53; font-weight: 600;"
      >
        <p>Failure</p>
      </section>

      <p>{{ item.creationDate.substring(0, 10) }}</p>
      <section v-if="item.paymentDate">
        <p>{{ item.paymentDate.substring(0, 10) }}</p>
      </section>
      <section v-else>
        <p>-</p>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({invoices: 'invoices'})
  }
};
</script>

<style scoped>
/*scrollbar with overflow*/
.payment-history {
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 543px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #585858;
  padding: 0 1rem 1rem 1rem;
  max-height: 300px;
  min-height: 300px;
  overflow: auto;
}

.payment-history-icon {
  display: flex;
  margin-left: 1rem;
}

.payment-history-icon h3 {
  padding-left: 1.5rem;
}

.payment-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  font-size: 12px;
  line-height: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  color: #585858;
  background: #ececec;
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>
