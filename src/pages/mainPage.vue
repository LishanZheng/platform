<template>
  <el-container>
    <el-header class="header">
      <el-row :gutter="20">
        <el-col :offset="1" :span="3">
          <el-image class="hd-icon" :src="iconSrc"></el-image>
        </el-col>
        <el-col :span="2"
                v-for="(item, index) in headerButtonList"
                :key="index">
          <header-button :inform="item"></header-button>
        </el-col>
        <el-col :offset="4" :span="2">
          <el-button type="text" icon="el-icon-timer" class="hd-link">历史</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="text" icon="el-icon-user" class="hd-link">登录</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="text" icon="el-icon-mouse" class="hd-link">注册</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside_menu" width="200px">
        <aside-button v-for="(item, index) in asideButtonList"
                      :key="index"
                      :inform="item"></aside-button>
      </el-aside>
      <el-main class="body">
        <div style="height: 1000px;">body</div>
        <router-view></router-view>
        <el-footer class="footer">© 2021 🦉  Across<a href="http://beian.miit.gov.cn/"> 闽ICP备2021000449号</a></el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import Login from './login';
import AsideButton from '../components/asideButton';
import HeaderButton from '../components/headerButton';

export default {
  name: 'MainPage',
  components: { HeaderButton, AsideButton, Login },
  data() {
    return {
      iconSrc: 'http://121.196.174.189:8080/static/resources/1.png',
      asideButtonList: [{
        name: '直播',
        icon: 'el-icon-data-board',
        child: ['LOL', 'CF', 'LOL', 'CF', 'LOL', 'CF', 'LOL', 'CF', 'LOL', 'CF', 'LOL', 'CF', 'LOL', 'CF'],
      }, {
        name: '直播',
        icon: 'el-icon-data-board',
      },
      ],
      headerButtonList: [{ name: '直播' }, { name: '直播' }],
    };
  },
  methods: {
    getNavList() {},
  },
};
</script>
<style scoped>
.aside_menu {
  font-size: 15px;
  height: 94vh;
  position: fixed;
  top: 60px;
  background-color: rgba(1,4,24,0.7);
}
.header {
  background-color: rgba(235,243,255,1);
  padding: 0;
  position: fixed;
  width: 100vw;
  height: 60px;
  z-index: 1;
}
.body {
  background-color: rgba(241,247,254,0.2);
  position: relative;
  top: 60px;
  margin-left: 200px;
}
.footer {
  text-align: center;
  font-size: 10px;
  background-color: rgba(241,247,254,0.8);
  height: 20px !important;
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
</style>
