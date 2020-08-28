import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import Chart from "chart.js";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

import Router from "@/router";

import { dollarFilter, percentFilter } from "@/filter";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));

Vue.config.productionTip = false;

new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
