<template>
	<div class="swipe">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;margin: 10px 0;">基础用法</div>
			<van-swipe class="swipe-warpper" indicator-color="white" :autoplay="3000">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
			<!-- 图片懒加载 -->
			<div style="color: #666666;margin: 10px 0;">图片懒加载</div>
			<van-swipe class="swipe-image-warpper" :autoplay="3000">
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img v-lazy="image" />
				</van-swipe-item>
			</van-swipe>
			<!-- 监听 change 事件 -->
			<div style="color: #666666;margin: 10px 0;">监听 change 事件</div>
			<van-swipe class="swipe-warpper" indicator-color="white" @change="onChange">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
			<!-- 纵向滚动 -->
			<div style="color: #666666;margin: 10px 0;">纵向滚动</div>
			<van-swipe class="swipe-warpper" indicator-color="white" :autoplay="3000" vertical>
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
			<!-- 自定义滑块大小 -->
			<div style="color: #666666;margin: 10px 0;">自定义滑块大小</div>
			<van-swipe class="swipe-warpper" indicator-color="white" :autoplay="3000" :loop="false" :width="300">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
			<!-- 自定义指示器 -->
			<div style="color: #666666;margin: 10px 0;">自定义指示器</div>
			<van-swipe class="swipe-warpper" :autoplay="3000" @change="onChange">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
				<template #indicator>
					<div class="custom-indicator">{{ current + 1 }}/4</div>
				</template>
			</van-swipe>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				current: 0,
				images: [
					"https://img01.yzcdn.cn/vant/apple-1.jpg",
					"https://img01.yzcdn.cn/vant/apple-2.jpg",
					"https://img01.yzcdn.cn/vant/apple-3.jpg",
					"https://img01.yzcdn.cn/vant/apple-4.jpg",
				]
			};
		},
		created() {
			this.title = this.$route.query.title;
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			onChange(index) {
				this.current = index;
				this.$toast("当前Swipe索引:" + index);
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

	.swipe-warpper {
		width: 100%;
		height: 160px;

		.van-swipe-item {
			font-size: 20px;
			line-height: 160px;
			color: #ffffff;
			border: none;
			text-align: center;

			&:nth-child(odd) {
				background-color: #e633ee;
			}

			&:nth-child(even) {
				background-color: #33e6ee;
			}
		}
	}

	.swipe-image-warpper {
		width: 100%;
		height: 260px;
		display: flex;
		align-items: center;

		.van-swipe-item {
			width: 100%;
			height: 100%;

			img {
				width: 100%;
				max-height: 100%;
			}
		}
	}

	.custom-indicator {
		position: absolute;
		right: 10px;
		bottom: 10px;
		font-size: 16px;
		color: white;
	}
</style>
