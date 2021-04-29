<template>
  <div class="container">
    <div class="box">
      <div class="box-left">
        <div class="box-left-title">
          <span class="left-title">个人中心</span>
        </div>
        <div class="option-container">
          <el-button class="option-button"><i class="el-icon-user"></i> 基本信息</el-button>
        </div>
        <div>
          <el-button class="option-button"><i class="el-icon-monitor"></i> 我的订阅</el-button>
        </div>
        <div>
          <el-button class="option-button"><i class="el-icon-message"></i> 我的消息</el-button>
        </div>
        <div>
          <el-button class="option-button"><i class="el-icon-cloudy"></i> 我的历史</el-button>
        </div>
      </div>
      <div class="box-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'member',
  data() {
    return {
      form: [],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 40px 0 0 8vw;
}
.box {
  display: flex;
  margin-top: 15px;
}
.box-left {
  width: 180px;
  min-width: 180px;
  background-color: white;
  border-right: 2px solid #f6f6f6;
}
.box-left-title {
  text-align: center;
  padding-top: 12px;
  padding-bottom: 20px;
}
.left-title {
  position: relative;
}
.left-title:before {
  content: '';
  width: 20px;
  height: 4px;
  position: absolute;
  top: 100%;
  left: 38%;
  background-color: lightskyblue;
}
.box-right {
  width: 680px;
  min-width: 680px;
  height: 1000px  ;
  background-color: white;
  padding: 30px;
}
.option-button {
  width: 180px;
  border: 0;
  border-radius: 0;
  text-align: left;
}
.option-container {
  position: relative;
  background-color: rgba(235,243,255,1);
}
.option-container:before {
  content: '';
  width: 3px;
  height: 38px;
  position: absolute;
  background-color: lightskyblue;
}
</style>
