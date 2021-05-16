<template>
  <el-button type="text" class="button" @click="to">{{ inform.name }}</el-button>
</template>

<script>
import cookies from 'js-cookie';

export default {
  name: 'headerButtonAnchor',
  data() {
    return {
      user_data: {},
    };
  },
  methods: {
    to() {
      if (this.inform.type === '/list') {
        this.$router.push(this.inform.type);
      } else if (cookies.get('user_data') === undefined) {
        this.$message.error('请先登录！');
      } else if (this.inform.type === '/anchor/room') {
        this.user_data = JSON.parse(cookies.get('user_data')).user;
        if (this.user_data.anchor === null) {
          return;
        }
        this.$router.push({ path: '/anchor/room', query: { roomNumber: this.user_data.anchor.roomNumber } });
      } else {
        this.$router.push(this.inform.type);
      }
    },
  },
  props: {
    inform: {},
  },
};
</script>

<style scoped>
  .button {
    width: 60px;
    margin: 10px;
    border-radius: 25px;
    font-size: 16px;
    color: lightslategray;
  }
  .button:hover {
    background-color: cornflowerblue;
    color: aliceblue;
  }
</style>
