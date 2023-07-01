/**
 * user.js
 * 用于user模块的状态管理
 */
const user = {
  state: {
    // 登录状态
    isLogin: false,
    // 账号实名认证状态
    isVerified: false,
    // 是否完成人脸识别认证
    isFaceVerified: false,
    // 用户信息
    userInfo: {},
  },
  mutations: {
    setLoginState(state, isLogin) {
      state.isLogin = isLogin;
    },
    setVerifiedState(state, isVerified) {
      state.isVerified = isVerified;
    },
    setFaceVerifiedState(state, isFaceVerified) {
      state.isFaceVerified = isFaceVerified;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {},
  getters: {
    getLoginState: (state) => {
      return state.userInfo ? true : false;
    },
  },
};

export default user;
