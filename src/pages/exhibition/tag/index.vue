<template>
  <div class="tag">
    <van-nav-bar
      style="background-color: lightblue;"
      left-arrow
      fixed
      border
      safe-area-inset-top
      :title="title"
      @click-left="goBack()"
    >
    </van-nav-bar>
    <div class="content">
      <!-- 基础用法 -->
      <van-cell-group title="基础用法" :border="false" inset>
        <van-cell title="primary 类型" :border="true">
          <van-tag type="primary">标签</van-tag>
        </van-cell>
        <van-cell title="success 类型" :border="true">
          <van-tag type="success">标签</van-tag>
        </van-cell>
        <van-cell title="danger 类型" :border="true">
          <van-tag type="danger">标签</van-tag>
        </van-cell>
        <van-cell title="warning 类型" :border="true">
          <van-tag type="warning">标签</van-tag>
        </van-cell>
      </van-cell-group>
      <!-- 样式风格 -->
      <van-cell-group title="样式风格" :border="false" inset>
        <van-cell title="空心样式" :border="true">
          <van-tag type="primary" plain>标签</van-tag>
        </van-cell>
        <van-cell title="圆角样式" :border="true">
          <van-tag type="primary" round>标签</van-tag>
        </van-cell>
        <van-cell title="标记样式" :border="true">
          <van-tag type="primary" mark>标签</van-tag>
        </van-cell>
        <van-cell title="可关闭标签" :border="true">
          <van-tag
            v-if="show"
            type="primary"
            size="medium"
            closeable
            @close="show = false"
            >标签</van-tag
          >
        </van-cell>
      </van-cell-group>
      <!-- 标签大小 -->
      <van-cell-group title="标签大小" :border="false" inset>
        <van-cell title="小号标签" :border="true">
          <van-tag type="default" size="">标签</van-tag>
        </van-cell>
        <van-cell title="小号标签" :border="true">
          <van-tag type="default" size="medium">标签</van-tag>
        </van-cell>
        <van-cell title="小号标签" :border="true">
          <van-tag type="default" size="large">标签</van-tag>
        </van-cell>
      </van-cell-group>
      <!-- 自定义颜色 -->
      <van-cell-group title="自定义颜色" :border="false" inset>
        <van-cell title="背景颜色" :border="true">
          <van-tag color="#00e2dd">标签</van-tag>
        </van-cell>
        <van-cell title="背景颜色" :border="true">
          <van-tag color="#66eedd" text-color="#ee00dd">标签</van-tag>
        </van-cell>
        <van-cell title="空心颜色" :border="true">
          <van-tag color="#ee66dd" plain>标签</van-tag>
        </van-cell>
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
      show: true,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.content {
  margin-top: 2.75rem;
  padding: 0.625rem;
  background-color: #f8f8f8;
  text-align: left;
}
</style>
