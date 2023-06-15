<template>
	<div class="number-keyboard">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<van-cell is-link title="弹出默认键盘" :value="value1" @touchstart.native.stop="showKeyboard1 = true" />
			<van-number-keyboard :show="showKeyboard1" @blur="showKeyboard1 = false" @input="onInput1"
				@delete="onDelete1" />
			<van-cell is-link title="弹出带右侧栏的键盘" :value="value2" @touchstart.native.stop="showKeyboard2 = true" />
			<van-number-keyboard :show="showKeyboard2" theme="custom" extra-key="." close-button-text="完成"
				delete-button-text="删除" @blur="showKeyboard2 = false" @input="onInput2" @delete="onDelete2" />
			<van-cell is-link title="弹出身份证号键盘" :value="value3" @touchstart.native.stop="showKeyboard3 = true" />
			<van-number-keyboard :show="showKeyboard3" extra-key="X" close-button-text="完成"
				@blur="showKeyboard3 = false" @input="onInput3" @delete="onDelete3" />
			<van-cell is-link title="弹出带标题的键盘" :value="value4" @touchstart.native.stop="showKeyboard4 = true" />
			<van-number-keyboard :show="showKeyboard4" :title="value4 || '标题'" extra-key="." close-button-text="完成"
				@blur="showKeyboard4 = false" @input="onInput4" @delete="onDelete4" />
			<van-cell is-link title="弹出配置多个按键的键盘" :value="value5" @touchstart.native.stop="showKeyboard5 = true" />
			<van-number-keyboard :show="showKeyboard5" theme="custom" :extra-key="['00', '.']" close-button-text="完成"
				@blur="showKeyboard5 = false" @input="onInput5" @delete="onDelete5" />
			<van-cell is-link title="弹出配置随机数字的键盘" :value="value6" @touchstart.native.stop="showKeyboard6 = true" />
			<van-number-keyboard :show="showKeyboard6" random-key-order @blur="showKeyboard6 = false" @input="onInput6"
				@delete="onDelete6" />
			<van-cell is-link title="双向绑定" :value="value7" @touchstart.native.stop="showKeyboard7 = true" />
			<van-number-keyboard v-model="value7" :show="showKeyboard7" :maxlength="6" @blur="showKeyboard7 = false" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				showKeyboard1: false,
				value1: "",
				showKeyboard2: false,
				value2: "",
				showKeyboard3: false,
				value3: "",
				showKeyboard4: false,
				value4: "",
				showKeyboard5: false,
				value5: "",
				showKeyboard6: false,
				value6: "",
				showKeyboard7: false,
				value7: "",
			};
		},
		created() {
			this.title = this.$route.query.title;
		},
		mounted() {
			this.showKeyboard1 = true;
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			onInput1(value) {
				this.value1 += value;
			},
			onDelete1() {
				this.value1 = this.value1.slice(0, -1);
			},
			onInput2(value) {
				this.value2 += value;
			},
			onDelete2() {
				this.value2 = this.value2.slice(0, -1);
			},
			onInput3(value) {
				this.value3 += value;
			},
			onDelete3() {
				this.value3 = this.value3.slice(0, -1);
			},
			onInput4(value) {
				this.value4 += value;
			},
			onDelete4() {
				this.value4 = this.value4.slice(0, -1);
			},
			onInput5(value) {
				this.value5 += value;
			},
			onDelete5() {
				this.value5 = this.value5.slice(0, -1);
			},
			onInput6(value) {
				this.value6 += value;
			},
			onDelete6() {
				this.value6 = this.value6.slice(0, -1);
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
