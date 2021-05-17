<template>
  <div class="container">
    <div>
      <el-avatar :src="inform.avatar" class="user-avatar"></el-avatar>
    </div>
    <div class="inform">
      <span class="user-nick">{{inform.nickname}}</span>
      <span class="user-account">{{inform.account}}</span>
      <span class="user-email">({{inform.email}})</span>
      <span class="user-gender">男</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subscribeInform',
  props: {
    inform: {},
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: white;
  position: relative;
  display: flex;
}
.container:after {
  content: '';
  width: 90%;
  height: 1px;
  position: absolute;
  background-color: #d3dce6;
  left: 40px;
  top: 95%;
}
.user-avatar {
  width: 60px;
  height: 60px;
}
.inform {
  margin: 20px 0 0 20px;
  align-items: baseline;
}
.user-account {
  margin-left: 20px;
  font-size: 12px;
}
.user-email {
  font-size: 12px;
  color: #9999AA;
}
.user-gender {
  margin-left: 20px;
  font-size: 12px;
}
</style>
