<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/vidjet-logo.svg" alt="vidjet-logo" />
    </div>
    <div class="button-icons">
      <router-link class="settings-link" to="/stats">
        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.75 0.25H7V20.25H10.75V0.25Z" fill=""/>
          <path d="M4.5 10.25H0.75V20.25H4.5V10.25Z" fill=""/>
          <path d="M13.25 4H17V20.25H13.25V4Z" fill=""/>
          <path d="M23.25 7.75H19.5V20.25H23.25V7.75Z" fill=""/>
        </svg>
      </router-link>

       <router-link class="settings-link" to="/info">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.75 3V0.5H23.25V3H0.75Z" fill=""/>
          <path d="M0.75 9.25H23.25V6.75H0.75V9.25Z" fill=""/>
          <path d="M0.75 15.5H23.25V13H0.75V15.5Z" fill=""/>
        </svg>
      </router-link>

      <router-link class="settings-link" to="/settings">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0.5C8.55375 0.5 5.75 3.30375 5.75 6.75C5.75 10.1962 8.55375 13 12 13C15.4462 13 18.25 10.1962 18.25 6.75C18.25 3.30375 15.4462 0.5 12 0.5ZM12 10.5C9.9325 10.5 8.25 8.8175 8.25 6.75C8.25 4.6825 9.9325 3 12 3C14.0675 3 15.75 4.6825 15.75 6.75C15.75 8.8175 14.0675 10.5 12 10.5ZM23.25 24.25V23C23.25 18.1763 19.3237 14.25 14.5 14.25H9.5C4.675 14.25 0.75 18.1763 0.75 23V24.25H3.25V23C3.25 19.5537 6.05375 16.75 9.5 16.75H14.5C17.9463 16.75 20.75 19.5537 20.75 23V24.25H23.25Z"
        fill=""/>
        </svg>

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

.button-icons img,
svg {
  padding: 4rem 0;
  margin: 0 auto;
}

a {
  display: flex;
  align-items: center;
  height: 72px;
  margin-top: 40px;
}

svg {
  fill:white;
}

.router-link-exact-active,
.router-link-active svg {
  fill: #7b00b5;
}

a.router-link-exact-active,
a.router-link-active {
  background: white;
  border-radius: 15px 0 0 15px;
}

@media (max-width: 576px) {
  .navbar {
    width: 50px;
    height: 800px;
  }
  .logo img {
    width: 100%;
    height: 100%;
    margin-left: -3px;
  }
}
</style>
