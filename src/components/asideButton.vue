<template>
  <div class="container">
    <div>
      <el-button type="text" :icon="inform.icon" class="button">
        {{ inform.name }}
      </el-button>
      <div v-if="inform.child" class="child-container">
        <el-button v-for="(item, index) in inform.child"
                   :key="index"
                   type="text"
                   class="child-button">{{ item }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'asideButton',
  data() {
    return {};
  },
  props: {
    inform: [],
  },
};
</script>

<style scoped>
.button {
  color: whitesmoke;
  margin: 10px 0 0 20px;
  font-size: 18px;
}
.button:hover {
  color: skyblue;
}
.child-container {
  margin: 4px;
}
.child-button {
  width: 55px;
  height: 30px;
  background-color: rgba(235,243,255,0.1);
  border-radius: 3px;
  color: whitesmoke;
  margin: 2px 3px;
}
.child-button:hover {
  color: skyblue;
}
</style>
