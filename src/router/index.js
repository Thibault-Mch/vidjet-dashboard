import Vue from "vue";
import VueRouter from "vue-router";
import Integration from "../views/Integration.vue";
import Info from "../views/Info.vue";
import Settings from "../views/Settings.vue";
import Stats from "../views/Stats.vue";
import Account from "../views/Account.vue";
import Billing from "../views/Billing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/info",
    name: "Info",
    component: Info
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats
  },
  {
    path: "/settings",
    component: Settings,
    children: [
      {
      path: '',
      redirect: 'account', // default child path
      },
      {
        path: "/settings/account",
        name: "Account",
        component: Account
      },
      {
        path: "/settings/billing",
        name: "Billing",
        component: Billing
      },
      {
        path: "/settings/integration",
        name: "Integration",
        component: Integration
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
