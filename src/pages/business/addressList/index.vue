<template>
  <div class="address-list">
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
      <!-- 基础用法 -->
      <div style="color: #666666; margin: 10px">基础用法</div>
      <van-address-list
        v-model="chosenAddressId"
        :list="dataList"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        add-button-text="新增地址"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "",
  data() {
    return {
      title: "",
      chosenAddressId: "",
      dataList: [],
      disabledList: [],
    };
  },
  computed: {
    ...mapState({
      addressList: (state) => state.home.addressList,
    }),
  },
  created() {
    this.title = this.$route.query.title;
    if (this.addressList.length > 0) {
      this.dataList = this.addressList.filter((item) => {
        item.address = item.addressDetail;
        if (parseInt(item.id) % 3 !== 0) {
          return item;
        }
      });
      this.disabledList = this.addressList.filter((item) => {
        item.address = item.addressDetail;
        if (parseInt(item.id) % 3 === 0) {
          return item;
        }
      });
    }
  },
  methods: {
    ...mapMutations({
      setAddressList: "setAddressList",
    }),
    goBack() {
      this.$router.goBack();
    },
    onAdd() {
      this.$toast("新增地址");
      this.$router.togo("/address-edit", {
        title: "AddressEdit 地址编辑",
      });
    },
    onEdit(item, index) {
      this.$toast("编辑地址信息:" + index);
      this.$router.togo("/address-edit", {
        title: "AddressEdit 地址编辑",
        address: item,
      });
    },
    onSelect(item, index) {
      this.$toast("编辑地址信息:" + index);
      this.$router.togo("/address-edit", {
        title: "AddressEdit 地址编辑",
        address: item,
      });
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
