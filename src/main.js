import Vue from "vue";
import VueRouter from "vue-router";

// ประกาศ Axios
import VueAxios from "vue-axios";
import axios from "axios";

import App from "./App.vue";
import FoodList from "./components/FoodList.vue";
import CreateFood from "./components/CreateFood.vue";
import vuetify from './plugins/vuetify';
Vue.use(VueRouter);

// เรียกใช้ 
Vue.use(VueAxios, axios);

const routes = [
  {
    name: "FoodList",
    path: "/food_list",
    component: FoodList
  },
  {
    name: "CreateFood",
    path: "/create_food",
    component: CreateFood
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount("#app");