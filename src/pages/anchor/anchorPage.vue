<template>
  <el-container>
    <el-header class="header">
      <el-row :gutter="20">
        <el-col :span="1">
          <el-image class="hd-icon" :src="iconSrc"></el-image>
        </el-col>
        <el-col :span="5">
          <div class="icon-title">Across直播平台-主播端</div>
        </el-col>
        <el-col :span="2"
                v-for="(item, index) in headerButtonList"
                :key="index">
          <header-button-anchor :inform="item"></header-button-anchor>
        </el-col>
        <el-col :offset="5" :span="1">
          <el-button type="text"
                     icon="el-icon-user"
                     class="hd-link"
                     v-if="login_state()"
                     @click="login(true)">登录</el-button>
        </el-col>
        <el-col :span="1">
          <el-button type="text"
                     icon="el-icon-mouse"
                     class="hd-link"
                     v-if="login_state()"
                     @click="login(false)">注册</el-button>
        </el-col>
        <el-col :offset="6" :span="2">
          <el-dropdown v-if="!login_state()">
            <el-image class="hd-icon" :src="iconSrc"></el-image>
            <el-dropdown-menu slot="dropdown" style="text-align: center;width: 180px">
              <el-dropdown-item disabled>
                <el-image class="hd-icon" :src="iconSrc"></el-image>
              </el-dropdown-item>
              <div> {{ user_data.nickname }} </div>
              <el-dropdown-item divided @click.native="to(headerButtonList[4].type)">
                <i class="el-icon-user"></i>个人信息
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-service"></i>我的订阅
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-chat-round"></i>我的消息
              </el-dropdown-item>
              <el-dropdown-item divided @click.native="logout()">
                退出<i class="el-icon-d-arrow-right"></i>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <div class="body">
<!--      <div class="tip" v-if="login_state()">还未登录，快去登录吧！</div>-->
      <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" v-if="path()">
      </el-image>
      <router-view></router-view>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%">
      <login @handleDialog="handleDialog" :typeSignal="typeSignal"></login>
    </el-dialog>
  </el-container>
</template>

<script>
import HeaderButton from '../../components/headerButton';
import HeaderButtonAnchor from '../../components/headerButtonAnchor';
import Login from '../user/login';
import cookies from 'js-cookie';

export default {
  name: 'anchorPage',
  components: { Login, HeaderButtonAnchor, HeaderButton },
  created() {
    if (cookies.get('user_data')) {
      this.user_data = JSON.parse(cookies.get('user_data')).user;
    }
  },
  data() {
    return {
      user_data: {},
      iconSrc: 'http://121.196.174.189:8080/static/resources/1.png',
      dialogVisible: false,
      typeSignal: false,
      sortChildList: [],
      headerButtonList: [
        { name: '直播间', type: '/anchor/room' },
        { name: '订阅', type: '/anchor/subscribe' },
        { name: '信息', type: '/anchor/member' },
        { name: '平台', type: '/list' },
      ],
    };
  },
  methods: {
    // 管理登录界面显示
    login(key) {
      this.dialogVisible = true;
      this.typeSignal = key;
    },
    // 管理登录状态
    login_state() {
      return cookies.get('user_data') == null;
    },
    logout() {
      this.$message.success('退出成功');
      cookies.remove('user_data');
      this.$router.push({ path: '/list' });
      location.reload();
    },
    handleDialog(key) {
      this.dialogVisible = key;
    },
    path() {
      return this.$route.path === '/anchor';
    },
  },
};
</script>

<style scoped>
.icon-title {
  margin-top: 18px;
  color: #9999AA;
  font-size: 20px;
  margin-left: 20px;
}
.header {
  background-color: rgba(235,243,240,1);
  padding: 0;
  position: fixed;
  width: 100vw;
  height: 60px;
  z-index: 99;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.body {
  position: relative;
  padding-top: 60px;
  background-color: #f4f5f8;
  height: 630px;
}
.footer {
  font-size: 10px;
  color: floralwhite;
  width: 200px;
  background-color: rgba(241,247,254,0.3);
  height: 20px !important;
  text-align: center;
  position: absolute;
  bottom: 0;
}
.hd-icon {
  height: 60px;
  width: 70px;
}
.hd-link {
  margin: 10px;
  color: slategray;
}
.hd-link:hover {
  color: cornflowerblue;
}
.tip {
  text-align: center;
  font-size: 20px;
  color: steelblue;
}
</style>
