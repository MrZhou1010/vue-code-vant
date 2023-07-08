<template>
  <div class="rate">
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
      <van-rate class="item-rate" v-model="value1" />
      <!-- 自定义图标 -->
      <div style="color: #666666">自定义图标</div>
      <van-rate
        class="item-rate"
        v-model="value2"
        icon="like"
        void-icon="like-o"
      />
      <!-- 自定义样式 -->
      <div style="color: #666666">自定义样式</div>
      <van-rate
        class="item-rate"
        v-model="value3"
        :size="25"
        color="#0e6fee"
        void-icon="star"
        void-color="#eeeeee"
      />
      <!-- 半星 -->
      <div style="color: #666666">半星</div>
      <van-rate
        class="item-rate"
        v-model="value4"
        allow-half
        void-icon="star"
        void-color="#eeeeee"
      />
      <!-- 自定义数量 -->
      <div style="color: #666666">自定义数量</div>
      <van-rate class="item-rate" v-model="value5" :count="6" />
      <!-- 禁用状态 -->
      <div style="color: #666666">禁用状态</div>
      <van-rate class="item-rate" v-model="value6" disabled />
      <!-- 只读状态 -->
      <div style="color: #666666">只读状态</div>
      <van-rate class="item-rate" v-model="value7" readonly />
      <!-- 监听 change 事件 -->
      <div style="color: #666666">监听 change 事件</div>
      <van-rate class="item-rate" v-model="value8" @change="onChange" />
      <!-- 图标间距 -->
      <div style="color: #666666">图标间距</div>
      <van-rate class="item-rate" v-model="value9" gutter="10px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      value1: 3,
      value2: 2,
      value3: 3,
      value4: 2.8,
      value5: 5,
      value6: 3,
      value7: 2,
      value8: 3,
      value9: 2,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onChange(value) {
      this.$toast(value);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.item-rate {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}
</style>
