<template>
  <div>
    <div class="title">全部分类</div>
    <div class="box">
      <el-button v-for="item in 24" :key="item" class="program">
        <img src="http://121.196.174.189:8080/static/resources/1.png"
             onclick='window.open("http://www.baidu.com")'
             alt=""
             class="image">
        <div class="name">英雄联盟</div>
      </el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sort',
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 24px;
  margin: 10px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.program {
  background-color: #FFFFFF;
  width: 200px;
  height: 200px;
  margin: 40px;
  border-radius: 5px;
  text-align: center;
}
.image {
  width: 130px;
  height: 130px;
}
.program:hover {
  box-shadow:1px 1px 1px 1px #aaa;
  color: lightskyblue;
}
.name {
}
</style>
