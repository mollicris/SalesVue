import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";
//import "vuetify/dis/vuetify.css";

import Register from "../components/Register.vue";
import Customer from "../components/Customer.vue";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logaut",
      component: Login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/dashboard/register",
          name: "register",
          component: Register
        },
        {
          path: "/dashboard/customer",
          name: "customer",
          component: Customer
        }
      ]
    }
  ]
});
