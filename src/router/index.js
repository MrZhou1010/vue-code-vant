import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 需要左方向动画的路由用this.$router.togo("****")
// 路由地址加入history
VueRouter.prototype.togo = function(path, data) {
	this.isLeft = true;
	this.isRight = false;
	this.push({
		path: path,
		query: data
	});
};

// 需要左方向动画的路由用this.$router.replace("****")
// 路由地址不加入history
VueRouter.prototype.toReplace = function(path, data) {
	this.isLeft = true;
	this.isRight = false;
	this.replace({
		path: path,
		query: data
	});
};

// 需要返回按钮动画的路由用this.$router.goBack()返回上一个路由
VueRouter.prototype.goBack = function() {
	this.isLeft = false;
	this.isRight = true;
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
}, {
	path: "/radio",
	name: "radio",
	component: (resolve) => require(["../pages/form/radio/index"], resolve),
}, {
	path: "/rate",
	name: "rate",
	component: (resolve) => require(["../pages/form/rate/index"], resolve),
}, {
	path: "/search",
	name: "search",
	component: (resolve) => require(["../pages/form/search/index"], resolve),
}, {
	path: "/slider",
	name: "slider",
	component: (resolve) => require(["../pages/form/slider/index"], resolve),
}, {
	path: "/stepper",
	name: "stepper",
	component: (resolve) => require(["../pages/form/stepper/index"], resolve),
}, {
	path: "/switch",
	name: "switch",
	component: (resolve) => require(["../pages/form/switch/index"], resolve),
}, {
	path: "/uploader",
	name: "uploader",
	component: (resolve) => require(["../pages/form/uploader/index"], resolve),
}, {
	path: "/action-sheet",
	name: "action-sheet",
	component: (resolve) => require(["../pages/feedback/actionSheet/index"], resolve),
}, {
	path: "/dialog",
	name: "dialog",
	component: (resolve) => require(["../pages/feedback/dialog/index"], resolve),
}, {
	path: "/dropdown-menu",
	name: "dropdown-menu",
	component: (resolve) => require(["../pages/feedback/dropdownMenu/index"], resolve),
}, {
	path: "/loading",
	name: "loading",
	component: (resolve) => require(["../pages/feedback/loading/index"], resolve),
}, {
	path: "/notify",
	name: "notify",
	component: (resolve) => require(["../pages/feedback/notify/index"], resolve),
}, {
	path: "/overlay",
	name: "overlay",
	component: (resolve) => require(["../pages/feedback/overlay/index"], resolve),
}, {
	path: "/pull-refresh",
	name: "pull-refresh",
	component: (resolve) => require(["../pages/feedback/pullRefresh/index"], resolve),
}, {
	path: "/share-sheet",
	name: "share-sheet",
	component: (resolve) => require(["../pages/feedback/shareSheet/index"], resolve),
}, {
	path: "/swipe-cell",
	name: "swipe-cell",
	component: (resolve) => require(["../pages/feedback/swipeCell/index"], resolve),
}, {
	path: "/badge",
	name: "badge",
	component: (resolve) => require(["../pages/exhibition/badge/index"], resolve),
}, {
	path: "/circle",
	name: "circle",
	component: (resolve) => require(["../pages/exhibition/circle/index"], resolve),
}, {
	path: "/collapse",
	name: "collapse",
	component: (resolve) => require(["../pages/exhibition/collapse/index"], resolve),
}, {
	path: "/count-down",
	name: "count-down",
	component: (resolve) => require(["../pages/exhibition/countDown/index"], resolve),
}, {
	path: "/divider",
	name: "divider",
	component: (resolve) => require(["../pages/exhibition/divider/index"], resolve),
}, {
	path: "/empty",
	name: "empty",
	component: (resolve) => require(["../pages/exhibition/empty/index"], resolve),
}, {
	path: "/image-preview",
	name: "image-preview",
	component: (resolve) => require(["../pages/exhibition/imagePreview/index"], resolve),
}, {
	path: "/pagination",
	name: "pagination",
	component: (resolve) => require(["../pages/nav/pagination/index"], resolve),
}];

const router = new VueRouter({
	routes: routes
});

export default router;
