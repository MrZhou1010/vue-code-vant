<template>
  <div class="button">
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
      <!-- 按钮类型 -->
      <div style="color: #666666">按钮类型</div>
      <van-button class="item-button" type="primary">主要按钮</van-button>
      <van-button class="item-button" type="info">信息按钮</van-button>
      <van-button class="item-button" type="default">默认按钮</van-button>
      <van-button class="item-button" type="warning">警告按钮</van-button>
      <van-button class="item-button" type="danger">危险按钮</van-button>
      <br /><br />
      <!-- 朴素按钮 -->
      <div style="color: #666666">朴素按钮</div>
      <van-button class="item-button" plain type="primary">朴素按钮</van-button>
      <van-button class="item-button" plain type="info">朴素按钮</van-button>
      <br /><br />
      <!-- 细边框 -->
      <div style="color: #666666">细边框</div>
      <van-button class="item-button" plain hairline type="primary"
        >细边框按钮</van-button
      >
      <van-button class="item-button" plain hairline type="info"
        >细边框按钮</van-button
      >
      <br /><br />
      <!-- 禁用状态 -->
      <div style="color: #666666">禁用状态</div>
      <van-button class="item-button" disabled type="primary"
        >禁用状态</van-button
      >
      <van-button class="item-button" disabled plain hairline type="info"
        >禁用状态</van-button
      >
      <br /><br />
      <!-- 加载状态 -->
      <div style="color: #666666">加载状态</div>
      <van-button class="item-button" loading type="primary"
        >加载状态</van-button
      >
      <van-button class="item-button" loading type="info" loading-type="spinner"
        >加载状态</van-button
      >
      <van-button
        class="item-button"
        loading
        type="info"
        loading-text="加载中..."
        loading-size="16px"
      />
      <br /><br />
      <!-- 按钮形状 -->
      <div style="color: #666666">按钮形状</div>
      <van-button class="item-button" square type="primary"
        >方形按钮</van-button
      >
      <van-button class="item-button" round type="info">圆形按钮</van-button>
      <br /><br />
      <!-- 图标按钮 -->
      <div style="color: #666666">图标按钮</div>
      <van-button class="item-button" icon="plus" type="primary" />
      <van-button
        class="item-button"
        icon="plus"
        icon-position="right"
        type="info"
        >按钮</van-button
      >
      <van-button
        class="item-button"
        icon="https://img01.yzcdn.cn/vant/user-active.png"
        type="default"
      >
        按钮
      </van-button>
      <br /><br />
      <!-- 按钮尺寸 -->
      <van-button class="item-button" type="primary" size="large"
        >大号按钮</van-button
      >
      <van-button class="item-button" type="primary" size="normal"
        >普通按钮</van-button
      >
      <van-button class="item-button" type="primary" size="small"
        >小型按钮</van-button
      >
      <van-button class="item-button" type="primary" size="mini"
        >迷你按钮</van-button
      >
      <br /><br />
      <!-- 块级元素 -->
      <van-button class="item-button" block type="primary">块级元素</van-button>
      <br /><br />
      <!-- 页面导航 -->
      <div style="color: #666666">页面导航</div>
      <van-button class="item-button" type="primary" url="http://www.baidu.com"
        >URL跳转</van-button
      >
      <van-button class="item-button" type="primary" to="/home"
        >路由跳转</van-button
      >
      <br /><br />
      <!-- 自定义颜色 -->
      <div style="color: #666666">自定义颜色</div>
      <van-button class="item-button" color="#7232dd" @click="onClick()"
        >单色按钮</van-button
      >
      <van-button
        class="item-button"
        plain
        color="#7232dd"
        @touchstart="onTouchstart()"
        >单色按钮</van-button
      >
      <van-button
        class="item-button"
        color="linear-gradient(to right, #ff9034, #ee0a24)"
      >
        渐变色按钮
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
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
      this.$toast("按钮被点击");
    },
    onTouchstart() {
      this.$toast("开始触摸按钮");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.item-button {
  margin-top: 1rem;
  margin-left: 1rem;
}
</style>
