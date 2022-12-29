<template>
  <view class="">
    <SoumnsNavbar isShowBack="true" size="24" :imgSrc="imgUrl" />
  </view>
</template>

<script>
import SoumnsNavbar from '@/components/SoumnsNavbar.vue';

export default {
  name: 'my',
  components: {
    SoumnsNavbar
  },
  data() {
    return {
      imgUrl: require('@/static/uploads/bg_home.png')
    };
  }
};
</script>

<style></style>
