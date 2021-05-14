<template>
  <el-button type="text" class="button" @click="to">{{ inform.name }}</el-button>
</template>

<script>
import cookies from 'js-cookie';

export default {
  name: 'headerButton',
  methods: {
    to() {
      if (cookies.get('user_data') !== undefined) {
        this.$router.push({ name: this.inform.type });
      } else if (this.inform.type === 'subscribe' || this.inform.type === 'member') {
        this.$message.error('请先登录！');
      } else {
        this.$router.push({ name: this.inform.type });
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
