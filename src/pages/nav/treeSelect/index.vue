<template>
  <div class="tree-select">
    <van-nav-bar
      style="background-color: lightblue"
      left-arrow
      fixed
      border
      safe-area-inset-top
      :title="title"
      :z-index="101"
      @click-left="goBack()"
    >
    </van-nav-bar>
    <div class="content">
      <!-- 单选模式 -->
      <div style="color: #666666; margin: 10px">单选模式</div>
      <van-tree-select
        :items="items1"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex1"
      />
      <!-- 多选模式 -->
      <div style="color: #666666; margin: 10px">多选模式</div>
      <van-tree-select
        :items="items2"
        :active-id.sync="activeIds"
        :main-active-index.sync="activeIndex2"
      />
      <!-- 徽标提示 -->
      <div style="color: #666666; margin: 10px">徽标提示</div>
      <van-tree-select
        height="55vw"
        :items="items3"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex3"
      />
      <!-- 自定义右侧栏选中状态的图标 -->
      <div style="color: #666666; margin: 10px">自定义右侧栏选中状态的图标</div>
      <van-tree-select
        height="55vw"
        selected-icon="sign"
        :items="items4"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex4"
      />
      <!-- 自定义内容 -->
      <div style="color: #666666; margin: 10px">自定义内容</div>
      <van-tree-select
        height="60vw"
        :items="items5"
        :main-active-index.sync="activeIndex5"
      >
        <template #content>
          <van-image
            v-if="activeIndex5 === 0"
            src="https://img01.yzcdn.cn/vant/apple-1.jpg"
          />
          <van-image
            v-if="activeIndex5 === 1"
            src="https://img01.yzcdn.cn/vant/apple-2.jpg"
          />
          <van-image
            v-if="activeIndex5 === 2"
            src="https://img01.yzcdn.cn/vant/apple-3.jpg"
          />
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      items1: [],
      items2: [],
      items3: [],
      items4: [],
      items5: [],
      activeIds: [],
      activeId: 0,
      activeIndex1: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      activeIndex4: 0,
      activeIndex5: 0,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  mounted() {
    const tempItems = [
      {
        text: "湖北", // 导航名称
        disabled: false, // 禁用选项
        children: [
          {
            id: 11, // id作为匹配选中状态的标识符
            text: "武汉",
          },
          {
            id: 12,
            disabled: true,
            text: "黄冈",
          },
          {
            id: 13,
            text: "十堰",
          },
          {
            id: 14,
            text: "宜昌",
          },
        ], // 该导航下所有的可选项
      },
      {
        text: "浙江",
        disabled: true,
        children: [
          {
            id: 21,
            text: "杭州",
          },
          {
            id: 22,
            text: "温州",
          },
        ],
      },
      {
        text: "江苏",
        children: [
          {
            id: 31,
            text: "南京",
          },
          {
            id: 32,
            text: "苏州",
          },
          {
            id: 33,
            text: "无锡",
          },
        ],
      },
    ];
    this.items1 = JSON.parse(JSON.stringify(tempItems));
    this.items2 = JSON.parse(JSON.stringify(tempItems));
    this.items4 = JSON.parse(JSON.stringify(tempItems));
    this.items5 = JSON.parse(JSON.stringify(tempItems));
    tempItems[0].dot = true;
    tempItems[1].badge = 6;
    tempItems[2].badge = "9+";
    this.items3 = JSON.parse(JSON.stringify(tempItems));
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
  padding: 0.625rem 0;
}
</style>
