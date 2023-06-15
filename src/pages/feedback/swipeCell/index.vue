<template>
	<div class="swipe-cell">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;margin-bottom: 10px;">基础用法</div>
			<van-swipe-cell>
				<template #left>
					<van-button type="primary" text="选择" square />
				</template>
				<van-cell title="单元格" value="内容" :border="false" />
				<template #right>
					<van-button type="danger" text="删除" square />
					<van-button type="primary" text="收藏" square />
				</template>
			</van-swipe-cell>
			<br />
			<!-- 自定义内容 -->
			<div style="color: #666666;margin-bottom: 10px;">自定义内容</div>
			<van-swipe-cell>
				<van-card class="goods-card" title="商品标题" desc="描述信息" price="2.00" num="2"
					thumb="https://img01.yzcdn.cn/vant/cat.jpeg" />
				<template #right>
					<van-button class="btn-delete" type="danger" text="删除" square />
				</template>
			</van-swipe-cell>
			<br />
			<!-- 是否禁用滑动 -->
			<div style="color: #666666;margin-bottom: 10px;">是否禁用滑动</div>
			<van-swipe-cell :disabled="true">
				<template #left>
					<van-button type="primary" text="选择" square />
				</template>
				<van-cell title="单元格" value="内容" :border="false" />
				<template #right>
					<van-button type="danger" text="删除" square />
				</template>
			</van-swipe-cell>
			<br />
			<!-- 异步关闭 -->
			<div style="color: #666666;margin-bottom: 10px;">异步关闭</div>
			<van-swipe-cell :before-close="beforeClose" :stop-propagation="true">
				<template #left>
					<van-button type="primary" text="选择" square />
				</template>
				<van-cell title="单元格" value="内容" :border="false" />
				<template #right>
					<van-button type="danger" text="删除" square />
				</template>
			</van-swipe-cell>
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
			// position 为关闭时点击的位置
			// instance 为对应的 SwipeCell 实例
			beforeClose({
				position,
				instance
			}) {
				switch (position) {
					case "left":
					case "cell":
					case "outside":
						instance.close();
						break;
					case "right":
						this.$dialog.confirm({
							message: "确定删除吗?",
						}).then(() => {
							instance.close();
						}).catch(() => {
							instance.close();
						});
						break;
				}
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

	.item-cell {
		margin-top: 1rem;
		background-clip: border-box;
		border-radius: 0.625rem;
	}

	.goods-card {
		margin: 0;
		background-color: white;
	}

	.btn-delete {
		height: 100%;
	}
</style>
