<template>
	<div class="slider">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;">基础用法</div>
			<van-slider class="item-slider" v-model="value1" @change="onChange1" />
			<!-- 双滑块 -->
			<div style="color: #666666;">双滑块</div>
			<van-slider class="item-slider" v-model="value2" range @change="onChange2" />
			<!-- 指定选择范围 -->
			<div style="color: #666666;">指定选择范围</div>
			<van-slider class="item-slider" v-model="value3" :min="-100" :max="100" />
			<!-- 禁用 -->
			<div style="color: #666666;">禁用</div>
			<van-slider class="item-slider" v-model="value4" disabled />
			<!-- 指定步长 -->
			<div style="color: #666666;">指定步长</div>
			<van-slider class="item-slider" v-model="value5" :step="10" />
			<!-- 自定义样式 -->
			<div style="color: #666666;">自定义样式</div>
			<van-slider class="item-slider" v-model="value6" bar-height="4px" active-color="#ee0a24" />
			<!-- 自定义按钮 -->
			<div style="color: #666666;">自定义按钮</div>
			<van-slider class="item-slider" v-model="value7" active-color="#ee0a24" inactive-color="#0e6fee">
				<template #button>
					<div class="custom-button">{{ value7 }}</div>
				</template>
			</van-slider>
			<!-- 垂直方向 -->
			<div style="color: #666666;">垂直方向</div>
			<div style="height: 6rem;">
				<van-slider class="item-slider" v-model="value8" style="margin-left: 2rem;" vertical
					@change="onChange1" />
				<van-slider class="item-slider" v-model="value9" style="margin-left: 6rem;" vertical range
					@change="onChange2" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				value1: 20,
				value2: [30, 60],
				value3: -30,
				value4: 30,
				value5: 30,
				value6: 30,
				value7: 30,
				value8: 30,
				value9: [30, 60]
			};
		},
		created() {
			this.title = this.$route.query.title;
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			onChange1(value) {
				if (value instanceof Number) {
					this.$toast(value);
				}
			},
			onChange2(value) {
				if (value instanceof Array) {
					this.$toast(value[0] + "~" + value[1]);
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

	.item-slider {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.custom-button {
		width: 26px;
		line-height: 18px;
		font-size: 10px;
		border-radius: 10px;
		color: #ffffff;
		background-color: #ee0a24;
		text-align: center;
	}
</style>
