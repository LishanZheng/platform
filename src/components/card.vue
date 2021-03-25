<template>
  <div class="card">
    <el-button class="image">
      <img :src="inform.src" class="image" alt="">
    </el-button>
    <div class="intro">
      <el-button type="text" class="title">{{ inform.title }}</el-button>
      <div class="subhead">
        <el-avatar icon="el-icon-user-solid" class="avatar" size="small"></el-avatar>
        <span class="name">{{ inform.name }}</span>
        <div class="quantity">
          <i class="el-icon-user">{{ inform.quantity }}</i>
        </div>
        <el-button type="text" class="type">{{ inform.type }}</el-button>
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
  props: {
    inform: {},
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
  width: 300px;
  border: 0;
  padding: 0;
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
  width: 100px;
}
.quantity {
  margin-left: 38px;
  text-align: right;
  font-size: 12px;
}
.type {
  margin-left: 12px;
  font-size: 12px;
}
</style>
