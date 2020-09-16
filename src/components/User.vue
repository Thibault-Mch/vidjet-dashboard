<template>
  <div class="user-info">
    <div class="icon-user">
      <img src="../assets/user-info.svg" alt="user-info-icon" />
      <h3>User information</h3>
    </div>
    <!-- display green check or red cross based on empty fields -->
    <div class="check-icon">
      <section v-if="user.firstname && user.lastname && user.email">
        <img src="../assets/green-check.svg" alt="green-check" />
      </section>
      <section v-else>
        <img src="../assets/red-cross.svg" alt="red-cross" />
      </section>
    </div>

    <div class="grid">
      <div class="flex-column">
        <p>First name:</p>
        <p>Last name:</p>
        <p>Work email:</p>
      </div>
<!-- input fields -->
      <div class="flex-column">
        <input
        type="text"
        v-model="user.firstname"
        :placeholder="user.firstname"
        v-on:change="editUser"
        />

        <input
        type="text"
        v-model="user.lastname"
        :placeholder="user.lastname"
        v-on:change="editUser"
        />

        <input
        type="text"
        v-model="user.email"
        :placeholder="user.email"
        v-on:change="editUser"
        />

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({user: 'user'})
  },

  methods: {
    async editUser() {
      await this.$store.dispatch("editUser", this.user);
    }
  }
};
</script>

<style scoped>
.user-info {
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 450px;
  padding-bottom: 0.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #585858;
  position: relative;
}

.check-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

p {
  margin-top: 0px;
  margin-left: 2rem;
}
.icon-user {
  display: flex;
  margin-left: 1rem;
}

.icon-user h3 {
  padding-left: 1.5rem;
}

input {
  font-size: 16px;
  color: black;
  margin: 5.8px 0.5rem;
  border: none;
  border-bottom: 1px solid #c4c4c4;
}

input:nth-child(1) {
  margin-top: 0;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.grid {
  display: flex;
}
</style>
