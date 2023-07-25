<template>
  <div class="contact-card">
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
      <!-- 添加联系人 -->
      <div style="color: #666666; margin: 0.5rem">添加联系人</div>
      <van-contact-card type="add" @click="onAdd()" />
      <!-- 编辑联系人 -->
      <div style="color: #666666; margin: 0.5rem">编辑联系人</div>
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="onEdit()"
      />
      <!-- 不可编辑 -->
      <div style="color: #666666; margin: 0.5rem">不可编辑</div>
      <van-contact-card
        type="edit"
        name="张三"
        tel="13000000000"
        :editable="false"
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
      currentContact: {
        name: "张三",
        tel: "13000000000",
      },
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onAdd() {
      this.$toast("添加联系人");
    },
    onEdit() {
      this.$toast("编辑联系人");
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
