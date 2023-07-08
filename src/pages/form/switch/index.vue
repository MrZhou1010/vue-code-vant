<template>
  <div class="switch">
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
      <van-switch class="item-switch" v-model="checked1" />
      <!-- 禁用状态 -->
      <div style="color: #666666">禁用状态</div>
      <van-switch class="item-switch" v-model="checked2" disabled />
      <!-- 加载状态 -->
      <div style="color: #666666">加载状态</div>
      <van-switch class="item-switch" v-model="checked3" loading />
      <!-- 自定义大小 -->
      <div style="color: #666666">自定义大小</div>
      <van-switch class="item-switch" v-model="checked4" size="24px" />
      <!-- 自定义颜色 -->
      <div style="color: #666666">自定义颜色</div>
      <van-switch
        class="item-switch"
        v-model="checked5"
        active-color="#ee0a24"
        inactive-color="#6a5e8e"
      />
      <!-- 自定义值 -->
      <div style="color: #666666">自定义值</div>
      <van-switch
        class="item-switch"
        v-model="checked6"
        active-value="开"
        inactive-value="关"
        @change="onChange"
      />
      <!-- 异步控制 -->
      <div style="color: #666666">异步控制</div>
      <van-switch class="item-switch" :value="checked7" @input="onInput" />
      <!-- 搭配单元格使用 -->
      <div style="color: #666666">搭配单元格使用</div>
      <van-cell class="item-switch" title="标题" center>
        <template #right-icon>
          <van-switch v-model="checked8" size="24px" />
        </template>
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
      checked1: false,
      checked2: true,
      checked3: true,
      checked4: false,
      checked5: false,
      checked6: true,
      checked7: false,
      checked8: true,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onInput(checked) {
      this.$dialog
        .confirm({
          title: "提醒",
          message: "是否切换开关?",
        })
        .then(() => {
          this.checked7 = checked;
        });
    },
    onChange(vaule) {
      this.$toast(vaule);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.item-switch {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.van-cell {
  background-color: #f8f8f8;
}
</style>
