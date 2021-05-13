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
        <el-col :offset="2" :span="2">
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
import AsideButton from '../../components/asideButton';
import HeaderButton from '../../components/headerButton';
import cookies from 'js-cookie';
import axios from 'axios';
import ResponseCode from '../../config/responseCode';

export default {
  name: 'MainPage',
  components: { HeaderButton, AsideButton, Login },
  mounted() {
    axios.post('/page/sort').then((response) => {
      if (response.data.code === ResponseCode.SUCCESS) {
        this.asideButtonList[1].children = response.data.data;
      }
    });
  },
  created() {
    if (cookies.get('user_data')) {
      this.user_data = JSON.parse(cookies.get('user_data')).user;
    }
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
  data() {
    return {
      user_data: {},
      iconSrc: 'http://121.196.174.189:8080/static/resources/1.png',
      dialogVisible: false,
      typeSignal: false,
      sortChildList: [],
      asideButtonList: [{
        name: '全部直播',
        icon: 'el-icon-data-board',
        type: 'list',
      }, {
        name: '分类',
        type: 'sort',
        icon: 'el-icon-data-board',
        children: [],
        children_mode: [{
          name: '英雄联盟',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/1-MS.png',
        }, {
          name: '穿越火线',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/4-MS.png',
        }, {
          name: '一起看',
          type: '一起看',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/2135-MS.png',
        }, {
          name: '户外',
          type: '户外',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/2165-MS.png',
        }, {
          name: '体育',
          type: '体育',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/2356-MS.png',
        }, {
          name: '我的世界',
          type: '我的世界',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/1732-MS.png',
        }, {
          name: '电视台',
          type: '电视台',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/6245-MS.png',
        }, {
          name: '守望先锋',
          type: '守望先锋',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/2174-MS.png',
        }, {
          name: '暴雪专区',
          type: '暴雪专区',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/100043-MS.png',
        }, {
          name: '炉石传说',
          type: '炉石传说',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/393-MS.png',
        }, {
          name: '魔兽世界',
          type: '魔兽世界',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/8-MS.png',
        }, {
          name: 'Q飞车手游',
          type: 'Q飞车手游',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/2928-MS.png',
        }, {
          name: 'DOTA2',
          type: 'DOTA2',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/7-MS.png',
        }, {
          name: '方舟',
          type: '方舟',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/1997-MS.png',
        }, {
          name: '跑跑卡丁车',
          type: '跑跑卡丁车',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/2620-MS.png',
        }, {
          name: 'QQ飞车',
          type: 'QQ飞车',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/9-MS.png',
        }, {
          name: '三国杀',
          type: '三国杀',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/1669-MS.png',
        }, {
          name: '原神',
          type: '原神',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/5489-MS.png',
        }, {
          name: '逃离',
          type: '逃离',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/3493-MS.png',
        }, {
          name: '狼人杀',
          type: '狼人杀',
          src: 'https://huyaimg.msstatic.com/cdnimage/game/2785-MS.png',
        }],
      },
      ],
      headerButtonList: [
        { name: '直播', type: 'list' },
        { name: '分类', type: 'sort' },
        { name: '赛事', type: 'sort' },
        { name: '订阅', type: 'subscribe' },
        { name: '信息', type: 'member' },
      ],
    };
  },
  methods: {
    to(key) {
      this.$router.push({ name: key });
    },
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
      location.reload();
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
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.body {
  position: relative;
  padding-top: 60px;
  margin-left: 200px;
  background-color: #f4f5f8;
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
