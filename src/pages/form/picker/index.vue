<template>
	<div class="picker">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;margin: 0.5rem 0;">基础用法</div>
			<van-cell is-link title="基础用法" :value="selectedValue1" @click="showPopup1 = true" />
			<van-popup v-model="showPopup1" position="bottom" round>
				<van-picker :columns="columns1" @change="onChange1" />
			</van-popup>
			<!-- 顶部栏 -->
			<div style="color: #666666;margin: 0.5rem 0;">顶部栏</div>
			<van-cell is-link title="基础用法" :value="selectedValue2" @click="showPopup2 = true" />
			<van-popup v-model="showPopup2" position="bottom" round>
				<van-picker :title="selectedValue2 || '标题'" show-toolbar :columns="columns2" @confirm="onConfirm2"
					@cancel="showPopup2 = false" @change="onChange2" />
			</van-popup>

		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				title: '',
				showPopup1: false,
				selectedValue1: '',
				columns1: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
				showPopup2: false,
				selectedValue2: '',
				columns2: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
			}
		},
		created() {
			console.log('query:', this.$route.query);
			this.title = this.$route.query.title;
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			onChange1(picker, value, index) {
				this.showPopup1 = false;
				this.selectedValue1 = value;
				console.log(index);
			},
			onConfirm2(value, index) {
				this.showPopup2 = false;
				this.selectedValue2 = value;
				console.log(index);
			},
			onChange2(picker, value, index) {
				this.selectedValue2 = value;
				console.log(index);
			},
		}
	}
</script>

<style scoped>
	.content {
		margin-top: 2.75rem;
		padding: 0.625rem;
		text-align: left;
		background-color: #F8F8F8;
	}
</style>
