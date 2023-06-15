<template>
	<div class="cell">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<!-- 基础用法 -->
			<van-cell-group title="基础用法" :border="true">
				<van-cell title="单元格" value="内容" :border="false" />
				<van-cell title="单元格" value="内容" label="描述信息" />
			</van-cell-group>
			<!-- 卡片风格 -->
			<van-cell-group inset title="卡片风格" :border="false">
				<van-cell title="单元格" value="内容" :border="true" />
				<van-cell title="单元格" value="内容" label="描述信息" />
			</van-cell-group>
			<!-- 单元格大小 -->
			<van-cell-group title="单元格大小">
				<van-cell title="单元格" value="内容" size="large" />
				<van-cell title="单元格" value="内容" size="large" label="描述信息" />
			</van-cell-group>
			<!-- 展示图标 -->
			<van-cell-group title="展示图标">
				<van-cell title="单元格" icon="location-o" />
			</van-cell-group>
			<!-- 只设置 value -->
			<van-cell-group title="只设置 value">
				<van-cell value="内容" />
			</van-cell-group>
			<!-- 展示箭头 -->
			<van-cell-group title="展示箭头">
				<van-cell title="单元格" is-link />
				<van-cell title="单元格" value="内容" is-link />
				<van-cell title="单元格" value="内容" is-link arrow-direction="down" />
			</van-cell-group>
			<!-- 页面导航 -->
			<van-cell-group title="页面导航">
				<van-cell title="URL跳转" is-link :replace="true" :url="url" />
				<van-cell title="路由跳转" is-link :replace="false" :to="'/cell/detail'" />
				<van-cell title="路由跳转" is-link @click="gotoDetail()" />
			</van-cell-group>
			<!-- 使用插槽 -->
			<van-cell-group title="使用插槽">
				<van-cell value="内容" is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">单元格</span>
						<van-tag type="danger">标签</van-tag>
					</template>
				</van-cell>
				<van-cell title="单元格" icon="shop-o">
					<!-- 使用 right-icon 插槽来自定义右侧图标 -->
					<template #right-icon>
						<van-icon class="search-icon" name="search" />
					</template>
				</van-cell>
			</van-cell-group>
			<!-- 垂直居中 -->
			<van-cell-group title="垂直居中">
				<van-cell center title="单元格" value="内容" label="描述信息" />
			</van-cell-group>
			<!-- 是否开启点击反馈 -->
			<van-cell-group title="是否开启点击反馈">
				<van-cell value="内容" :clickable="true" @click="onClick()" />
				<van-cell value="内容" is-link :clickable="false" @click="onClick()" />
			</van-cell-group>
			<!-- 是否显示表单必填星号 -->
			<van-cell-group title="是否显示表单必填星号">
				<van-cell title="单元格" value="内容" :required="true" />
				<van-cell title="单元格" value="内容" :border="false" :required="true" is-link />
			</van-cell-group>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				url: "http://www.baidu.com"
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
				this.$toast("cell被点击");
			},
			gotoDetail() {
				this.$router.togo("/cell/detail");
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

	.custom-title {
		margin-right: 4px;
		vertical-align: middle;
	}

	.search-icon {
		font-size: 16px;
		line-height: inherit;
	}
</style>
