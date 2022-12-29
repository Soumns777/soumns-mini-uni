<!-- 
    @desc 自定义获取用户头像和昵称组件
 -->

<template>
  <view class="container">
    <view class="container-user-photo">
      <u--image
        src="/static/uploads/default.jpeg"
        mode="widthFix"
        width="66px"
        height="66px"
        v-if="isShowDefault"
      ></u--image>

      <u-image
        :src="avatar"
        width="66px"
        height="66px"
        mode="widthFix"
        v-else
      ></u-image>

      <button
        open-type="chooseAvatar"
        @chooseavatar="chooseAvatar"
        class="user-custom-photo"
      ></button>
    </view>

    <u--input
      type="nickname"
      placeholder="请输入内容"
      border="surround"
      v-model="nickName"
      class="user-input"
    ></u--input>

    <button @click="confirm" class="soumns-submit-btn">确认</button>
  </view>
</template>

<script>
export default {
  name: 'SoumnsUserMsg',
  data() {
    return {
      isShowDefault: true,
      avatar: '',
      nickName: ''
    };
  },

  mounted() {},
  methods: {
    chooseAvatar(e) {
      this.isShowDefault = false;
      this.avatar = e.detail.avatarUrl;
    },

    onNickName(e) {
      console.log('💙💛 昵称:', e);
    },

    confirm() {
      console.log('💙💛 确认:');
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;

  .container-user-photo {
    margin: 40px auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .user-custom-photo {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 132rpx;
      height: 132rpx;
      transform: translate(-50%, -50%);
      z-index: 999;
      opacity: 0;
    }
  }

  .soumns-submit-btn {
    width: 90%;
    height: 40px;
    margin-top: 40rpx;
    border-radius: 40rpx;
    color: #fff;
    background-color: #ea3993;
  }
}
</style>
