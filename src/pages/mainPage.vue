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
        <el-col :offset="1" :span="4">
          <el-input placeholder="请输入内容" class="input-search">
            <el-button slot="append" icon="el-icon-search" class="button-search"></el-button>
          </el-input>
        </el-col>
        <el-col :offset="1" :span="1">
          <el-button type="text"
                     icon="el-icon-user"
                     class="hd-link"
                     @click="login(true)">登录</el-button>
        </el-col>
        <el-col :span="1">
          <el-button type="text"
                     icon="el-icon-mouse"
                     class="hd-link"
                     @click="login(false)">注册</el-button>
        </el-col>
      </el-row>
    </el-header>
    <div>
      <el-aside class="aside_menu" width="200px">
        <aside-button v-for="(item, index) in asideButtonList"
                      :key="index"
                      :inform="item"></aside-button>
        <el-footer class="footer">
          闽ICP备2021000449号
        </el-footer>
      </el-aside>
      <div class="body">
        <router-view :key="key"></router-view>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%">
      <login @handleDialog="handleDialog" :typeSignal="typeSignal"></login>
    </el-dialog>
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
      dialogVisible: false,
      typeSignal: false,
      asideButtonList: [{
        name: '全部直播',
        icon: 'el-icon-data-board',
        type: 'list',
      }, {
        name: '分类',
        type: 'sort',
        icon: 'el-icon-data-board',
        child: [{ name: '英雄联盟', type: '英雄联盟' }, { name: '穿越火线', type: '穿越火线' }],
      },
      ],
      headerButtonList: [{ name: '直播', type: 'list' },
        { name: '分类', type: 'sort' },
        { name: '赛事', type: 'sort' },
        { name: '订阅', type: 'sort' },
        { name: '历史', type: 'history' },
      ],
    };
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
  methods: {
    to(key) {
      this.$router.push({ name: key });
    },
    login(key) {
      this.dialogVisible = true;
      this.typeSignal = key;
    },
    handleDialog(key) {
      this.dialogVisible = key;
    },
  },
};
</script>
<style scoped>

.aside_menu {
  font-size: 13px;
  height: 94vh;
  position: fixed;
  top: 60px;
  background-color: #2f3035;
  z-index: 1;
}
.header {
  background-color: rgba(235,243,255,1);
  padding: 0;
  position: fixed;
  width: 100vw;
  height: 60px;
  z-index: 99;
}
.body {
  position: relative;
  top: 60px;
  margin-left: 200px;
  background-color: white;
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
.input-search {
  margin-top: 10px;
}
.button-search {
  width: 50px;
}
</style>
