<template>
	<div class="image">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;">基础用法</div>
			<van-image class="item-image" width="100" height="100" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<br /><br />
			<!-- 填充模式 -->
			<div style="color: #666666;">填充模式</div>
			<van-image class="item-image" width="6rem" height="6rem" fit="contain"
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<van-image class="item-image" width="6rem" height="6rem" fit="cover"
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<van-image class="item-image" width="6rem" height="6rem" fit="fill"
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<van-image class="item-image" width="6rem" height="6rem" fit="none"
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<van-image class="item-image" width="6rem" height="6rem" fit="scale-down"
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<br /><br />
			<!-- 圆形图片 -->
			<div style="color: #666666;">圆形图片</div>
			<van-image class="item-image" width="6rem" height="6rem" fit="contain" round
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<van-image class="item-image" width="6rem" height="6rem" fit="cover" round
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<van-image class="item-image" width="6rem" height="6rem" fit="fill" round
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<van-image class="item-image" width="6rem" height="6rem" fit="none" round
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<van-image class="item-image" width="6rem" height="6rem" fit="scale-down" round
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<br /><br />
			<!-- 圆角图片 -->
			<van-image class="item-image" width="6rem" height="6rem" fit="fill" radius="1rem"
				src="https://img01.yzcdn.cn/vant/cat.jpeg" />
			<!-- 图片懒加载 -->
			<div style="color: #666666;">图片懒加载</div>
			<van-image class="item-image" width="100" height="100" lazy-load src="https://img01.yzcdn.cn/vant/cat.jpeg"
				@click="onClick()" />
			<br /><br />
			<!-- 加载中提示 -->
			<div style="color: #666666;">加载中提示</div>
			<van-image class="item-image" width="100" height="100" show-loading loading-icon="photo"
				src="https://github.com/youzan/vant/tree/dev/packages/vant-icons/src/assets/1.jpeg">
				<template #default>默认提示</template>
			</van-image>
			<van-image class="item-image" width="100" height="100"
				src="https://github.com/youzan/vant/tree/dev/packages/vant-icons/src/assets/1.jpeg" @load="onLoad()"
				@error="onError()">
				<template #loading>
					<van-loading type="spinner" size="20" />
				</template>
				<template #default>自定义提示</template>
			</van-image>
			<br /><br />
			<!-- 加载失败提示 -->
			<div style="color: #666666;">加载失败提示</div>
			<van-image class="item-image" width="100" height="100" show-error error-icon="photo-fail"
				src="https://img01.yzcdn.cn/vant/cat_1.jpeg">
				<template #default>默认提示</template>
			</van-image>
			<van-image class="item-image" width="100" height="100" src="https://img01.yzcdn.cn/vant/cat_1.jpeg">
				<template #error>加载失败</template>
				<template #default>自定义提示</template>
			</van-image>
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
			onClick() {
				this.$toast("图片被点击");
			},
			onLoad() {
				this.$toast("图片正在加载...");
			},
			onError() {
				this.$toast("图片加载失败");
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

	.item-image {
		margin-top: 1rem;
		margin-left: 1rem;
	}
</style>
