<template>
  <div class="navbar-and-cards">
    <Navbar />
    <div id="app">
        <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  },
  mounted() {
    this.$store.dispatch('user/loadUser');
    this.$store.dispatch('site/loadSite');
    this.$store.dispatch('usage/loadUsage');
    this.$store.dispatch('invoices/loadInvoices');
    this.$store.dispatch('creditCards/loadCreditCards');
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

.navbar-and-cards {
  display: flex;
}

html,
body,
p,
input {
  font-family: "Montserrat", sans-serif;
}

#app {
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
}
.settings {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #585858;
}

#nav {
  text-align: center;
  margin-bottom: 2rem;
}

.link.account {
  font-size: 20px;
  line-height: 45px;
  display: inline-block;
  width: 173px !important;
  height: 45px !important;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(141, 22, 193, 0.25);
  border-radius: 30px;
  margin: 0 5rem;
  text-decoration: none !important;
  text-align: center;
}

.link.account:hover {
  background-color: #e47efd;
  color: white;
  border-radius: 15px;
}

.router-link-active.account {
  background: #8d16c1;
  color: #ffffff;
}

/*responsiveness*/
@media (max-width: 576px) {
  .link.account {
    font-size: 16px;
    line-height: 35px;
    width: 120px !important;
    height: 35px !important;
    margin: 0 auto;
  }
  #nav {
    margin: 0 auto 2rem auto;
    display: flex;
    justify-content: space-between;
  }

}

</style>
