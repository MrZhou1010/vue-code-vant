<template>
  <div class="tabbar">
    <van-nav-bar
      style="background-color: lightblue"
      left-arrow
      fixed
      border
      safe-area-inset-top
      :title="title"
      :z-index="101"
      @click-left="goBack()"
    >
    </van-nav-bar>
    <div class="content">
      <!-- 基础用法 -->
      <div style="color: #666666; margin: 10px">基础用法</div>
      <van-tabbar v-model="active" :fixed="false">
        <van-tabbar-item icon="home-o">标签A</van-tabbar-item>
        <van-tabbar-item icon="search">标签B</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签C</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签D</van-tabbar-item>
      </van-tabbar>
      <!-- 通过名称匹配 -->
      <div style="color: #666666; margin: 10px">通过名称匹配</div>
      <van-tabbar v-model="activeName" :fixed="false">
        <van-tabbar-item name="home" icon="home-o">标签A</van-tabbar-item>
        <van-tabbar-item name="search" icon="search">标签B</van-tabbar-item>
        <van-tabbar-item name="friends" icon="friends-o">标签C</van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o">标签D</van-tabbar-item>
      </van-tabbar>
      <!-- 是否显示外边框 -->
      <div style="color: #666666; margin: 10px">是否显示外边框</div>
      <van-tabbar v-model="active" :fixed="false" :border="false">
        <van-tabbar-item icon="home-o">标签A</van-tabbar-item>
        <van-tabbar-item icon="search">标签B</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签C</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签D</van-tabbar-item>
      </van-tabbar>
      <!-- 徽标提示 -->
      <div style="color: #666666; margin: 10px">徽标提示</div>
      <van-tabbar v-model="active" :fixed="false">
        <van-tabbar-item icon="home-o">标签A</van-tabbar-item>
        <van-tabbar-item icon="search" dot>标签B</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">标签C</van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="99+">标签D</van-tabbar-item>
      </van-tabbar>
      <!-- 自定义图标 -->
      <div style="color: #666666; margin: 10px">自定义图标</div>
      <van-tabbar v-model="active" :fixed="false">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item badge="3">
          <span>自定义</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
      </van-tabbar>
      <!-- 自定义颜色 -->
      <div style="color: #666666; margin: 10px">自定义颜色</div>
      <van-tabbar
        v-model="active"
        active-color="#00ee7e"
        inactive-color="#cccccc"
        :fixed="false"
      >
        <van-tabbar-item icon="home-o">标签A</van-tabbar-item>
        <van-tabbar-item icon="search">标签B</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签C</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签D</van-tabbar-item>
      </van-tabbar>
      <!-- 监听切换事件 -->
      <div style="color: #666666; margin: 10px">监听切换事件</div>
      <van-tabbar v-model="active" :fixed="false" @change="onChange">
        <van-tabbar-item icon="home-o">标签A</van-tabbar-item>
        <van-tabbar-item icon="search">标签B</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签C</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签D</van-tabbar-item>
      </van-tabbar>
      <!-- 异步切换 -->
      <div style="color: #666666; margin: 10px">异步切换</div>
      <van-tabbar v-model="active" :fixed="false" :before-change="beforeChange">
        <van-tabbar-item icon="home-o">标签A</van-tabbar-item>
        <van-tabbar-item icon="search">标签B</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签C</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签D</van-tabbar-item>
      </van-tabbar>
      <div style="height: 50px"></div>
    </div>
    <!-- 路由模式 -->
    <van-tabbar route safe-area-inset-bottom>
      <van-tabbar-item icon="home-o" to="/home" replace>首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search" replace>
        搜索
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      activeName: "home",
      active: 1,
      icon: {
        // active: "https://img01.yzcdn.cn/vant/user-active.png",
        active: require("@/assets/tabbar/tabbar-guide-s.png"),
        // inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
        inactive: require("@/assets/tabbar/tabbar-guide-n.png"),
      },
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onChange(active) {
      this.$toast(active + "已被点击");
    },
    beforeChange(index) {
      // 返回 false 表示阻止此次切换
      if (index === 1) {
        return false;
      }
      // 返回 Promise 来执行异步逻辑
      return new Promise((resolve) => {
        // 在 resolve 函数中返回 true 或 false
        resolve(index % 2 == 0);
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.content {
  padding: 0.625rem 0;
}
</style>
