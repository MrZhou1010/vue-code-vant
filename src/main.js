import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./vant/vant";

// 日期时间插件
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
Vue.prototype.$dayjs = dayjs;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
