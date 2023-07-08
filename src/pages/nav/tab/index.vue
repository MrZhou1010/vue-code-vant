<template>
  <div class="tab">
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
      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
      <!-- 通过名称匹配 -->
      <div style="color: #666666; margin: 10px">通过名称匹配</div>
      <van-tabs v-model="activeName">
        <van-tab title="标签 1" name="a">内容 1</van-tab>
        <van-tab title="标签 2" name="b">内容 2</van-tab>
        <van-tab title="标签 3" name="c">内容 3</van-tab>
      </van-tabs>
      <!-- 标签栏滚动 -->
      <div style="color: #666666; margin: 10px">标签栏滚动</div>
      <van-tabs color="#00ee7e" background="#f8f8f8">
        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      <!-- 禁用标签 -->
      <div style="color: #666666; margin: 10px">禁用标签</div>
      <van-tabs @disabled="onClickDisabled">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2" disabled>内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
      <!-- 样式风格 -->
      <div style="color: #666666; margin: 10px">样式风格</div>
      <van-tabs type="card">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
      <!-- 点击事件 -->
      <div style="color: #666666; margin: 10px">点击事件</div>
      <van-tabs @click="onClick">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
      <!-- 粘性布局 -->
      <div style="color: #666666; margin: 10px">粘性布局</div>
      <van-tabs sticky>
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
      <!-- 自定义标签 -->
      <div style="color: #666666; margin: 10px">自定义标签</div>
      <van-tabs v-model="active" :line-width="20" :line-height="2">
        <van-tab v-for="index in 4" :key="index">
          <template #title>
            <van-icon name="more-o" />
            <span>选项 {{ index }}</span>
          </template>
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      <!-- 切换动画 -->
      <div style="color: #666666; margin: 10px">切换动画</div>
      <van-tabs animated>
        <van-tab v-for="index in 4" :title="'标签 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      <!-- 滑动切换 -->
      <div style="color: #666666; margin: 10px">滑动切换</div>
      <van-tabs swipeable>
        <van-tab v-for="index in 4" :title="'标签 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      <!-- 滚动导航 -->
      <div style="color: #666666; margin: 10px">滚动导航</div>
      <van-tabs scrollspy sticky offset-top="2.75rem">
        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      <!-- 异步切换 -->
      <div style="color: #666666; margin: 10px">异步切换</div>
      <van-tabs :before-change="beforeChange">
        <van-tab v-for="index in 4" :title="'标签 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      <!-- 标签栏外边框 -->
      <div style="color: #666666; margin: 10px">标签栏外边框</div>
      <van-tabs border>
        <van-tab v-for="index in 4" :title="'标签 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      <!-- 标题颜色 -->
      <div style="color: #666666; margin: 10px">标题颜色</div>
      <van-tabs
        color="#00ee7e"
        background="#f8f8f8"
        title-active-color="#00ee7e"
        title-inactive-color="#cccccc"
      >
        <van-tab v-for="index in 4" :title="'标签 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      <!-- 徽标提示 -->
      <div style="color: #666666; margin: 10px">徽标提示</div>
      <van-tabs>
        <van-tab title="标签 1" dot>内容 1</van-tab>
        <van-tab title="标签 2" badge="16">内容 2</van-tab>
        <van-tab title="标签 3" badge="99+">内容 3</van-tab>
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
      activeName: "a",
      active: 1,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onClickDisabled(name, title) {
      console.log(name);
      this.$toast(title + "已被禁用");
    },
    onClick(name, title) {
      console.log(name);
      this.$toast(title + "已被点击");
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

.van-tab__pane {
  padding: 20px;
  background-color: white;
}

.van-tab__pane-wrapper {
  padding: 20px;
  background-color: white;
}
</style>
