<template>
	<div class="loading">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 加载类型 -->
			<div style="color: #666666;">加载类型</div>
			<div style="display: flex;">
				<van-loading style="margin: 10px;" type="circular" />
				<van-loading style="margin: 10px;" type="spinner" />
			</div>
			<!-- 自定义颜色 -->
			<div style="color: #666666;">自定义颜色</div>
			<div style="display: flex;">
				<van-loading style="margin: 10px;" type="circular" color="#00ff6a" />
				<van-loading style="margin: 10px;" type="spinner" color="#00ff6a" />
			</div>
			<!-- 自定义大小 -->
			<div style="color: #666666;">自定义大小</div>
			<div style="display: flex;">
				<van-loading style="margin: 10px;" type="circular" size="24" />
				<van-loading style="margin: 10px;" type="spinner" size="24" />
			</div>
			<!-- 加载文案 -->
			<div style="color: #666666;">加载文案</div>
			<div style="display: flex;">
				<van-loading style="margin: 10px;" type="circular">加载中...</van-loading>
				<van-loading style="margin: 10px;" type="spinner">加载中...</van-loading>
			</div>
			<!-- 垂直排列 -->
			<div style="color: #666666;">垂直排列</div>
			<div style="display: flex;">
				<van-loading style="margin: 10px;" type="circular" vertical>加载中...</van-loading>
				<van-loading style="margin: 10px;" type="spinner" vertical>加载中...</van-loading>
			</div>
			<!-- 自定义文案颜色 -->
			<div style="color: #666666;">自定义文案颜色</div>
			<div style="display: flex;">
				<van-loading style="margin: 10px;" type="circular" color="#00ff6a" vertical>加载中...</van-loading>
				<van-loading style="margin: 10px;" type="spinner" text-color="#00ff6a" vertical>加载中...</van-loading>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				value1: 0,
				value2: "a",
				switch1: false,
				switch2: false,
				option1: [{
						text: "全部商品",
						value: 0
					},
					{
						text: "新款商品",
						value: 1,
						icon: "fire-o"
					},
					{
						text: "活动商品",
						value: 2
					},
				],
				option2: [{
						text: "默认排序",
						value: "a"
					},
					{
						text: "好评排序",
						value: "b"
					},
					{
						text: "销量排序",
						value: "c"
					},
				],
			};
		},
		created() {
			this.title = this.$route.query.title;
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			onConfirm() {
				this.$refs.item.toggle();
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		margin-top: 2.75rem;
		padding: 0.625rem;
		background-color: #f8f8f8;
		text-align: left;
	}
</style>
