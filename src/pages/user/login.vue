<template>
  <div>
    <el-main>
      <el-row type="flex" justify="center">
        <span class="platform-name">直播平台</span>
      </el-row>
      <el-row type="flex" justify="center">
        <el-card :class="typeSignal?'login-card':'register-card'" shadow="never">
          <el-form label-width="90px" label-position="top" ref="form"
                   :status-icon="true" :model="form" :rules="rules"
                   :hide-required-asterisk="true">
            <el-form-item v-if="typeSignal" label="账号 / 邮箱" prop="account">
            <el-input type="text" v-model="form.account"></el-input>
          </el-form-item>
            <el-form-item v-if="!typeSignal" label="你的邮箱" prop="email">
              <el-input type="text" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-button type="primary"
                           class="login-button"
                           v-if="typeSignal"
                           @click="login">登录</el-button>
                <el-button type="primary" class="register-button"
                           v-if="!typeSignal" @click="register">注册</el-button>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button type="text" v-if="typeSignal" @click="handleType">快速注册 ></el-button>
        <el-button type="text" v-if="!typeSignal" @click="handleType"> &lt; 登录 </el-button>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import axios from 'axios';
import ResponseCode from '../../config/responseCode';
import cookies from 'js-cookie';

export default {
  name: 'login',
  props: ['typeSignal'],
  data() {
    return {
      form: {
        account: '',
        email: '',
        password: '',
      },
      rules: {
        account: [
          { required: false, message: '账号不能为空', trigger: ['blur', 'change'] },
        ],
        email: [
          { required: true,
            message: '邮箱格式不正确',
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            trigger: ['blur', 'change'] },
        ],
        password: [
          { required: false, message: '密码不为空', trigger: ['blur', 'change'] },
        ],
      },
    };
  },
  methods: {
    handleFatherDialog() {
      this.$emit('handleDialog', false);
    },
    handleType() {
      this.typeSignal = !this.typeSignal;
    },
    login() {
      axios.post('/user/login', JSON.stringify({
        account: this.form.account,
        password: this.form.password,
      })).then((response) => {
        if (response.data.code === ResponseCode.SUCCESS) {
          cookies.set('user_data', response.data.data);
          this.$message.success(response.data.msg);
          location.reload();
        } else {
          this.$message.error(response.data.msg);
        }
      });
    },
    register() {
      axios.post('/user/register', JSON.stringify({
        email: this.form.email,
        password: this.form.password,
      })).then((response) => {
        if (response.data.code === ResponseCode.SUCCESS) {
          this.$alert(`这是你的账号:${response.data.data.toString()}`, '注册成功！', {
            confirmButtonText: '确定',
          });
          this.form.account = response.data.data;
        } else {
          this.$message.error(response.data.msg);
          this.form.email = '';
          this.form.password = '';
        }
      });
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 300px;
  height: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.register-card {
  width: 300px;
  height: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: aliceblue;
  border: 1px solid #409eff;
}
.platform-name {
  font-weight: 300;
  font-size: 24px;
}
.login-button {
  width: 260px;
  margin-top: 5px;
  color: #fff;
  background-color: #409eff;
}
.register-button {
  width: 260px;
  margin-top: 5px;
  color: white;
  background-color: #409edd;
}
</style>
