<template>
  <div class="collapse">
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
      <van-collapse style="margin: 10px 0" v-model="activeNames1">
        <van-collapse-item title="标题1" name="1">内容1</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容2</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容3</van-collapse-item>
      </van-collapse>
      <!-- 手风琴 -->
      <div style="color: #666666">手风琴</div>
      <van-collapse style="margin: 10px 0" v-model="activeNames2" accordion>
        <van-collapse-item title="标题1" name="1">内容1</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容2</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容3</van-collapse-item>
      </van-collapse>
      <!-- 禁用状态 -->
      <div style="color: #666666">禁用状态</div>
      <van-collapse
        style="margin: 10px 0"
        v-model="activeNames3"
        :border="false"
      >
        <van-collapse-item title="标题1" name="1">内容1</van-collapse-item>
        <van-collapse-item title="标题2" name="2" :is-link="false">
          内容2
        </van-collapse-item>
        <van-collapse-item title="标题3" name="3" disabled>
          内容3
        </van-collapse-item>
      </van-collapse>
      <!-- 自定义标题内容 -->
      <div style="color: #666666">自定义标题内容</div>
      <van-collapse style="margin: 10px 0" v-model="activeNames4">
        <van-collapse-item name="1">
          <template #title>
            <div>
              标题1
              <van-icon name="question-o" color="#ff00ee" />
            </div>
          </template>
          内容1
          <template #value>
            <van-badge dot></van-badge>
          </template>
        </van-collapse-item>
        <van-collapse-item title="标题2" name="2" value="内容">
          <template #icon>
            <div>
              <van-icon name="shop-o" color="#cc66ee" size="22" />
            </div>
          </template>
          内容2
        </van-collapse-item>
        <van-collapse-item title="标题3" name="3" label="描述内容" size="large">
          内容3
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      activeNames1: ["2"],
      activeNames2: "2",
      activeNames3: ["2"],
      activeNames4: ["2"],
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
</style>
