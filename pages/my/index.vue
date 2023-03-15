<template>
  <view class="">
    <SoumnsNavbar isShowBack="true" size="24" :imgSrc="imgUrl" />
  </view>
</template>

<script>
import SoumnsNavbar from '@/components/SoumnsNavbar.vue';
import { INIT_USER_MSG } from '@/store/modules/user/constant.js';

export default {
  name: 'my',
  components: {
    SoumnsNavbar
  },
  onShow() {
    this.$store.commit(`User/${INIT_USER_MSG}`, {
      name: 'iu',
      age: '22',
      gender: 'female'
    });
    console.log('💙💛vuex:', this.$store.state.User.user);
  },
  data() {
    return {
      // imgUrl: require('@/static/uploads/bg_home.png')
    };
  }
};
</script>

<style></style>
