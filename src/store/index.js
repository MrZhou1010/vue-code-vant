import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import createLogger from "vuex/dist/logger";
import home from "./modules/home";
import user from "./modules/user";

const debug = true;

const modules = {
  home,
  user,
};

const store = new Vuex.Store({
  modules: modules,
  plugins: debug ? [createLogger()] : [], // 是否开启vuex的debug模式
});

export default store;
