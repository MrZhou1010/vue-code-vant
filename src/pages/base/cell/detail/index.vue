<template>
	<div class="detail">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "详情页面",
			};
		},
		created() {
			if (this.$route.query.title) {
				this.title = this.$route.query.title;
			}
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
		}
	}
</script>

<style lang="less" scoped>
</style>
