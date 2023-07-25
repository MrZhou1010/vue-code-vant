/**
 * home.js
 * 用于home模块的状态管理
 */
const home = {
  state: {
    province: {
      title: "内蒙古自治区",
      code: "150000",
      areaType: "2",
    },
    city: {
      title: "呼和浩特市",
      code: "150100",
      areaType: "3",
    },
    county: {
      title: "新城区",
      code: "150102",
      areaType: "4",
    },
    addressList: [],
    contactInfoList: [],
  },
  mutations: {
    setProvince(state, province) {
      state.province = province;
    },
    setCity(state, city) {
      state.city = city;
    },
    setCounty(state, county) {
      state.county = county;
    },
    setAddressList(state, addressList) {
      state.addressList = addressList;
    },
    setContactInfoList(state, contactInfoList) {
      state.contactInfoList = contactInfoList;
    },
  },
  actions: {},
  // 定义getters可以通过mapGetters拓展函数调用 一般不需要用
  getters: {
    getAreaTitle: (state) => {
      const areaTitle = state.province + "/" + state.city + "/" + state.county;
      return areaTitle;
    },
  },
};

export default home;
