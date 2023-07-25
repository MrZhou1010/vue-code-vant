<template>
  <div class="address-edit">
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
      <van-address-edit
        show-area
        show-detail
        show-postal
        show-set-default
        show-search-result
        :address-info="addressInfo"
        :area-list="areaList"
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        :detail-rows="2"
        :detail-maxlength="20"
        :tel-maxlength="11"
        :disable-area="false"
        :is-saving="isSaving"
        :is-deleting="isDeleting"
        :show-delete="showDelete"
        area-placeholder="选择省>市>区"
        save-button-text="保存"
        delete-button-text="删除"
        @save="onSave"
        @delete="onDelete"
        @cancel-delete="onCancelDelete"
        @change-detail="onChangeDetail"
        @select-search="onSelectSearch"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { areaList } from "@vant/area-data";

export default {
  name: "",
  data() {
    return {
      title: "",
      showDelete: false,
      isSaving: false,
      isDeleting: false,
      addressInfo: {},
      areaList: areaList,
      searchResult: [],
    };
  },
  computed: {
    ...mapState({
      addressList: (state) => state.home.addressList,
    }),
  },
  created() {
    this.title = this.$route.query.title;
    if (this.$route.query.address) {
      this.showDelete = true;
      this.addressInfo = this.$route.query.address;
      this.addressInfo.addressDetail = this.addressInfo.address;
    }
  },
  methods: {
    ...mapMutations({
      setAddressList: "setAddressList",
    }),
    goBack() {
      this.$router.goBack();
    },
    onSave(content) {
      if (this.isDeleting) {
        return;
      }
      this.isSaving = true;
      setTimeout(() => {
        console.log("表单内容:", content);
        let tempAddressList = this.addressList;
        if (this.$route.query.address) {
          tempAddressList.forEach((address, index) => {
            if (address.id == this.$route.query.address.id) {
              tempAddressList[index] = content;
            }
          });
        } else {
          content.id = tempAddressList.length + 1;
          tempAddressList.push(content);
        }
        this.setAddressList(tempAddressList);
        this.isSaving = false;
        this.$toast("保存");
        this.$router.goBack();
      }, 2000);
    },
    onDelete(content) {
      if (this.isSaving) {
        return;
      }
      this.isDeleting = true;
      setTimeout(() => {
        console.log("表单内容:", content);
        let tempAddressList = this.addressList;
        if (this.$route.query.address) {
          tempAddressList.forEach((address, index) => {
            if (address.id == this.$route.query.address.id) {
              tempAddressList.splice(index, 1);
            }
          });
        }
        this.setAddressList(tempAddressList);
        this.isDeleting = false;
        this.$toast("删除");
        this.$router.goBack();
      }, 2000);
    },
    onCancelDelete(content) {
      console.log("表单内容:", content);
    },
    onChangeDetail(value) {
      console.log("搜索内容:", value);
      if (!value) {
        return (this.searchResult = []);
      }
      this.searchResult = [
        {
          name: "**万科中心A栋",
          address: "**市西湖区",
        },
        {
          name: "**万科中心B栋",
          address: "**市西湖区",
        },
      ];
    },
    onSelectSearch(value) {
      console.log("选择的搜索内容:", value);
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
