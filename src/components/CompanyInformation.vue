<template>
  <div class="site-info">

    <div class="icon-site">
      <img src="../assets/company.svg" alt="company-icon" />
      <h3>Company information</h3>
    </div>
    <!-- display green check or red cross based on empty fields -->
    <div class="check-icon">
      <section v-if="site.site.websiteUrl && site.site.companyName && site.site.address">
        <img src="../assets/green-check.svg" alt="green-check" />
      </section>
      <section v-else>
        <img src="../assets/red-cross.svg" alt="red-cross" />
      </section>
    </div>
    <div class="flex">
      <div class="flex-column">
        <p>Website URL:</p>
        <p>Company name:</p>
        <p>Address:</p>
      </div>
      <div class="flex-column">
        <input
        type="text"
        v-model="site.site.websiteUrl"
        v-on:change="editSite"
        />
        <input
        type="text"
        v-model="site.site.companyName"
        v-on:change="editSite"
        />
        <input
        type="text"
        v-model="site.site.address"
        v-on:change="editSite"
        />
      </div>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {

  computed: {
    ...mapState({site: 'site'})
  },

  methods: {
    async editSite() {
      await this.$store.dispatch("site/editSite", this.site.site);
    }
  }
};
</script>

<style scoped>
/*card design*/
.site-info {
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 450px;
  max-height: 180px;
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
/*card title and icon aligned*/
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
  margin: 5.8px 0.5rem;
  border: none;
  border-bottom: 1px solid #c4c4c4;
}
/*so 1st input aligned*/
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
/*respnsive for mobiles*/
@media (max-width: 576px) {
  .site-info {
    width: 400px;
    height: 136px;
    padding-bottom: 0.5rem;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
  }
  input {
    font-size: 12px;
    color: black;
    margin: 4.5px 0.5rem;
    width: 120%;
  }

  input:nth-child(1) {
    margin-top: 0;
  }
  p {
    width: 100%;
    margin-left: 1rem;
  }
}
</style>

