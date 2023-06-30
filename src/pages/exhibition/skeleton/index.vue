<template>
	<div class="skeleton">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;margin: 10px 0;">基础用法</div>
			<van-skeleton title :row="3" />
			<!-- 显示头像 -->
			<div style="color: #666666;margin: 10px 0;">显示头像</div>
			<van-skeleton title avatar :row="3" />
			<!-- 圆角风格 -->
			<div style="color: #666666;margin: 10px 0;">圆角风格</div>
			<van-skeleton title avatar round :row="3" />
			<!-- 占位图尺寸 -->
			<div style="color: #666666;margin: 10px 0;">占位图尺寸</div>
			<van-skeleton title avatar round :row="3" :row-width="rowWidths" :title-width="titleWidth"
				:avatar-size="avatarSize" avatar-shape="square" />
			<!-- 展示子组件 -->
			<div style="color: #666666;margin: 10px 0;">展示子组件</div>
			<van-skeleton title avatar :row="3" :loading="loading">
				<div style="margin-left: 20px;display: flex;">
					<van-icon name="manager-o" color="#ff6600" size="40px" />
					<div>
						<div style="margin-left: 10px;">这是标题</div>
						<div style="margin-left: 10px;">Vant 是一套轻量、可靠的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。</div>
					</div>
				</div>
			</van-skeleton>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				loading: true,
				rowWidths: ["20%", "80%", "60%"],
				titleWidth: "30%",
				avatarSize: "80px"
			};
		},
		created() {
			this.title = this.$route.query.title;
			this.uploadLoading();
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			uploadLoading() {
				setTimeout(() => {
					this.loading = !this.loading;
					this.uploadLoading();
				}, 3000);
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		margin-top: 2.75rem;
		padding: 0.625rem;
		background-color: #ffffff;
		text-align: left;
	}
</style>
