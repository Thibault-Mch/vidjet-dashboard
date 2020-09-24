<template>
  <div class="about">
    <div class="card-flex">
      <User />
      <CompanyInformation />
      <Usage />
      <Password />
    </div>
  </div>
</template>

<script>
import User from "../components/User";
import CompanyInformation from "../components/CompanyInformation";
import Usage from "../components/Usage";
import Password from "../components/Password";

export default {
  components: {
    User,
    CompanyInformation,
    Usage,
    Password
  }
};
</script>

<style scoped>
.card-flex {
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin: auto 0;
}
@media (min-width: 576px) {
  .card-flex {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
