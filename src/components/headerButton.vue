<template>
  <el-button type="text" class="button" @click="to">{{ inform.name }}</el-button>
</template>

<script>
export default {
  name: 'headerButton',
  methods: {
    to() {
      this.$router.push({ name: this.inform.type });
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
