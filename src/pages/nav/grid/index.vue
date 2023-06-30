<template>
	<div class="grid">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;margin: 10px 0;">基础用法</div>
			<van-grid>
				<van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
			</van-grid>
			<!-- 自定义列数 -->
			<div style="color: #666666;margin: 10px 0;">自定义列数</div>
			<van-grid :column-num="3">
				<van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
			</van-grid>
			<!-- 自定义内容 -->
			<div style="color: #666666;margin: 10px 0;">自定义内容</div>
			<van-grid :column-num="3" :border="false">
				<van-grid-item>
					<van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
				</van-grid-item>
			</van-grid>
			<!-- 正方形格子 -->
			<div style="color: #666666;margin: 10px 0;">正方形格子</div>
			<van-grid :column-num="3" square>
				<van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
			</van-grid>
			<!-- 格子间距 -->
			<div style="color: #666666;margin: 10px 0;">格子间距</div>
			<van-grid :column-num="3" :gutter="10">
				<van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
			</van-grid>
			<!-- 内容横排 -->
			<div style="color: #666666;margin: 10px 0;">内容横排</div>
			<van-grid :column-num="3" direction="horizontal">
				<van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
			</van-grid>
			<!-- 页面导航 -->
			<div style="color: #666666;margin: 10px 0;">页面导航</div>
			<van-grid :column-num="2" clickable>
				<van-grid-item icon="home-o" text="路由跳转" to="/home" />
				<van-grid-item icon="search" text="URL 跳转" url="../../../../index.html" />
			</van-grid>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				show: true,
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
	}
</style>
