<template>
  <el-container>
    <el-header class="header">
      <div>header</div>
    </el-header>
    <el-container>
      <el-aside class="aside_menu" width="160px">
<!--        <el-menu-->
<!--          active-text-color="#538CFF"-->
<!--          text-color="#000000"-->
<!--          :default-active="this.$route.path"-->
<!--          router>-->
<!--          <el-menu-item v-for="(item) in navList"-->
<!--                        :key="item.name"-->
<!--                        :index=item.path-->
<!--                        class="aside_menu">-->
<!--            <i :class=item.icon></i><span> {{ item.name }} </span>-->
<!--          </el-menu-item>-->
<!--        </el-menu>-->
        <div>ASIDE</div>
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

export default {
  name: 'MainPage',
  components: { Login },
  data() {
    return {};
  },
  methods: {
    getNavList() {
      this.navList = [];
    },
  },
};
</script>
<style scoped>
.page_container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.aside_menu {
  font-size: 15px;
  height: 94vh;
  position: fixed;
  top: 60px;
  background-color: green;
}

.header {
  background-color: rgba(235,243,255,0.45);
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
  margin-left: 160px;
}
.footer {
  text-align: center;
  font-size: 10px;
  background-color: rgba(241,247,254,0.8);
  height: 20px !important;
}
</style>
