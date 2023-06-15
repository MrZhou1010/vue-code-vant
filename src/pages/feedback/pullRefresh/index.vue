<template>
	<div class="pull-refresh">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<van-tabs>
				<van-tab v-for="(tab, index) in tabs" :key="index" :title="tab">
					<div class="tab-content" v-if="index === 0">
						<van-pull-refresh v-model="isRefreshing1" @refresh="onRefresh1">
							<p>刷新次数: {{ count1 }}</p>
						</van-pull-refresh>
					</div>
					<div class="tab-content" v-if="index === 1">
						<van-pull-refresh v-model="isRefreshing2" success-text="刷新成功" @refresh="onRefresh2">
							<p>刷新次数: {{ count2 }}</p>
						</van-pull-refresh>
					</div>
					<div class="tab-content" v-if="index === 2">
						<van-pull-refresh v-model="isRefreshing3" :head-height="40" @refresh="onRefresh3">
							<!-- 下拉提示通过scale实现一个缩放效果 -->
							<template #pulling="props">
								<img class="doge" src="https://img01.yzcdn.cn/vant/doge.png"
									:style="{ transform: `scale(${props.distance / 40})` }" />
							</template>
							<!-- 释放提示 -->
							<template #loosing>
								<img class="doge" src="https://img01.yzcdn.cn/vant/doge.png" />
							</template>
							<!-- 加载提示 -->
							<template #loading>
								<img class="doge" src="https://img01.yzcdn.cn/vant/doge-fire.jpg" />
							</template>
							<p>刷新次数: {{ count3 }}</p>
						</van-pull-refresh>
					</div>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				tabs: ["用法示例", "成功提示", "自定义提示"],
				isRefreshing1: false,
				count1: 0,
				isRefreshing2: false,
				count2: 0,
				isRefreshing3: false,
				count3: 0,
			};
		},
		created() {
			this.title = this.$route.query.title;
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			onRefresh1() {
				setTimeout(() => {
					this.$toast("刷新成功");
					this.isRefreshing1 = false;
					this.count1++;
				}, 1000);
			},
			onRefresh2() {
				setTimeout(() => {
					this.isRefreshing2 = false;
					this.count2++;
				}, 2000);
			},
			onRefresh3() {
				setTimeout(() => {
					this.$toast("刷新成功");
					this.isRefreshing3 = false;
					this.count3++;
				}, 3000);
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		position: fixed;
		top: 2.75rem;
		left: 0;
		width: 100%;
		height: calc(100% - 2.75rem);
	}

	.van-tabs {
		position: relative;
		height: 100%;

		/deep/ .van-tabs__nav {
			background-color: #f8f8f8;
		}

		/deep/ .van-tabs__content {
			height: calc(100% - 44px);

			.van-tab__pane {
				height: 100%;

				.tab-content {
					height: 100%;
					padding: 0.625rem;
					text-align: left;

					.van-pull-refresh {
						height: 100%;
					}
				}
			}
		}
	}

	.doge {
		width: 70px;
		height: 36px;
		margin-top: 2px;
		border-radius: 4px;
	}
</style>
