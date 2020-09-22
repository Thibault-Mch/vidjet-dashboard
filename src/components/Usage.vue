<template>
  <div class="site-info">
    <div class="icon-site">
      <img src="../assets/usage.svg" alt="usage-icon" />
      <h3>Company information</h3>
    </div>
    <div class="check-icon">
      <section
        v-if="usage.usage.campaigns < 3 || usage.usage.impressions < usage.usage.maxImpressions"
      >
        <img src="../assets/green-check.svg" alt="green-check" />
      </section>
      <section v-else>
        <img src="../assets/red-cross.svg" alt="red-cross" />
      </section>
    </div>

    <div class="flex">
      <div class="flex-column">
        <p>Campaigns</p>
        <p class="impressions">Impressions</p>
      </div>

      <div class="flex-column">
        <div class="bar-indication">
          <div id="campaignsBar">
            <div
              id="campaignsBarFull"
              :style="{ width: (usage.usage.campaigns / 3) * 100 + '%' }"
            ></div>
          </div>
          <p class="indication first">
            {{ usage.usage.campaigns }} out of 3 included in your plan
          </p>
        </div>

        <div id="campaignsBar">
          <div class="bar-indication">
            <div
              id="campaignsBarFull"
              :style="{
                width: (usage.usage.impressions / usage.usage.maxImpressions) * 100 + '%'
              }"
            ></div>
          </div>
          <p class="indication">
            {{ usage.usage.impressions }} out of {{ usage.usage.maxImpressions }} included
            in your plan
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({usage: 'usage'})
  }
};
</script>

<style scoped>
.site-info {
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 450px;
  height: 180px;
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

.flex p {
  margin-top: 0;
  margin-left: 2rem;
}
.impressions {
  padding-top: 0.5rem !important;
}

p:nth-child(-n + 2) {
  padding-top: 5px;
}

.icon-site {
  display: flex;
  margin-left: 1rem;
}

.icon-site h3 {
  padding-left: 1.5rem;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex {
  display: flex;
  padding: 1rem 0;
}

#campaignsBar {
  width: 225px;
  height: 1rem;
  border: 1px solid #8d16c1;
  background-color: #fff;
  border-radius: 10px;
  margin-left: 1rem;
  margin-top: 3px;
}

#campaignsBarFull {
  height: 1rem;
  background-color: #f4c8ff;
  width: 0%;
  border-radius: 10px;
}

.bar-indication {
  display: flex;
  flex-direction: column;
}

.indication {
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
  padding-top: 4px;
}

/*responsiveness*/
@media (max-width: 576px) {
  .site-info {
    width: 350px;
    height: 136px;
    padding-bottom: 0.5rem;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
  }

  .flex {
    padding: 0.5rem 0;
  }

  .flex p {
    margin-left: 0.5rem;
  }
  #campaignsBar {
    width: 175px;
    height: 0.5rem;
    border-radius: 10px;
    margin-left: 1rem;
    margin-top: 8px;
  }

  #campaignsBarFull {
    height: 0.5rem;
  }
  .indication {
    font-size: 9px;
    line-height: 10px;
    color: #c4c4c4;
  }
  .first {
    margin-left: 1.5rem !important;
  }

  .impressions {
    padding-top: 1rem !important;
  }

}








</style>
