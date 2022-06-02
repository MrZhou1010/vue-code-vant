<template>
	<div class="field">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;margin: 0.5rem 0;">基础用法</div>
			<van-cell-group class="item-wrapper">
				<van-field v-model="value" class="item-field" label="文本" placeholder="请输入文本" :autofocus="true" />
			</van-cell-group>
			<!-- 自定义类型 -->
			<div style="color: #666666;margin: 0.5rem 0;">自定义类型</div>
			<div class="item-wrapper">
				<!-- 输入任意文本 -->
				<van-field v-model="text" type="text" label="文本" placeholder="请输入文本" :border="false" />
				<!-- 输入手机号调起手机号键盘 -->
				<van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" :colon="true" />
				<!-- 允许输入正整数调起纯数字键盘 -->
				<van-field v-model="digit" type="digit" label="整数" placeholder="请输入整数" />
				<!-- 允许输入数字调起带符号的纯数字键盘 -->
				<van-field v-model="number" type="number" label="数字" placeholder="请输入数字" />
				<!-- 输入密码 -->
				<van-field v-model="password" type="password" label="密码" placeholder="请输入密码" ref="field" />
			</div>
			<!-- 禁用输入框 -->
			<div style="color: #666666;margin: 0.5rem 0;">禁用输入框</div>
			<div class="item-wrapper">
				<van-field label="文本" value="输入框只读" readonly />
				<van-field label="文本" value="输入框已禁用" disabled />
			</div>
			<!-- 显示图标 -->
			<div style="color: #666666;margin: 0.5rem 0;">显示图标</div>
			<div class="item-wrapper">
				<van-field v-model="value" label="文本" left-icon="smile-o" right-icon="warning-o" placeholder="显示图标" />
				<van-field v-model="value" label="文本" left-icon="music-o" clearable placeholder="显示清除图标"
					@clear="onClear" />
			</div>
			<!-- 错误提示 -->
			<div style="color: #666666;margin: 0.5rem 0;">错误提示</div>
			<div class="item-wrapper">
				<van-field v-model="username" label="用户名" placeholder="请输入用户名" :required="true" :error="isError" />
				<van-field v-model="phone" label="手机号" placeholder="请输入手机号" :required="true"
					:error-message="errorMessage" error-message-align="right" />
			</div>
			<!-- 插入按钮 -->
			<div style="color: #666666;margin: 0.5rem 0;">插入按钮</div>
			<div class="item-wrapper">
				<van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
					<template #button>
						<van-button type="primary" size="small">发送验证码</van-button>
					</template>
				</van-field>
			</div>
			<!-- 格式化输入内容 -->
			<div style="color: #666666;margin: 0.5rem 0;">格式化输入内容</div>
			<div class="item-wrapper">
				<van-field v-model="text" label="文本" :formatter="formatter" placeholder="在输入时执行格式化" />
				<van-field v-model="value" label="文本" :formatter="formatter" format-trigger="onBlur"
					placeholder="在失焦时执行格式化" />
			</div>
			<!-- 高度自适应 -->
			<div style="color: #666666;margin: 0.5rem 0;">高度自适应</div>
			<div class="item-wrapper">
				<van-field v-model="message" type="textarea" rows="1" autosize label="留言" placeholder="请输入留言" />
			</div>
			<!-- 显示字数统计 -->
			<div style="color: #666666;margin: 0.5rem 0;">显示字数统计</div>
			<div class="item-wrapper">
				<van-field v-model="message" type="textarea" rows="2" autosize label="留言" placeholder="请输入留言"
					maxlength="50" show-word-limit />
			</div>
			<!-- 输入框内容对齐 -->
			<div style="color: #666666;margin: 0.5rem 0;">输入框内容对齐</div>
			<div class="item-wrapper">
				<van-field v-model="value" label="文本" placeholder="输入框内容右对齐" input-align="right" :clickable="true" />
			</div>
			<!-- 是否展示右侧箭头并开启点击反馈 -->
			<div style="color: #666666;margin: 0.5rem 0;">是否展示右侧箭头并开启点击反馈</div>
			<div class="item-wrapper">
				<van-field v-model="value" label="文本" placeholder="箭头并开启点击反馈" :is-link="true" />
				<van-field v-model="value" label="文本" placeholder="箭头并开启点击反馈" arrow-direction="down" :is-link="true" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				title: '',
				value: '',
				text: '',
				tel: '',
				digit: '',
				number: '',
				password: '',
				username: '',
				phone: '',
				sms: '',
				isError: false,
				errorMessage: '',
				message: '',
			}
		},
		watch: {
			username(val) {
				if (val == '') {
					return this.isError = false;
				}
				this.isError = !/^[A-Za-z0-9]+$/.test(val);
			},
			phone(val) {
				if (val == '') {
					return this.errorMessage = '';
				}
				this.errorMessage = !/^(13[0-9]|14[5|7]|15[0-9]|18[0-9]|19[4|5])\d{8}$/.test(val) ? '手机号格式错误' : '';
			}
		},
		created() {
			console.log('query:', this.$route.query);
			this.title = this.$route.query.title;
		},
		mounted() {
			this.$refs.field.focus();
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			formatter(value) {
				// 过滤输入的数字
				return value.replace(/\d/g, '');
			},
			onClear() {
				this.value = '';
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

	.item-wrapper {
		border-radius: 1rem;
	}
</style>
