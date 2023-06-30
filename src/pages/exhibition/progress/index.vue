<template>
	<div class="progress">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;margin: 10px 0;">基础用法</div>
			<van-progress :percentage="50" /><br />
			<!-- 线条粗细 -->
			<div style="color: #666666;margin: 10px 0;">线条粗细</div>
			<van-progress :percentage="50" stroke-width="8" /><br />
			<!-- 置灰 -->
			<div style="color: #666666;margin: 10px 0;">置灰</div>
			<van-progress :percentage="50" inactive /><br />
			<!-- 样式定制 -->
			<div style="color: #666666;margin: 10px 0;">样式定制</div>
			<van-progress :percentage="25" pivot-text="橙色" color="#e28830" /><br />
			<van-progress :percentage="50" pivot-text="红色" color="#ee0a24" /><br />
			<van-progress :percentage="75" pivot-text="紫色" pivot-color="#9e22dd"
				color="linear-gradient(to right, #6e99ff, #9e22dd)" /><br />
			<!-- 轨道颜色 -->
			<div style="color: #666666;margin: 10px 0;">轨道颜色</div>
			<van-progress :percentage="50" track-color="#c8c8ee" /><br />
			<!-- 进度文字颜色 -->
			<div style="color: #666666;margin: 10px 0;">进度文字颜色</div>
			<van-progress :percentage="50" pivot-color="#e8e8ee" text-color="#9e22dd" /><br />
			<!-- 是否显示进度文字 -->
			<div style="color: #666666;margin: 10px 0;">是否显示进度文字</div>
			<van-progress :percentage="percentage" :show-pivot="false" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				percentage: 0,
				timer: null
			};
		},
		created() {
			this.title = this.$route.query.title;
			if (!this.timer) {
				this.timer = setInterval(() => {
					if (this.percentage >= 100) {
						this.percentage = 0;
					}
					this.percentage += Math.floor(Math.random() * 10);
					if (this.percentage >= 100) {
						this.percentage = 100;
						// clearInterval(this.timer);
						// this.timer = null;
					}
				}, 200);
			}
		},
		destroyed() {
			clearInterval(this.timer);
			this.timer = null;
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
	}
</style>
