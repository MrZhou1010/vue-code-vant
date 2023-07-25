<template>
  <div class="contact-edit">
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
      <van-contact-edit
        show-set-default
        :is-edit="isEdit"
        :is-saving="isSaving"
        :is-deleting="isDeleting"
        :contact-info="contactInfo"
        set-default-label="设为默认联系人"
        @save="onSave"
        @delete="onDelete"
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
      isEdit: false,
      isSaving: false,
      isDeleting: false,
      contactInfo: {},
    };
  },
  computed: {
    ...mapState({
      contactInfoList: (state) => state.home.contactInfoList,
    }),
  },
  created() {
    this.title = this.$route.query.title;
    if (this.$route.query.contact) {
      this.isEdit = true;
      this.contactInfo = this.$route.query.contact;
    }
  },
  methods: {
    ...mapMutations({
      setContactInfoList: "setContactInfoList",
    }),
    goBack() {
      this.$router.goBack();
    },
    onSave(contact) {
      if (this.isDeleting) {
        return;
      }
      this.isSaving = true;
      setTimeout(() => {
        console.log("表单内容:", contact);
        let tempContactInfoList = this.contactInfoList;
        if (this.$route.query.contact) {
          tempContactInfoList.forEach((contactInfo, index) => {
            if (contactInfo.id == this.$route.query.contact.id) {
              tempContactInfoList[index] = contact;
            }
          });
        } else {
          contact.id = tempContactInfoList.length + 1;
          tempContactInfoList.push(contact);
        }
        this.setContactInfoList(tempContactInfoList);
        this.isSaving = false;
        this.$toast("保存");
        this.$router.goBack();
      }, 2000);
    },
    onDelete(contact) {
      if (this.isSaving) {
        return;
      }
      this.isDeleting = true;
      setTimeout(() => {
        console.log("表单内容:", contact);
        let tempContactInfoList = this.contactInfoList;
        if (this.$route.query.contact) {
          tempContactInfoList.forEach((contactInfo, index) => {
            if (contactInfo.id == this.$route.query.contact.id) {
              tempContactInfoList.splice(index, 1);
            }
          });
        }
        this.setContactInfoList(tempContactInfoList);
        this.isDeleting = false;
        this.$toast("删除");
        this.$router.goBack();
      }, 2000);
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
