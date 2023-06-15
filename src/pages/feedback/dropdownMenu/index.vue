<template>
	<div class="dropdown-menu">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;padding: 0 16px 6px;">基础用法</div>
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
			<br />
			<!-- 自定义菜单内容 -->
			<div style="color: #666666;padding: 0 16px 10px;">自定义菜单内容</div>
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item title="筛选" ref="item">
					<van-cell title="包邮" center>
						<template #right-icon>
							<van-switch v-model="switch1" size="24" active-color="#ee0a24" />
						</template>
					</van-cell>
					<van-cell title="团购" center>
						<template #right-icon>
							<van-switch v-model="switch2" size="24" active-color="#ee0a24" />
						</template>
					</van-cell>
					<div style="padding: 5px 16px;">
						<van-button type="danger" block round @click="onConfirm">
							确认
						</van-button>
					</div>
				</van-dropdown-item>
			</van-dropdown-menu>
			<br />
			<!-- 自定义选中态颜色 -->
			<div style="color: #666666;padding: 0 16px 10px;">自定义选中态颜色</div>
			<van-dropdown-menu active-color="#00ff6a">
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
			<br />
			<!-- 向上展开 -->
			<div style="color: #666666;padding: 0 16px 10px;">向上展开</div>
			<van-dropdown-menu direction="up">
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
			<br />
			<!-- 动画时长 -->
			<div style="color: #666666;padding: 0 16px 10px;">动画时长</div>
			<van-dropdown-menu direction="up" :duration="2" :overlay="false">
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
			<br />
			<!-- 禁用菜单 -->
			<div style="color: #666666;padding: 0 16px 10px;">禁用菜单</div>
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" disabled :options="option1" />
				<van-dropdown-item v-model="value2" disabled :options="option2" />
			</van-dropdown-menu>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				value1: 0,
				value2: "a",
				switch1: false,
				switch2: false,
				option1: [{
						text: "全部商品",
						value: 0
					},
					{
						text: "新款商品",
						value: 1,
						icon: "fire-o"
					},
					{
						text: "活动商品",
						value: 2
					},
				],
				option2: [{
						text: "默认排序",
						value: "a"
					},
					{
						text: "好评排序",
						value: "b"
					},
					{
						text: "销量排序",
						value: "c"
					},
				],
			};
		},
		created() {
			this.title = this.$route.query.title;
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			onConfirm() {
				this.$refs.item.toggle();
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
</style>
