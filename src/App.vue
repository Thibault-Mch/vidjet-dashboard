<template>
  <div class="navbar-and-cards">
    <Navbar />
    <div id="app">
      <div class="container">
        <h1 class="settings">Settings</h1>
        <div id="nav">
          <router-link class="link account" to="/account">Account</router-link>
          <router-link class="link account" to="/integration">Integration</router-link>
          <router-link class="link account" to="/billing">Billing</router-link>
        </div>
        <router-view />
      </div>
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
    this.$store.dispatch('loadUser');
    this.$store.dispatch('loadSite');
    this.$store.dispatch('loadUsage');
    this.$store.dispatch('loadInvoices');
    this.$store.dispatch('loadCreditCards');
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

.navbar-and-cards {
  display: grid;
  grid-template-columns: 0.3fr 2.7fr;
  grid-template-rows: 1fr;
  grid-gap: 0px 16px;
  grid-template-areas: ". . .";
}

html,
body,
p,
input {
  font-family: "Montserrat", sans-serif;
}

#app {
  font-family: "Montserrat", sans-serif;
}
.container {
  width: 1040px;
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
.router-link-active.account {
  background: #8d16c1;
  color: #ffffff;
}
</style>
