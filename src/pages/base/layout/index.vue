<template>
  <div class="layout">
    <van-nav-bar
      style="background-color: lightblue"
      left-arrow
      fixed
      border
      safe-area-inset-top
      :title="title"
      @click-left="goBack()"
    >
    </van-nav-bar>
    <div class="content">
      <!-- 基础用法 24列栅格 -->
      <div style="color: #666666">基础用法</div>
      <van-row>
        <van-col
          v-for="index in num"
          :class="index % 2 === 0 ? 'col-red' : 'col-orange'"
          :key="index"
          :span="span"
          >span: {{ span }}</van-col
        >
      </van-row>
      <br />
      <van-row>
        <van-col class="col-red" span="6">span: 6</van-col>
        <van-col class="col-orange" span="10" offset="2"
          >offset: 2, span: 10</van-col
        >
      </van-row>
      <br />
      <van-row>
        <van-col class="col-red" span="12" offset="12"
          >offset: 12, span: 12</van-col
        >
      </van-row>
      <br />
      <!-- 设置列元素间距 -->
      <div style="color: #666666">设置列元素间距</div>
      <van-row gutter="30">
        <van-col class="col-red" span="8">span: 8</van-col>
        <van-col class="col-orange" span="8">span: 8</van-col>
        <van-col class="col-red" span="8">span: 8</van-col>
      </van-row>
      <br />
      <!-- Flex 布局 -->
      <div style="color: #666666">Flex 布局</div>
      <!-- 左对齐 -->
      <van-row type="flex">
        <van-col class="col-red" span="6">span: 6</van-col>
        <van-col class="col-orange" span="6">span: 6</van-col>
        <van-col class="col-red" span="6">span: 6</van-col>
      </van-row>
      <br />
      <!-- 居中 -->
      <van-row type="flex" justify="center">
        <van-col class="col-red" span="6">span: 6</van-col>
        <van-col class="col-orange" span="6">span: 6</van-col>
        <van-col class="col-red" span="6">span: 6</van-col>
      </van-row>
      <br />
      <!-- 右对齐 -->
      <van-row type="flex" justify="end">
        <van-col class="col-red" span="6">span: 6</van-col>
        <van-col class="col-orange" span="6">span: 6</van-col>
        <van-col class="col-red" span="6">span: 6</van-col>
      </van-row>
      <br />
      <!-- 两端对齐 -->
      <van-row type="flex" justify="space-between">
        <van-col class="col-red" span="6">span: 6</van-col>
        <van-col class="col-orange" span="6">span: 6</van-col>
        <van-col class="col-red" span="6">span: 6</van-col>
      </van-row>
      <br />
      <!-- 每个元素的两侧间隔相等 -->
      <van-row type="flex" justify="space-around">
        <van-col class="col-red" span="6">span: 6</van-col>
        <van-col class="col-orange" span="6">span: 6</van-col>
        <van-col class="col-red" span="6">span: 6</van-col>
      </van-row>
      <!-- Flex 交叉轴对齐方式 -->
      <!-- 当align="top"时手动设置align-items:flex-start才行 -->
      <div style="color: #666666">Flex 交叉轴对齐方式</div>
      <van-row class="row-blue" type="flex" align="top" @click="onClick('row')">
        <van-col class="col-red" span="6" @click.stop="onClick('col')"
          >span: 6</van-col
        >
        <van-col class="col-orange" span="6" @click.stop="onClick('col')"
          >span: 6</van-col
        >
        <van-col class="col-red" span="6" @click.stop="onClick('col')"
          >span: 6</van-col
        >
      </van-row>
      <br />
      <van-row class="row-blue" type="flex" align="center">
        <van-col class="col-red" span="6">span: 6</van-col>
        <van-col class="col-orange" span="6">span: 6</van-col>
        <van-col class="col-red" span="6">span: 6</van-col>
      </van-row>
      <br />
      <van-row class="row-blue" type="flex" align="bottom">
        <van-col class="col-red" span="6">span: 6</van-col>
        <van-col class="col-orange" span="6">span: 6</van-col>
        <van-col class="col-red" span="6">span: 6</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      num: 3,
    };
  },
  computed: {
    span() {
      return 24 / this.num;
    },
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onClick(str) {
      if (str === "col") {
        this.$toast("col被点击");
      } else if (str === "row") {
        this.$toast("row被点击");
      }
    },
    onLoad() {
      this.$toast("图片正在加载...");
    },
    onError() {
      this.$toast("图片加载失败");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

/*
	.van-col:nth-child(odd) {
		height: 2.5rem;
		background-color: red;
		background-clip: content-box;
		text-align: center;
	}

	.van-col:nth-child(even) {
		height: 2.5rem;
		background-color: orange;
		background-clip: content-box;
		text-align: center;
	}
	*/

.col-red {
  height: 2.5rem;
  background-color: red;
  background-clip: content-box;
  text-align: center;
}

.col-orange {
  height: 2.5rem;
  background-color: orange;
  background-clip: content-box;
  text-align: center;
}

.row-blue {
  height: 3.75rem;
  background-color: blue;
}

.item-image {
  margin-top: 1rem;
  margin-left: 1rem;
}
</style>
