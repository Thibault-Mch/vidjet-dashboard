<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/vidjet-logo.svg" alt="vidjet-logo" />
    </div>
    <div class="button-icons">
      <img src="../assets/chart.svg" alt="chart" />
      <img src="../assets/menu-hamburger.svg" alt="menu-hamburger" />
      <router-link class="settings-link" to="/account">
        <img src="../assets/user.svg" alt="user" />
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style scoped>
/*nav-bar sticky for phones*/
.navbar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin-top: -8px;
  width: 73px;
  height: 700px;
  background: linear-gradient(179.38deg, #7b00b5 25%, #e47efd 100%);
  border-radius: 0px 15px 15px 0px;
  margin-left: -8px;
}
.logo {
  margin-top: 1rem;
}

.button-icons {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.button-icons img {
  padding: 4rem 0;
  margin: 0 auto;
}

a {
  display: flex;
  align-items: center;
}
</style>
