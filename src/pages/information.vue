<template>
  <el-form ref="form" :model="form">
    <el-form-item>
<!--      <div class="title">-->
<!--        <el-icon class="el-icon-user-solid"></el-icon> 基本信息-->
<!--      </div>-->
      <el-divider content-position="left">基本信息</el-divider>
      <div class="inform-header-box">
        <div class="header-box-left">
          <el-avatar shape="square" :size="100" src="http://121.196.174.189:8080/static/resources/1.png"></el-avatar>
        </div>
        <div class="header-box-right">
          <div class="inform-nickname">用户昵称</div>
          <div class="inform-account">账号</div>
        </div>
      </div>
    </el-form-item>
    <el-form-item>
      <div class="inform-intro">
        个人介绍
        <el-input type="textarea"></el-input>
      </div>
    </el-form-item>
    <el-form-item>
      <el-divider content-position="left">账号设置</el-divider>
    </el-form-item>
    <el-form-item>
      <el-divider>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-divider>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Information',
  data() {
    return {
      form: [],
    };
  },
};
</script>

<style scoped>

.title {
  padding: 5px;
  background-color: skyblue;
  font-size: 20px;
}
.inform-header-box {
  margin: 20px 0 0 30px;
  display: flex;
}
.header-box-left {
  width: 110px;
}
.inform-intro {
  margin: 0 20px;
}

</style>
