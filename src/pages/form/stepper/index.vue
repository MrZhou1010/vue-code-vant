<template>
  <div class="stepper">
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
      <van-cell title="基础用法">
        <van-stepper v-model="value1" />
      </van-cell>
      <!-- 步长设置 -->
      <van-cell title="步长设置">
        <van-stepper v-model="value2" step="2" />
      </van-cell>
      <!-- 限制输入范围 -->
      <van-cell title="限制输入范围">
        <van-stepper v-model="value3" min="2" max="8" />
      </van-cell>
      <!-- 限制输入整数 -->
      <van-cell title="限制输入整数">
        <van-stepper v-model="value4" integer />
      </van-cell>
      <!-- 禁用状态 -->
      <van-cell title="禁用状态">
        <van-stepper v-model="value5" disabled />
      </van-cell>
      <!-- 禁用输入框 -->
      <van-cell title="禁用输入框">
        <van-stepper v-model="value6" disable-input />
      </van-cell>
      <!-- 固定小数位数 -->
      <van-cell title="固定小数位数">
        <van-stepper v-model="value7" step="0.2" :decimal-length="1" />
      </van-cell>
      <!-- 自定义大小 -->
      <van-cell title="自定义大小">
        <van-stepper v-model="value8" input-width="40px" button-size="32px" />
      </van-cell>
      <!-- 异步变更 -->
      <van-cell title="异步变更">
        <van-stepper v-model="value9" async-change @change="onChange" />
      </van-cell>
      <!-- 圆角风格 -->
      <van-cell title="圆角风格">
        <van-stepper
          v-model="value10"
          theme="round"
          button-size="22px"
          disable-input
        />
      </van-cell>
      <!-- 是否显示增加按钮 -->
      <van-cell title="是否显示增加按钮">
        <van-stepper v-model="value11" :show-plus="false" />
      </van-cell>
      <!-- 是否显示减少按钮 -->
      <van-cell title="是否显示减少按钮">
        <van-stepper v-model="value12" :show-minus="false" />
      </van-cell>
      <!-- 是否显示输入框 -->
      <van-cell title="是否显示输入框">
        <van-stepper v-model="value13" :show-input="false" />
      </van-cell>
      <!-- 是否开启长按手势 -->
      <van-cell title="是否开启长按手势">
        <van-stepper v-model="value14" :long-press="false" />
      </van-cell>
      <!-- 是否允许输入的值为空 -->
      <van-cell title="是否允许输入的值为空">
        <van-stepper v-model="value15" :allow-empty="true" />
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      value1: 1,
      value2: 2,
      value3: 3,
      value4: 4,
      value5: 5,
      value6: 6,
      value7: 7,
      value8: 8,
      value9: 9,
      value10: 10,
      value11: 11,
      value12: 12,
      value13: 13,
      value14: 14,
      value15: 15,
      timer: null,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  destroyed() {
    this.timer = null;
    clearTimeout(this.timer);
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onChange(value, detail) {
      console.log(detail);
      this.$toast.loading({
        forbidClick: true,
      });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$toast.clear();
        // 注意此时修改value后会再次触发change事件
        // this.value9 = value;
      }, 500);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.van-cell {
  background-color: #f8f8f8;
}
</style>
