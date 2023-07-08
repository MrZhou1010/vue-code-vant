<template>
  <div class="sidebar">
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
      <div style="display: flex">
        <div style="display: block">
          <!-- 基础用法 -->
          <div style="color: #666666; margin: 10px 0">基础用法</div>
          <van-sidebar v-model="active1">
            <van-sidebar-item title="标签A" />
            <van-sidebar-item title="标签B" />
            <van-sidebar-item title="标签C" />
          </van-sidebar>
        </div>
        <div style="display: block; margin-left: 100px">
          <!-- 徽标提示 -->
          <div style="color: #666666; margin: 10px 0">徽标提示</div>
          <van-sidebar v-model="active2">
            <van-sidebar-item title="标签名称A" dot />
            <van-sidebar-item title="标签名称B" badge="5" />
            <van-sidebar-item title="标签名称C" badge="99+" />
          </van-sidebar>
        </div>
      </div>
      <div style="display: flex">
        <div style="display: block">
          <!-- 禁用选项 -->
          <div style="color: #666666; margin: 10px 0">禁用选项</div>
          <van-sidebar v-model="active3">
            <van-sidebar-item title="标签名称A" />
            <van-sidebar-item title="标签名称B" disabled />
            <van-sidebar-item title="标签名称C" />
          </van-sidebar>
        </div>
        <div style="display: block; margin-left: 100px">
          <!-- 监听切换事件 -->
          <div style="color: #666666; margin: 10px 0">监听切换事件</div>
          <van-sidebar v-model="active4" @change="onChange">
            <van-sidebar-item title="标签名称A" />
            <van-sidebar-item title="标签名称B" />
            <van-sidebar-item title="标签名称C" />
          </van-sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      active1: 1,
      active2: 1,
      active3: 1,
      active4: 1,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onChange(index) {
      this.$toast(`选中的标签:${index}`);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.content {
  background-color: white;
}

.sidebar {
  background-color: white;
}
</style>
