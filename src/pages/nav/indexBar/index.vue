<template>
  <div class="index-bar">
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
      <van-tabs>
        <van-tab title="基础用法">
          <div class="tab-content">
            <van-index-bar ref="indexBar">
              <div v-for="anchor in anchorList" :key="anchor">
                <van-index-anchor :index="anchor" />
                <van-cell v-for="index in 6" :key="index">
                  {{ anchor }}-文本-{{ index }}
                </van-cell>
              </div>
            </van-index-bar>
          </div>
        </van-tab>
        <van-tab title="自定义索引列表">
          <div class="tab-content">
            <van-index-bar :index-list="indexList" highlight-color="#00ae7e">
              <div v-for="anchor in indexList" :key="anchor">
                <van-index-anchor :index="anchor">
                  标题-{{ anchor }}
                </van-index-anchor>
                <van-cell v-for="index in 6" :key="index">
                  {{ anchor }}-文本-{{ index }}
                </van-cell>
              </div>
            </van-index-bar>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      anchorList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
      ],
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  mounted() {
    // v-if中的ref直接获取会返回undefined 需要放到this.$nextTick()调用
    this.$nextTick(() => {
      this.$refs.indexBar.scrollTo("A");
    });
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
  },
};
</script>

<style lang="less" scoped>
// @import "~styles/common.less";

.content {
  position: fixed;
  top: 2.75rem;
  left: 0;
  width: 100%;
  height: calc(100% - 2.75rem);
}

.van-tabs {
  position: relative;
  height: 100%;

  /deep/ .van-tabs__nav {
    background-color: #f8f8f8;
  }

  /deep/ .van-tabs__content {
    height: calc(100% - 44px);

    .van-tab__pane {
      height: 100%;

      .tab-content {
        height: 100%;
        text-align: left;
        overflow-y: auto;

        .van-pull-refresh {
          height: 100%;
          overflow-y: auto;
        }
      }
    }
  }
}
</style>
