<template>
  <el-form ref="form" :model="form">
    <el-form-item>
    <div class="inform-header-box">
      <div class="header-box-left">
        <el-avatar shape="circle" :size="100" :src=form.avatar></el-avatar>
      </div>
      <div class="header-box-right">
        <div class="inform-nickname">{{form.nickname}}
          <el-button type="text" ><i class="el-icon-edit"></i></el-button></div>
        <div class="inform-account">账号: {{form.account}}</div>
        <div class="inform-email">邮箱: {{form.email}}</div>
      </div>
    </div>
    </el-form-item>
    <el-form-item>
      <el-divider content-position="left">基本信息</el-divider>
      <div style="display: flex">
        <div class="basic-item">注册时间：{{form.creationTime}}</div>
        <div class="basic-item">性别: {{form.gender}}
          <el-button type="text" ><i class="el-icon-edit"></i></el-button></div>
      </div>
    </el-form-item>
    <el-form-item>
      <el-divider content-position="left">个人介绍</el-divider>
      <div class="inform-intro">
        <el-input type="textarea" v-model="form.introduction"></el-input>
      </div>
    </el-form-item>
    <el-form-item>
      <el-divider content-position="left">账号设置</el-divider>
      <div>
        <el-button class="edit-password" icon="el-icon-user">成为主播</el-button>
        <el-button class="edit-password" icon="el-icon-lock">修改密码</el-button>
      </div>
    </el-form-item>
    <el-form-item>
    </el-form-item>
    <el-form-item>
      <el-divider>
        <el-button type="primary">保存</el-button>
      </el-divider>
    </el-form-item>
  </el-form>
</template>

<script>
import cookies from 'js-cookie';

export default {
  name: 'Information',
  created() {
    this.form = JSON.parse(cookies.get('user_data')).user;
    this.form.creationTime = this.form.creationTime.substring(0, 10);
    if (this.form.gender === 0) {
      this.form.gender = '男';
    } else {
      this.form.gender = '女';
    }
  },
  data() {
    return {
      form: {},
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
  margin-top: 10px;
}
.header-box-right {
  margin-left: 20px;
}
.inform-intro {
  margin: 0 20px;
}
.edit-password {
  width: 300px;
}
.inform-nickname {
  font-size: 25px;
}
.inform-account{
  color: #475669;
  margin-top: -10px;
}
.basic-item {
  width: 400px;
  color: #475669;
}
</style>
