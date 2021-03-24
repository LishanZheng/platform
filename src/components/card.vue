<template>
  <div class="card">
    <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" class="image"></el-image>
    <div class="intro">
      <el-button type="text" class="title">直播间的大标题</el-button>
      <div class="subhead">
        <el-avatar icon="el-icon-user-solid" class="avatar" size="small"></el-avatar>
        <span class="name">蒙三特斯</span>
        <div class="quantity">
          <i class="el-icon-user">10.3万</i>
        </div>
        <el-button type="text" class="type">英雄联盟</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  methods: {
    test() {
      this.console.log('test');
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #d3dce6;
  height: 210px;
  width: 300px;
  margin: 10px 10px 15px 10px;
  border-radius: 4px;
}
.image {
  border-radius: 4px 4px 0 0;
  height: 150px;
}
.intro {
  margin-left: 20px;
}
.title {
  text-align: left;
  color: #475669;
  padding: 0;
  font-size: 15px;
}
.title:hover {
  color: steelblue;
}
.subhead {
  display: flex;
  color: gray;
  align-items: baseline;
}
.avatar {
  width: 23px;
  height: 23px;
}
.name {
  font-size: 13px;
  margin-left: 2px;
  width: 60px;
}
.quantity {
  margin-left: 78px;
  text-align: right;
  font-size: 12px;
}
.type {
  margin-left: 12px;
  font-size: 12px;
}
</style>
