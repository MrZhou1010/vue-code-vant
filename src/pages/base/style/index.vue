<template>
	<div class="style">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 文字省略 -->
			<div style="color: #666666;">文字省略</div>
			<div class="content-ellipsis">
				<!-- 最多显示一行 -->
				<div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略。</div>
				<br />
				<!-- 最多显示两行 -->
				<div class="van-multi-ellipsis--l2">这是一段最多显示两行的文字，多余的内容会被省略。这是一段最多显示两行的文字，多余的内容会被省略。
				</div>
				<br />
				<!-- 最多显示三行 -->
				<div class="van-multi-ellipsis--l3">
					这是一段最多显示三行的文字，多余的内容会被省略。这是一段最多显示三行的文字，多余的内容会被省略。这是一段最多显示三行的文字，多余的内容会被省略。这是一段最多显示三行的文字，多余的内容会被省略。
				</div>
			</div>
			<br />
			<!-- 1px 边框 -->
			<div style="color: #666666;">1px 边框</div>
			<div class="content-ellipsis">
				<!-- 上边框 -->
				<div class="van-hairline--top" style="padding-top: 0.375rem;">上边框</div>
				<br />
				<!-- 下边框 -->
				<div class="van-hairline--bottom" style="padding-bottom: 0.375rem;">下边框</div>
				<br />
				<!-- 左边框 -->
				<div class="van-hairline--left" style="padding-left: 0.375rem;">左边框</div>
				<br />
				<!-- 右边框 -->
				<div class="van-hairline--right" style="padding-right: 0.375rem;">右边框</div>
				<br />
				<!-- 上下边框 -->
				<div class="van-hairline--top-bottom" style="padding: 0.375rem 0;">上下边框</div>
				<br />
				<!-- 全边框 -->
				<div class="van-hairline--surround" style="padding: 0.375rem;">全边框</div>
			</div>
			<br />
			<!-- 动画 -->
			<div style="color: #666666;">动画</div>
			<div class="content-ellipsis">
				<van-cell class="item-cell" is-link @click="visible1 = true">淡入</van-cell>
				<van-cell class="item-cell" is-link @click="visible2 = true">上滑进入</van-cell>
				<van-cell class="item-cell" is-link @click="visible3 = true">下滑进入</van-cell>
				<van-cell class="item-cell" is-link @click="visible4 = true">左滑进入</van-cell>
				<van-cell class="item-cell" is-link @click="visible5 = true">右滑进入</van-cell>
			</div>
			<!-- 淡入 -->
			<transition name="van-fade">
				<div v-show="visible1" class="content-visible">Fade</div>
			</transition>
			<!-- 上滑进入 -->
			<transition name="van-slide-up">
				<div v-show="visible2" class="content-visible">Slide Up</div>
			</transition>
			<!-- 下滑进入 -->
			<transition name="van-slide-down">
				<div v-show="visible3" class="content-visible">Slide Down</div>
			</transition>
			<!-- 左滑进入 -->
			<transition name="van-slide-left">
				<div v-show="visible4" class="content-visible">Slide Left</div>
			</transition>
			<!-- 右滑进入 -->
			<transition name="van-slide-right">
				<div v-show="visible5" class="content-visible">Slide Right</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				title: '',
				visible1: false,
				visible2: false,
				visible3: false,
				visible4: false,
				visible5: false,
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

	.content-ellipsis {
		margin-top: 0.625rem;
		padding: 0.625rem;
		background-color: white;
		border-radius: 0.625rem;
	}

	.content-visible {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 100px;
		height: 100px;
		margin: -50px 0 0 -50px;
		background-color: red;
		border-radius: 10px;
	}
</style>
