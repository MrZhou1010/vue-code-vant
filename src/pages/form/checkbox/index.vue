<template>
  <div class="checkbox">
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
      <van-checkbox class="item-checkbox" v-model="checked1"
        >复选框</van-checkbox
      >
      <!-- 禁用状态 -->
      <div style="color: #666666">禁用状态</div>
      <van-checkbox class="item-checkbox" v-model="checked1" disabled
        >复选框</van-checkbox
      >
      <van-checkbox class="item-checkbox" v-model="checked2" disabled
        >复选框</van-checkbox
      >
      <!-- 自定义形状 -->
      <div style="color: #666666">自定义形状</div>
      <van-checkbox class="item-checkbox" v-model="checked3" shape="square"
        >自定义形状</van-checkbox
      >
      <!-- 自定义颜色 -->
      <div style="color: #666666">自定义颜色</div>
      <van-checkbox
        class="item-checkbox"
        v-model="checked4"
        checked-color="#ee0a24"
        >自定义颜色</van-checkbox
      >
      <!-- 自定义大小 -->
      <div style="color: #666666">自定义大小</div>
      <van-checkbox class="item-checkbox" v-model="checked5" icon-size="24px"
        >自定义大小</van-checkbox
      >
      <!-- 自定义图标 -->
      <div style="color: #666666">自定义图标</div>
      <van-checkbox class="item-checkbox" v-model="checked6">
        自定义图标
        <template #icon="props">
          <img
            class="checkbox-icon"
            :src="props.checked ? activeIcon : inactiveIcon"
          />
        </template>
      </van-checkbox>
      <!-- 文本位置 -->
      <div style="color: #666666">文本位置</div>
      <van-checkbox
        class="item-checkbox"
        v-model="checked7"
        label-position="left"
        >文本位置</van-checkbox
      >
      <!-- 禁用文本点击 -->
      <div style="color: #666666">禁用文本点击</div>
      <van-checkbox class="item-checkbox" v-model="checked7" label-disabled
        >禁用文本点击</van-checkbox
      >
      <!-- 复选框组 -->
      <div style="color: #666666">复选框组</div>
      <van-checkbox-group v-model="result1">
        <van-checkbox class="item-checkbox" name="a1">复选框 a</van-checkbox>
        <van-checkbox class="item-checkbox" name="b1">复选框 b</van-checkbox>
      </van-checkbox-group>
      <!-- 水平排列 -->
      <div style="color: #666666">水平排列</div>
      <van-checkbox-group v-model="result2" direction="horizontal">
        <van-checkbox class="item-checkbox" name="a2">复选框 a</van-checkbox>
        <van-checkbox class="item-checkbox" name="b2">复选框 b</van-checkbox>
      </van-checkbox-group>
      <!-- 限制最大可选数 -->
      <div style="color: #666666">限制最大可选数</div>
      <van-checkbox-group v-model="result3" :max="2">
        <van-checkbox class="item-checkbox" name="a3">复选框 a</van-checkbox>
        <van-checkbox class="item-checkbox" name="b3">复选框 b</van-checkbox>
        <van-checkbox class="item-checkbox" name="c3">复选框 c</van-checkbox>
      </van-checkbox-group>
      <!-- 全选与反选 -->
      <div style="color: #666666">全选与反选</div>
      <van-checkbox-group v-model="result4" ref="checkboxGroup">
        <van-checkbox class="item-checkbox" name="a4">复选框 a</van-checkbox>
        <van-checkbox class="item-checkbox" name="b4">复选框 b</van-checkbox>
        <van-checkbox class="item-checkbox" name="c4">复选框 c</van-checkbox>
      </van-checkbox-group>
      <van-button class="item-btn" type="primary" @click="selectedAll()"
        >全选</van-button
      >
      <van-button class="item-btn" type="info" @click="toggleAll()"
        >反选</van-button
      >
      <van-button class="item-btn" type="info" @click="unSelectedAll()"
        >全不选</van-button
      >
      <!-- 搭配单元格组件使用 -->
      <div style="color: #666666">搭配单元格组件使用</div>
      <van-checkbox-group v-model="result5">
        <!-- <van-cell-group> -->
        <van-cell
          v-for="(item, index) in list"
          clickable
          :key="item"
          :title="`复选框 ${item}`"
          @click="toggle(index)"
        >
          <template #right-icon>
            <van-checkbox :name="item" ref="checkboxes" />
          </template>
        </van-cell>
        <!-- </van-cell-group> -->
      </van-checkbox-group>
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
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      result1: [],
      result2: [],
      result3: [],
      result4: [],
      result5: [],
      activeIcon: "https://img01.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img01.yzcdn.cn/vant/user-inactive.png",
      list: ["a", "b", "c"],
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    selectedAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    unSelectedAll() {
      this.$refs.checkboxGroup.toggleAll(false);
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.item-checkbox {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.item-btn {
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.checkbox-icon {
  height: 20px;
}
</style>
