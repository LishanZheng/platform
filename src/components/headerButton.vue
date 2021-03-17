<template>
  <el-button type="text" class="button">{{ inform.name }}</el-button>
</template>

<script>
export default {
  name: 'headerButton',
  props: {
    inform: [],
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
