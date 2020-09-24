<template>
  <div class="user-info">
    <div class="icon-user">
      <img src="../assets/user-info.svg" alt="user-info-icon" />
      <h3>User information</h3>
    </div>
    <!-- display green check or red cross based on empty fields -->
    <div class="check-icon">
      <section v-if="user.user.firstname && user.user.lastname && user.user.email">
        <img src="../assets/green-check.svg" alt="green-check" />
      </section>
      <section v-else>
        <img src="../assets/red-cross.svg" alt="red-cross" />
      </section>
    </div>

    <div class="flex">
      <div class="flex-column">
        <p>First name:</p>
        <p>Last name:</p>
        <p>Work email:</p>
      </div>
<!-- input fields -->
      <div class="flex-column">
        <input
          type="text"
          v-model="user.user.firstname"
          v-on:change="editUser"
        />

        <input
          type="text"
          v-model="user.user.lastname"
          v-on:change="editUser"
        />

        <input
          type="text"
          v-model="user.user.email"
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
      await this.$store.dispatch("user/editUser", this.user.user);
    }
  }
};
</script>

<style scoped>
.user-info {
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 450px;
  max-height: 180px;
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

.flex {
  display: flex;
}

@media (max-width: 576px) {
  .user-info {
    width: 400px;
    padding-bottom: 0.5rem;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
  }
  input {
    font-size: 12px;
    margin: 4.5px 0.5rem;
    width: 120%;
  }

  input:nth-child(1) {
    margin-top: 0;
  }
  p {
    margin-left: 1rem;
  }
}

</style>
