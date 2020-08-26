import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityCode: "",                        //城市编码
    cityList: []
  },
  mutations: {
    cityCode(state, newCityCode) {
      state.cityCode = newCityCode
    },
    cityList(state, newCityList){
      state.cityList = newCityList
    }
  },
  actions: {},
  modules: {}
});
