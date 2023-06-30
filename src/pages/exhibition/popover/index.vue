<template>
	<div class="popover">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<div style="color: #666666;margin: 10px 0;">基础用法</div>
			<van-popover v-model="showPopover1" trigger="click" placement="bottom-start" :actions="actions1"
				@select="onSelect">
				<template #reference>
					<van-button style="margin-left: 10px;" type="primary">浅色风格</van-button>
				</template>
			</van-popover>
			<van-popover v-model="showPopover2" trigger="click" theme="dark" :actions="actions2">
				<template #reference>
					<van-button style="margin-left: 20px;" type="warning">深色风格</van-button>
				</template>
			</van-popover>
			<!-- 弹出位置 -->
			<div style="color: #666666;margin: 10px 0;">弹出位置</div>
			<!-- 文字较短时 通过设置 scrollable 属性开启滚动播放 -->
			<van-cell class="item-cell" is-link @click="showPopup = true">选择弹出位置</van-cell>
			<van-popup v-model="showPopup" style="height: 88%;" position="bottom" round>
				<div class="wrapper">
					<van-popover v-model="showPopover3" trigger="click" theme="dark" :placement="placement"
						:actions="actions3">
						<template #reference>
							<div class="placement-style"></div>
						</template>
					</van-popover>
				</div>
				<van-picker :columns="columns" @change="onChange" />
			</van-popup>
			<!-- 选项配置 -->
			<div style="color: #666666;margin: 10px 0;">选项配置</div>
			<van-popover v-model="showPopover4" trigger="click" placement="bottom-start" :actions="actions4">
				<template #reference>
					<van-button style="margin-left: 10px;" type="primary">展示图标</van-button>
				</template>
			</van-popover>
			<van-popover v-model="showPopover5" trigger="click" :actions="actions5">
				<template #reference>
					<van-button style="margin-left: 20px;" type="warning">禁用选项</van-button>
				</template>
			</van-popover>
			<!-- 自定义内容 -->
			<div style="color: #666666;margin: 10px 0;">自定义内容</div>
			<van-popover v-model="showPopover6" trigger="click" placement="bottom-start">
				<van-grid style="width: 240px;" column-num="3" square clickable :border="false">
					<van-grid-item v-for="i in 6" :key="i" text="选项" icon="photo-o" @click="showPopover6 = false" />
				</van-grid>
				<template #reference>
					<van-button style="margin-left: 10px;" type="primary">自定义内容</van-button>
				</template>
			</van-popover>
			<!-- 是否显示遮罩层 -->
			<div style="color: #666666;margin: 10px 0;">是否显示遮罩层</div>
			<van-popover v-model="showPopover7" trigger="click" placement="top-start" :overlay="true"
				:close-on-click-outside="false">
				<van-grid style="width: 240px;" column-num="3" square clickable :border="false">
					<van-grid-item v-for="i in 6" :key="i" text="选项" icon="photo-o" @click="showPopover7 = false" />
				</van-grid>
				<template #reference>
					<van-button style="margin-left: 10px;" type="primary">自定义内容</van-button>
				</template>
			</van-popover>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				showPopup: false,
				showPopover1: false,
				showPopover2: false,
				showPopover3: false,
				showPopover4: false,
				showPopover5: false,
				showPopover6: false,
				showPopover7: false,
				placement: "top",
				columns: [
					"top",
					"top-start",
					"top-end",
					"left",
					"left-start",
					"left-end",
					"right",
					"right-start",
					"right-end",
					"bottom",
					"bottom-start",
					"bottom-end"
				],
				actions1: [{
					text: "选项一"
				}, {
					text: "选项二"
				}, {
					text: "选项三"
				}],
				actions2: [{
					text: "选项一"
				}, {
					text: "选项二"
				}, {
					text: "选项三"
				}],
				actions3: [{
					text: "选项一"
				}, {
					text: "选项二"
				}],
				actions4: [{
						text: "选项一",
						icon: "add-o"
					},
					{
						text: "选项二",
						icon: "music-o"
					},
					{
						text: "选项三",
						icon: "more-o"
					},
				],
				actions5: [{
						text: "选项一",
						disabled: true
					},
					{
						text: "选项二",
						disabled: true
					},
					{
						text: "选项三"
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
			onSelect(action) {
				this.$toast(action.text);
			},
			onChange(picker, value, index) {
				this.placement = value;
				this.showPopover3 = true;
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
		background-clip: border-box;
		border-radius: 0.625rem;
	}

	.wrapper {
		width: 100%;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.placement-style {
		width: 80px;
		height: 80px;
		border-radius: 10px;
		background-color: royalblue;
	}
</style>
