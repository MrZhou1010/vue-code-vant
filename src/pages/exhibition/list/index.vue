<template>
  <div class="list">
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
        <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab">
          <div class="tab-content" v-if="index === 0">
            <van-list
              v-model="isLoading1"
              :finished="finished1"
              finished-text="没有更多了"
              @load="onLoad1"
            >
              <van-cell v-for="item in dataList1" :key="item" :title="item" />
            </van-list>
          </div>
          <div class="tab-content" v-if="index === 1">
            <van-list
              v-model="isLoading2"
              :error.sync="error"
              :finished="finished2"
              error-text="请求失败点击重新加载"
              finished-text="没有更多了"
              @load="onLoad2"
            >
              <van-cell v-for="item in dataList2" :key="item" :title="item" />
            </van-list>
          </div>
          <div class="tab-content" v-if="index === 2">
            <van-pull-refresh v-model="isRefreshing" @refresh="onRefresh">
              <van-list
                v-model="isLoading3"
                :finished="finished3"
                finished-text="没有更多了"
                @load="onLoad3"
              >
                <van-cell v-for="item in dataList3" :key="item" :title="item" />
              </van-list>
            </van-pull-refresh>
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
      tabs: ["基础用法", "错误提示", "下拉刷新"],
      dataList1: [],
      dataList2: [],
      dataList3: [],
      isLoading1: false,
      isLoading2: false,
      isLoading3: false,
      isRefreshing: false,
      finished1: false,
      finished2: false,
      finished3: false,
      error: false,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onLoad1() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.dataList1.push(this.dataList1.length + 1);
        }
        // 加载状态结束
        this.isLoading1 = false;
        // 数据全部加载完成
        if (this.dataList1.length >= 40) {
          this.finished1 = true;
        }
      }, 1000);
    },
    onLoad2() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.dataList2.push(this.dataList2.length + 1);
        }
        // 加载状态结束
        this.isLoading2 = false;
        // 数据加载失败
        if (this.dataList2.length == 20) {
          this.error = true;
        }
        // 数据全部加载完成
        if (this.dataList2.length >= 40) {
          this.finished2 = true;
        }
      }, 1000);
    },
    onLoad3() {
      setTimeout(() => {
        if (this.isRefreshing) {
          this.dataList3 = [];
          this.isRefreshing = false;
        }
        for (let i = 0; i < 10; i++) {
          this.dataList3.push(this.dataList3.length + 1);
        }
        // 加载状态结束
        this.isLoading3 = false;
        // 数据全部加载完成
        if (this.dataList3.length >= 40) {
          this.finished3 = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished3 = false;
      // 重新加载数据
      this.isLoading3 = true;
      // 重新加载
      this.onLoad3();
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
        text-align: center;
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
