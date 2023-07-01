<template>
  <div class="action-sheet">
    <van-nav-bar
      style="background-color: lightblue;"
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
      <div style="color: #666666;">基础用法</div>
      <van-cell class="item-cell" is-link @click="showActionSheet1 = true"
        >基础用法</van-cell
      >
      <van-action-sheet
        v-model="showActionSheet1"
        :actions="actions1"
        @select="onSelect"
      ></van-action-sheet>
      <van-cell class="item-cell" is-link @click="showActionSheet2 = true"
        >展示取消按钮</van-cell
      >
      <van-action-sheet
        v-model="showActionSheet2"
        :actions="actions2"
        cancel-text="取消"
        close-on-click-action
        @cancel="onCancel"
      />
      <van-cell class="item-cell" is-link @click="showActionSheet3 = true"
        >展示顶部标题</van-cell
      >
      <van-action-sheet
        v-model="showActionSheet3"
        :actions="actions3"
        title="顶部标题"
        close-on-click-action
      />
      <van-cell class="item-cell" is-link @click="showActionSheet4 = true"
        >展示描述信息</van-cell
      >
      <van-action-sheet
        v-model="showActionSheet4"
        :actions="actions4"
        title="顶部标题"
        description="这是一段描述信息"
        close-on-click-action
      />
      <van-cell class="item-cell" is-link @click="showActionSheet5 = true"
        >是否显示关闭图标</van-cell
      >
      <van-action-sheet
        v-model="showActionSheet5"
        :actions="actions5"
        title="顶部标题"
        :closeable="false"
        close-on-click-action
      />
      <van-cell class="item-cell" is-link @click="showActionSheet6 = true"
        >动画时长</van-cell
      >
      <van-action-sheet
        v-model="showActionSheet6"
        :actions="actions6"
        duration="2"
        close-on-click-action
      />
      <van-cell class="item-cell" is-link @click="showActionSheet7 = true"
        >是否显示圆角</van-cell
      >
      <van-action-sheet
        v-model="showActionSheet7"
        :actions="actions7"
        :round="false"
        close-on-click-action
      />
      <br />
      <!-- 选项状态 -->
      <div style="color: #666666;">选项状态</div>
      <van-cell class="item-cell" is-link @click="showActionSheet8 = true"
        >选项状态</van-cell
      >
      <van-action-sheet
        v-model="showActionSheet8"
        :actions="actions8"
        cancel-text="取消"
        close-on-click-action
      />
      <br />
      <!-- 自定义面板 -->
      <div style="color: #666666;">自定义面板</div>
      <van-cell class="item-cell" is-link @click="showActionSheet9 = true"
        >自定义面板</van-cell
      >
      <van-action-sheet v-model="showActionSheet9" title="标题">
        <div class="sheet-content">内容</div>
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      showActionSheet1: false,
      showActionSheet2: false,
      showActionSheet3: false,
      showActionSheet4: false,
      showActionSheet5: false,
      showActionSheet6: false,
      showActionSheet7: false,
      showActionSheet8: false,
      showActionSheet9: false,
      actions1: [
        {
          name: "选项一",
        },
        {
          name: "选项二",
        },
        {
          name: "选项三",
        },
      ],
      actions2: [
        {
          name: "选项一",
        },
        {
          name: "选项二",
        },
        {
          name: "选项三",
        },
      ],
      actions3: [
        {
          name: "选项一",
        },
        {
          name: "选项二",
        },
        {
          name: "选项三",
        },
      ],
      actions4: [
        {
          name: "选项一",
          subname: "描述信息一",
        },
        {
          name: "选项二",
        },
        {
          name: "选项三",
          subname: "描述信息三",
        },
      ],
      actions5: [
        {
          name: "选项一",
        },
        {
          name: "选项二",
        },
        {
          name: "选项三",
        },
      ],
      actions6: [
        {
          name: "选项一",
        },
        {
          name: "选项二",
        },
        {
          name: "选项三",
        },
      ],
      actions7: [
        {
          name: "选项一",
        },
        {
          name: "选项二",
        },
        {
          name: "选项三",
        },
      ],
      actions8: [
        {
          name: "着色选项",
          color: "#ee0a24",
        },
        {
          name: "禁用选项",
          disabled: true,
        },
        {
          name: "加载选项",
          loading: true,
        },
      ],
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showActionSheet1 = false;
      this.$toast(item.name);
    },
    onCancel() {
      this.$toast("取消");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.content {
  margin-top: 2.75rem;
  padding: 0.625rem;
  background-color: #f8f8f8;
  text-align: left;
}

.item-cell {
  margin-top: 1rem;
  background-clip: border-box;
  border-radius: 0.625rem;
}

.sheet-content {
  padding: 20px 16px 100px;
}
</style>
