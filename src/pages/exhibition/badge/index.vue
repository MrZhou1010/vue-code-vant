<template>
  <div class="badge">
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
      <!-- 基础用法 -->
      <div style="color: #666666">基础用法</div>
      <div style="display: flex">
        <van-badge style="margin: 10px" :content="5">
          <div class="child"></div>
        </van-badge>
        <van-badge style="margin: 10px" :content="10">
          <div class="child"></div>
        </van-badge>
        <van-badge style="margin: 10px" content="Hot">
          <div class="child"></div>
        </van-badge>
        <van-badge style="margin: 10px" dot>
          <div class="child"></div>
        </van-badge>
      </div>
      <!-- 最大值 -->
      <div style="color: #666666">最大值</div>
      <div style="display: flex">
        <van-badge style="margin: 10px" :content="20" max="9">
          <div class="child"></div>
        </van-badge>
        <van-badge style="margin: 10px" :content="50" max="20">
          <div class="child"></div>
        </van-badge>
        <van-badge style="margin: 10px" :content="200" max="99">
          <div class="child"></div>
        </van-badge>
      </div>
      <!-- 自定义颜色 -->
      <div style="color: #666666">自定义颜色</div>
      <div style="display: flex">
        <van-badge style="margin: 10px" color="#00ff6a" :content="5">
          <div class="child"></div>
        </van-badge>
        <van-badge style="margin: 10px" color="#00ff6a" :content="10">
          <div class="child"></div>
        </van-badge>
        <van-badge style="margin: 10px" color="#00ff6a" dot>
          <div class="child"></div>
        </van-badge>
      </div>
      <!-- 自定义徽标内容 -->
      <div style="color: #666666">自定义徽标内容</div>
      <div style="display: flex">
        <van-badge style="margin: 10px">
          <div class="child"></div>
          <template #content>
            <van-icon class="badge-icon" name="success" />
          </template>
        </van-badge>
        <van-badge style="margin: 10px">
          <div class="child"></div>
          <template #content>
            <van-icon class="badge-icon" name="cross" />
          </template>
        </van-badge>
        <van-badge style="margin: 10px">
          <div class="child"></div>
          <template #content>
            <van-icon class="badge-icon" name="down" />
          </template>
        </van-badge>
      </div>
      <!-- 独立展示 -->
      <div style="color: #666666">独立展示</div>
      <div style="display: flex">
        <van-badge style="margin: 10px" :content="20" />
        <van-badge style="margin: 10px" :content="200" max="99" />
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

.child {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: @base-border-color;
}

.badge-icon {
  font-size: 10px;
  line-height: 16px;
  display: block;
}
</style>
