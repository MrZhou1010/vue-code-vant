<template>
	<div class="empty">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;">基础用法</div>
			<van-empty description="描述文字" />
			<!-- 图片类型 -->
			<div style="color: #666666;">图片类型</div>
			<van-tabs>
				<van-tab v-for="(tab, index) in tabs" :key="index" :title="tab">
					<div class="tab-content" v-if="index === 0">
						<van-empty image="error" description="通用错误" />
					</div>
					<div class="tab-content" v-if="index === 1">
						<van-empty image="network" image-size="90" description="网络错误" />
					</div>
					<div class="tab-content" v-if="index === 2">
						<van-empty image="search" image-size="90" description="搜索提示" />
					</div>
				</van-tab>
			</van-tabs>
			<!-- 自定义图片 -->
			<div style="color: #666666;">自定义图片</div>
			<van-empty class="custom-image" image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
				description="自定义图片" />
			<!-- 底部内容 -->
			<div style="color: #666666;">底部内容</div>
			<van-empty description="描述文字">
				<van-button class="custom-button" type="danger" round>按钮</van-button>
			</van-empty>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				tabs: ["通用错误", "网络错误", "搜索提示"],
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

		/deep/ .van-tabs__nav {
			background-color: #f8f8f8;
		}
	}

	.custom-image {
		/deep/ .van-empty__image {
			width: 90px;
			height: 90px;
		}
	}

	.custom-button {
		width: 160px;
		height: 40px;
		font-size: 18px;
		font-weight: 700;
	}
</style>
