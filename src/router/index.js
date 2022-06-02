import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 需要左方向动画的路由用this.$router.togo('****')
VueRouter.prototype.togo = function(path, data) {
	this.isLeft = true;
	this.isRight = false;
	this.push({
		path: path,
		query: data
	});
};

// 需要左方向动画的路由用this.$router.replace('****')
// 路由地址不加入history
VueRouter.prototype.replace = function(path, data) {
	this.isLeft = true;
	this.isRight = false;
	this.replace({
		path: path,
		query: data
	});
};

// 需要返回按钮动画的路由用this.$router.goBack()返回上一个路由
VueRouter.prototype.goBack = function() {
	this.isRight = true;
	this.isLeft = false;
	this.go(-1);
};

const routes = [{
	path: "/",
	name: "index",
	component: (resolve) => require(["../pages/index"], resolve),
	redirect: "/home",
}, {
	path: "/home",
	name: "home",
	component: (resolve) => require(["../pages/home/index"], resolve),
}, {
	path: "/button",
	name: "button",
	component: (resolve) => require(["../pages/base/button/index"], resolve),
}, {
	path: "/cell",
	name: "cell",
	component: (resolve) => require(["../pages/base/cell/index"], resolve),
}, {
	path: "/cell/detail",
	name: "detail",
	component: (resolve) => require(["../pages/base/cell/detail/index"], resolve),
}, {
	path: "/icon",
	name: "icon",
	component: (resolve) => require(["../pages/base/icon/index"], resolve),
}, {
	path: "/image",
	name: "image",
	component: (resolve) => require(["../pages/base/image/index"], resolve),
}, {
	path: "/layout",
	name: "layout",
	component: (resolve) => require(["../pages/base/layout/index"], resolve),
}, {
	path: "/popup",
	name: "popup",
	component: (resolve) => require(["../pages/base/popup/index"], resolve),
}, {
	path: "/style",
	name: "style",
	component: (resolve) => require(["../pages/base/style/index"], resolve),
}, {
	path: "/toast",
	name: "toast",
	component: (resolve) => require(["../pages/base/toast/index"], resolve),
}, {
	path: "/calendar",
	name: "calendar",
	component: (resolve) => require(["../pages/form/calendar/index"], resolve),
}, {
	path: "/cascader",
	name: "cascader",
	component: (resolve) => require(["../pages/form/cascader/index"], resolve),
}, {
	path: "/checkbox",
	name: "checkbox",
	component: (resolve) => require(["../pages/form/checkbox/index"], resolve),
}, {
	path: "/datetime-picker",
	name: "datetimePicker",
	component: (resolve) => require(["../pages/form/datetimePicker/index"], resolve),
}, {
	path: "/field",
	name: "field",
	component: (resolve) => require(["../pages/form/field/index"], resolve),
}, {
	path: "/form",
	name: "form",
	component: (resolve) => require(["../pages/form/form/index"], resolve),
}, {
	path: "/number-keyboard",
	name: "numberKeyboard",
	component: (resolve) => require(["../pages/form/numberKeyboard/index"], resolve),
}, {
	path: "/password-input",
	name: "passwordInput",
	component: (resolve) => require(["../pages/form/passwordInput/index"], resolve),
}, {
	path: "/picker",
	name: "picker",
	component: (resolve) => require(["../pages/form/picker/index"], resolve),
}];

const router = new VueRouter({
	routes: routes
});

export default router;
