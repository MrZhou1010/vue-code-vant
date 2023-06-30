<template>
	<div class="lazyload">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;">基础用法</div>
			<img class="img" v-for="img in imageList" v-lazy="img" />
			<!-- 背景图懒加载 -->
			<div style="color: #666666;">背景图懒加载</div>
			<div class="item-img" v-for="img in imageList" v-lazy:background-image="img" />
			<!-- 组件懒加载 -->
			<div style="color: #666666;">组件懒加载</div>
			<lazy-component>
				<img class="img" v-for="img in imageList" v-lazy="img" />
			</lazy-component>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				imageList: [
					"https://img01.yzcdn.cn/vant/apple-1.jpg",
					"https://img01.yzcdn.cn/vant/apple-2.jpg",
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
		}
	}
</script>

<style lang="less" scoped>
	.content {
		margin-top: 2.75rem;
		padding: 0.625rem;
		background-color: #f8f8f8;
		text-align: left;

		.img {
			width: 80%;
			margin: 10px calc(10% - 20px);
			padding: 20px;
			border-radius: 10px;
			background-color: white;
		}

		.item-img {
			width: 100%;
			height: 250px;
			margin-bottom: 10px;
			padding: 20px;
			background-color: white;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			border-radius: 10px;
			box-sizing: border-box;
		}
	}
</style>
