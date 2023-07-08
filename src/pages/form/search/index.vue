<template>
  <div class="search">
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
      <van-search
        class="item-search"
        v-model="value1"
        placeholder="请输入搜索关键词"
      />
      <!-- 事件监听 -->
      <div style="color: #666666">事件监听</div>
      <form action="/">
        <van-search
          class="item-search"
          v-model="value2"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      <!-- 搜索框内容对齐 -->
      <div style="color: #666666">搜索框内容对齐</div>
      <van-search
        class="item-search"
        v-model="value3"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
      <!-- 禁用搜索框 -->
      <div style="color: #666666">禁用搜索框</div>
      <van-search
        class="item-search"
        v-model="value4"
        placeholder="请输入搜索关键词"
        disabled
      />
      <!-- 是否将输入框设为只读 -->
      <div style="color: #666666">是否将输入框设为只读</div>
      <van-search
        class="item-search"
        v-model="value5"
        placeholder="请输入搜索关键词"
        readonly
      />
      <!-- 自定义背景色 -->
      <div style="color: #666666">自定义背景色</div>
      <van-search
        class="item-search"
        v-model="value6"
        placeholder="请输入搜索关键词"
        shape="round"
        background="#4fc08d"
      />
      <!-- 自定义按钮 -->
      <div style="color: #666666">自定义按钮</div>
      <van-search
        class="item-search"
        v-model="value7"
        label="地址"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch(value7)">搜索</div>
        </template>
      </van-search>
      <!-- 输入的最大字符数 -->
      <div style="color: #666666">输入的最大字符数</div>
      <van-search
        class="item-search"
        v-model="value8"
        placeholder="请输入搜索关键词"
        :maxlength="10"
      />
      <!-- 是否启用清除图标 -->
      <div style="color: #666666">是否启用清除图标</div>
      <van-search
        class="item-search"
        v-model="value9"
        placeholder="请输入搜索关键词"
        :clearable="false"
      />
      <!-- 是否将输入内容标红 -->
      <div style="color: #666666">是否将输入内容标红</div>
      <van-search
        class="item-search"
        v-model="value10"
        placeholder="请输入搜索关键词"
        error
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onSearch(value) {
      this.$toast(value);
    },
    onCancel() {
      this.$toast("取消");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.item-search {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
