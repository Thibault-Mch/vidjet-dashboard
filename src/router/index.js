import Vue from "vue";
import VueRouter from "vue-router";
import Integration from "../views/Integration.vue";
import Account from "../views/Account.vue";
import Billing from "../views/Billing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/account",
    name: "Account",
    component: Account
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing
  },
  {
    path: "/integration",
    name: "Integration",
    component: Integration
  }
];

const router = new VueRouter({
  routes
});

export default router;
