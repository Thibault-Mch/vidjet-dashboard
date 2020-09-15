<template>
  <div class="site-info">
    <div class="icon-site">
      <img src="../assets/company.svg" alt="company-icon" />
      <h3>Company information</h3>
    </div>
    <div class="check-icon">
      <section v-if="site.websiteUrl && site.companyName && site.address">
        <img src="../assets/green-check.svg" alt="green-check" />
      </section>
      <section v-else>
        <img src="../assets/red-cross.svg" alt="red-cross" />
      </section>
    </div>
    <div class="grid">
      <div class="flex-column">
        <p>Website URL:</p>
        <p>Company name:</p>
        <p>Address:</p>
      </div>
      <div class="flex-column">
        <input
          type="text"
          v-model="site.websiteUrl"
          :placeholder="site.websiteUrl"
        />
        <input
          type="text"
          v-model="site.companyName"
          :placeholder="site.companyName"
        />
        <input
          type="text"
          v-model="site.address"
          :placeholder="site.address.substring(0, 30)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      site: {}
    };
  },
  created() {
    fetch("http://localhost:3000/site")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.site = data;
      });
  }
};
</script>

<style scoped>
.site-info {
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 450px;
  padding-bottom: 0.5rem;
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
.icon-site {
  display: flex;
  margin-left: 1rem;
}

.icon-site h3 {
  padding-left: 1.5rem;
}

input {
  font-size: 16px;
  color: black;
  margin: 6.5px 0.5rem;
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
