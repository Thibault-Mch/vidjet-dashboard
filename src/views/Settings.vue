<template>

    <div id="app">
        <h1 class="settings">Settings</h1>
        <div id="nav">
          <router-link class="link account" to="/settings/account">Account</router-link>
          <router-link class="link account" to="/settings/integration">Integration</router-link>
          <router-link class="link account" to="/settings/billing">Billing</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
// @ is an alias to /src

</script>

<style></style>
