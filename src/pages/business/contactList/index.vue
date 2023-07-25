<template>
  <div class="contact-list">
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
      <van-contact-list
        v-model="chosenContactId"
        :list="dataList"
        default-tag-text="默认"
        add-text="新建联系人"
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
      chosenContactId: "",
      dataList: [],
    };
  },
  computed: {
    ...mapState({
      contactInfoList: (state) => state.home.contactInfoList,
    }),
  },
  created() {
    this.title = this.$route.query.title;
    if (this.contactInfoList.length > 0) {
      this.dataList = this.contactInfoList;
    }
  },
  methods: {
    ...mapMutations({
      setContactInfoList: "setContactInfoList",
    }),
    goBack() {
      this.$router.goBack();
    },
    onAdd() {
      this.$toast("添加联系人");
      this.$router.togo("/contact-edit", {
        title: "ContactEdit 联系人编辑",
      });
    },
    onEdit(contact, index) {
      this.$toast("编辑联系人信息:" + index);
      this.$router.togo("/contact-edit", {
        title: "ContactEdit 联系人编辑",
        contact: contact,
      });
    },
    onSelect(contact, index) {
      this.$toast("编辑联系人信息:" + index);
      this.$router.togo("/contact-edit", {
        title: "ContactEdit 联系人编辑",
        contact: contact,
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
