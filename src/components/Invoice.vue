<template>
  <div class="invoice">
    <img src="../assets/invoice-template.png" alt="invoice">
  </div>
</template>

<script></script>

<style scoped>
.invoice {
  width: 400px !important;
  height: 475px;
  background: #ffffff;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}

img {
  width: inherit;
  height: inherit;
  border-radius: 10px;
}

@media (max-width: 576px) {
  .invoice {
    width: 400px !important;
    height: 200px;
    overflow: auto;
    margin-right: 0;
  }
  img {
    width: inherit;
    height: 475px;
  }
}
</style>
