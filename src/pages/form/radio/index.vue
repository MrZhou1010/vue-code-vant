<template>
  <div class="radio">
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
      <van-radio-group v-model="radio1">
        <van-radio class="item-radio" name="1">单选框 1</van-radio>
        <van-radio class="item-radio" name="2">单选框 2</van-radio>
      </van-radio-group>
      <!-- 水平排列 -->
      <div style="color: #666666">水平排列</div>
      <van-radio-group v-model="radio2" direction="horizontal">
        <van-radio class="item-radio" name="1">单选框 1</van-radio>
        <van-radio class="item-radio" name="2">单选框 2</van-radio>
      </van-radio-group>
      <!-- 禁用状态 -->
      <div style="color: #666666">禁用状态</div>
      <van-radio-group v-model="radio3" disabled>
        <van-radio class="item-radio" name="1">单选框 1</van-radio>
        <van-radio class="item-radio" name="2">单选框 2</van-radio>
      </van-radio-group>
      <!-- 自定义形状 -->
      <div style="color: #666666">自定义形状</div>
      <van-radio-group v-model="radio4">
        <van-radio class="item-radio" name="1" shape="square"
          >单选框 1</van-radio
        >
        <van-radio class="item-radio" name="2" shape="square"
          >单选框 2</van-radio
        >
      </van-radio-group>
      <!-- 自定义颜色 -->
      <div style="color: #666666">自定义颜色</div>
      <van-radio-group v-model="radio5">
        <van-radio class="item-radio" name="1" checked-color="#ee0a24"
          >单选框 1</van-radio
        >
        <van-radio class="item-radio" name="2" checked-color="#ee0a24"
          >单选框 2</van-radio
        >
      </van-radio-group>
      <!-- 自定义大小 -->
      <div style="color: #666666">自定义大小</div>
      <van-radio-group v-model="radio6">
        <van-radio class="item-radio" name="1" icon-size="24px"
          >单选框 1</van-radio
        >
        <van-radio class="item-radio" name="2" icon-size="24px"
          >单选框 2</van-radio
        >
      </van-radio-group>
      <!-- 自定义图标 -->
      <div style="color: #666666">自定义图标</div>
      <van-radio-group v-model="radio7">
        <van-radio class="item-radio" name="1">
          单选框 1
          <template #icon="props">
            <img
              class="radio-icon"
              :src="props.checked ? activeIcon : inactiveIcon"
            />
          </template>
        </van-radio>
        <van-radio class="item-radio" name="2">
          单选框 2
          <template #icon="props">
            <img
              class="radio-icon"
              :src="props.checked ? activeIcon : inactiveIcon"
            />
          </template>
        </van-radio>
      </van-radio-group>
      <!-- 禁用文本点击 -->
      <div style="color: #666666">禁用文本点击</div>
      <van-radio-group v-model="radio8">
        <van-radio class="item-radio" name="1" label-disabled
          >单选框 1</van-radio
        >
        <van-radio class="item-radio" name="2" label-disabled
          >单选框 2</van-radio
        >
        <van-radio class="item-radio" name="3" disabled>单选框 3</van-radio>
      </van-radio-group>
      <!-- 与 Cell 组件一起使用 -->
      <div style="color: #666666">与 Cell 组件一起使用</div>
      <van-radio-group v-model="radio9">
        <!-- <van-cell-group> -->
        <van-cell title="单选框 1" clickable @click="radio9 = '1'">
          <template #right-icon>
            <van-radio name="1"></van-radio>
          </template>
        </van-cell>
        <van-cell title="单选框 2" clickable @click="radio9 = '2'">
          <template #right-icon>
            <van-radio name="2"></van-radio>
          </template>
        </van-cell>
        <van-cell title="单选框 3" clickable @click="radio9 = '3'">
          <template #right-icon>
            <van-radio name="3"></van-radio>
          </template>
        </van-cell>
        <!-- </van-cell-group> -->
      </van-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      radio1: "1",
      radio2: "2",
      radio3: "1",
      radio4: "2",
      radio5: "1",
      radio6: "2",
      radio7: "1",
      radio8: "2",
      radio9: "1",
      activeIcon: "https://img01.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img01.yzcdn.cn/vant/user-inactive.png",
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

.item-radio {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.radio-icon {
  height: 20px;
}

.van-cell {
  background-color: #f8f8f8;
}
</style>
