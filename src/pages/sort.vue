<template>
  <div>
    <div class="title">全部分类</div>
    <div class="box">
      <el-button v-for="(item, index) in sortList" :key="index" class="program">
        <img :src=item.src
             alt=""
             @click="to(item.type)"
             class="image">
        <div class="name">{{ item.name }}</div>
      </el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sort',
  methods: {
    to(type) {
      this.$router.push({ name: 'list', query: { type } });
    },
  },
  data() {
    return {
      sortList: [{
        name: '英雄联盟',
        type: '英雄联盟',
        src: 'https://huyaimg.msstatic.com/cdnimage/game/1-MS.png',
      }, {
        name: '穿越火线',
        type: '穿越火线',
        src: 'https://huyaimg.msstatic.com/cdnimage/game/4-MS.png',
      }],
    };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 24px;
  margin: 0 10px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.program {
  width: 180px;
  height: 180px;
  margin: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  background-color: rgba(235,243,255,1);
}
.program:hover {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  color: cornflowerblue;
  background-color: white;
}
.image {
  width: 130px;
  height: 130px;
}
</style>
