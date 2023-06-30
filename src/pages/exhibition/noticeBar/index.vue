<template>
	<div class="notice-bar">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;margin-left: 10px;">基础用法</div>
			<van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
			<!-- 滚动播放 -->
			<div style="color: #666666;margin-left: 10px;">滚动播放</div>
			<!-- 文字较短时 通过设置 scrollable 属性开启滚动播放 -->
			<van-notice-bar :scrollable="true" text="技术是开发它的人的共同灵魂。" />
			<!-- 文字较长时 通过禁用 scrollable 属性关闭滚动播放 -->
			<van-notice-bar :scrollable="false" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
			<!-- 多行展示 -->
			<div style="color: #666666;margin-left: 10px;">多行展示</div>
			<van-notice-bar :scrollable="true" wrapable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
			<!-- 通知栏模式 -->
			<div style="color: #666666;margin-left: 10px;">通知栏模式</div>
			<!-- closeable模式 在右侧显示关闭按钮 -->
			<van-notice-bar mode="closeable">技术是开发它的人的共同灵魂。</van-notice-bar>
			<!-- link模式 在右侧显示链接箭头 -->
			<van-notice-bar mode="link">技术是开发它的人的共同灵魂。</van-notice-bar>
			<!-- 自定义样式 -->
			<div style="color: #666666;margin-left: 10px;">自定义样式</div>
			<van-notice-bar color="#ff00ee" background="#8fe0ee" left-icon="info-o">
				技术是开发它的人的共同灵魂。
			</van-notice-bar>
			<!-- 垂直滚动 -->
			<div style="color: #666666;margin-left: 10px;">垂直滚动</div>
			<van-notice-bar left-icon="volume-o" :scrollable="false">
				<van-swipe class="notice-swipe" :autoplay="3000" :show-indicators="false" vertical>
					<van-swipe-item>内容 1</van-swipe-item>
					<van-swipe-item>内容 2</van-swipe-item>
					<van-swipe-item>内容 3</van-swipe-item>
				</van-swipe>
			</van-notice-bar>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
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
		padding: 0.625rem 0;
		background-color: #f8f8f8;
		text-align: left;
	}

	.van-notice-bar {
		margin: 10px 0;
	}

	.notice-swipe {
		height: 40px;
		line-height: 40px;
	}
</style>
