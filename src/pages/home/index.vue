<template>
	<div class="home">
		<div class="group" v-for="(group, index) in groups" :key="index">
			<div class="group-title">{{ group.title }}</div>
			<div class="item" v-for="(item, index) in group.items" :key="index" @click="togoPage(item)">
				<div class="item-title">{{ item.title }}</div>
				<van-icon class="item-arrow" name="arrow" size="large"></van-icon>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				groups: [{
					title: "基础组件",
					items: [{
						path: "button",
						title: "Button 按钮"
					}, {
						path: "cell",
						title: "Cell 单元格"
					}, {
						path: "icon",
						title: "Icon 图标"
					}, {
						path: "image",
						title: "Image 图片"
					}, {
						path: "layout",
						title: "Layout 布局"
					}, {
						path: "popup",
						title: "Popup 弹出层"
					}, {
						path: "style",
						title: "Style 内置样式"
					}, {
						path: "toast",
						title: "Toast 轻提示"
					}]
				}, {
					title: "表单组件",
					items: [{
						path: "calendar",
						title: "Calendar 日历"
					}, {
						path: "cascader",
						title: "Cascader 级联选择",
						className: "hide-in-weapp"
					}, {
						path: "checkbox",
						title: "Checkbox 复选框"
					}, {
						path: "datetime-picker",
						title: "DatetimePicker 时间选择"
					}, {
						path: "field",
						title: "Field 输入框"
					}, {
						path: "form",
						title: "Form 表单",
						className: "hide-in-weapp"
					}, {
						path: "number-keyboard",
						title: "NumberKeyboard 数字键盘",
						className: "hide-in-weapp"
					}, {
						path: "password-input",
						title: "PasswordInput 密码输入框",
						className: "hide-in-weapp"
					}, {
						path: "picker",
						title: "Picker 选择器"
					}, {
						path: "radio",
						title: "Radio 单选框"
					}, {
						path: "rate",
						title: "Rate 评分"
					}, {
						path: "search",
						title: "Search 搜索"
					}, {
						path: "slider",
						title: "Slider 滑块"
					}, {
						path: "stepper",
						title: "Stepper 步进器"
					}, {
						path: "switch",
						title: "Switch 开关"
					}, {
						path: "uploader",
						title: "Uploader 文件上传"
					}]
				}, {
					title: "反馈组件",
					items: [{
						path: "action-sheet",
						title: "ActionSheet 动作面板"
					}, {
						path: "dialog",
						title: "Dialog 弹出框"
					}, {
						path: "dropdown-menu",
						title: "DropdownMenu 下拉菜单"
					}, {
						path: "loading",
						title: "Loading 加载"
					}, {
						path: "notify",
						title: "Notify 消息通知"
					}, {
						path: "overlay",
						title: "Overlay 遮罩层"
					}, {
						path: "pull-refresh",
						title: "PullRefresh 下拉刷新",
						className: "hide-in-weapp"
					}, {
						path: "share-sheet",
						title: "ShareSheet 分享面板"
					}, {
						path: "swipe-cell",
						title: "SwipeCell 滑动单元格"
					}]
				}, {
					title: "展示组件",
					items: [{
						path: "badge",
						title: "Badge 徽标",
						className: "hide-in-weapp"
					}, {
						path: "circle",
						title: "Circle 环形进度条"
					}, {
						path: "collapse",
						title: "Collapse 折叠面板"
					}, {
						path: "count-down",
						title: "CountDown 倒计时"
					}, {
						path: "divider",
						title: "Divider 分割线"
					}, {
						path: "empty",
						title: "Empty 空状态"
					}, {
						path: "image-preview",
						title: "ImagePreview 图片预览",
						className: "hide-in-weapp"
					}, {
						path: "lazyload",
						title: "Lazyload 懒加载",
						className: "hide-in-weapp"
					}, {
						path: "list",
						title: "List 列表",
						className: "hide-in-weapp"
					}, {
						path: "notice-bar",
						title: "NoticeBar 通知栏"
					}, {
						path: "popover",
						title: "Popover 气泡弹出框",
						className: "hide-in-weapp"
					}, {
						path: "progress",
						title: "Progress 进度条"
					}, {
						path: "skeleton",
						title: "Skeleton 骨架屏"
					}, {
						path: "steps",
						title: "Steps 步骤条"
					}, {
						path: "sticky",
						title: "Sticky 粘性布局"
					}, {
						path: "swipe",
						title: "Swipe 轮播",
						className: "hide-in-weapp"
					}, {
						path: "tag",
						title: "Tag 标签"
					}]
				}, {
					title: "导航组件",
					items: [{
						path: "grid",
						title: "Grid 宫格"
					}, {
						path: "index-bar",
						title: "IndexBar 索引栏"
					}, {
						path: "nav-bar",
						title: "NavBar 导航栏"
					}, {
						path: "pagination",
						title: "Pagination 分页",
						className: "hide-in-weapp"
					}, {
						path: "sidebar",
						title: "Sidebar 侧边导航"
					}, {
						path: "tab",
						title: "Tab 标签页"
					}, {
						path: "tabbar",
						title: "Tabbar 标签栏"
					}, {
						path: "tree-select",
						title: "TreeSelect 分类选择"
					}]
				}, {
					title: "业务组件",
					items: [{
						path: "address-edit",
						title: "AddressEdit 地址编辑",
						className: "hide-in-weapp"
					}, {
						path: "address-list",
						title: "AddressList 地址列表",
						className: "hide-in-weapp"
					}, {
						path: "area",
						title: "Area 省市区选择"
					}, {
						path: "card",
						title: "Card 商品卡片"
					}, {
						path: "contact-card",
						title: "ContactCard 联系人卡片",
						className: "hide-in-weapp"
					}, {
						path: "contact-edit",
						title: "ContactEdit 联系人编辑",
						className: "hide-in-weapp"
					}, {
						path: "contact-list",
						title: "ContactList 联系人列表",
						className: "hide-in-weapp"
					}, {
						path: "coupon-list",
						title: "Coupon 优惠券",
						className: "hide-in-weapp"
					}, {
						path: "goods-action",
						title: "GoodsAction 商品导航"
					}, {
						path: "submit-bar",
						title: "SubmitBar 提交订单栏"
					}, {
						path: "sku",
						title: "Sku 商品规格",
						className: "hide-in-weapp"
					}]
				}, {
					title: "废弃",
					items: [{
						path: "panel",
						title: "Panel 面板"
					}, {
						path: "switch-cell",
						title: "SwitchCell 开关单元格",
						className: "hide-in-weapp"
					}]
				}]
			}
		},
		methods: {
			togoPage(item) {
				this.$router.togo(item.path, {
					title: item.title
				});
			}
		}
	}
</script>

<style scoped>
	.home {
		padding: 1.25rem 0;
		background-color: white;
	}

	.group {
		margin-left: 0.625rem;
	}

	.group-title {
		padding-left: 0.625rem;
		color: #333333;
		text-align: left;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1rem;
	}

	.item {
		display: flex;
		color: black;
		height: 2.5rem;
		background-color: #efefef;
		margin: 0.625rem 1rem;
		border-radius: 1.25rem;
		text-align: left;
		align-items: center;
	}

	.item-title {
		width: 80%;
		height: 1.25rem;
		position: relative;
		text-align: left;
		margin-left: 1rem;
	}

	.item-arrow {
		margin-left: 6%;
	}
</style>
