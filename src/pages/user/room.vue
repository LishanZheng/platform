<template>
  <div class="container" v-loading="loading">
    <div class="box-left">
      <div class="room">
        <el-avatar :src="roomInform.anchor.avatar" class="author-avatar"></el-avatar>
        <div class="room-title-bar">
          <div class="room-title">{{ roomInform.title }}</div>
          <div class="room-subtitle">
            <span class="author-nick">{{ roomInform.anchor.name }}</span>
            <span class="room-type">- {{ roomInform.type }} -</span>
            <span class="room-audience">
              <i class="el-icon-user"></i> {{ roomInform.quantity }}
              <i class="el-icon-star-on"></i> {{ roomInform.stars }}
            </span>
            <el-button class="room-subscribe" v-if="!subscribe_signal" @click="subscribe(true)" >
              <i class="el-icon-star-off"> 订阅</i>
            </el-button>
            <el-button class="room-subscribed" v-if="subscribe_signal" @click="subscribe(false)">
              <i class="el-icon-star-on"> 已订阅</i>
            </el-button>
          </div>
        </div>
        <div id="video">视频</div>
      </div>
      <div class="option-title-left">直播回放</div>
      <div class="box">
        <playback v-for="item in 3" :key="item"></playback>
      </div>
    </div>
    <div class="box-right">
      <div class="room-sidebar">
        <div class="notice"><i class="el-icon-monitor"></i> 公告：{{roomInform.announcement}}</div>
        <div id="chat">
          <danmaku v-for="(item, index) in informs" :inform="item" :key="index"></danmaku>
        </div>
        <div class="chat-input">
          <el-input v-model="input" class="msg-input"></el-input>
          <el-button class="msg-submit" @click="send">发送</el-button>
        </div>
      </div>
      <div class="option-title-right">推荐视频</div>
    </div>
  </div>
</template>

<script>
import Playback from '../../components/playback';
import DPlayer from 'dplayer';
import Hls from 'hls.js';
import Danmaku from '../../components/danmaku';
import cookies from 'js-cookie';
import axios from 'axios';
import ResponseCode from '../../config/responseCode';


export default {
  name: 'room',
  components: { Danmaku, Playback },
  mounted() {
    this.dp = new DPlayer({
      container: document.getElementById('video'),
      autoplay: false,
      video: {
        url: 'http://across.ink:8090/hls/admin.m3u8',
        type: 'customHls',
        customType: {
          customHls(video) {
            const hls = new Hls();
            hls.loadSource(video.src);
            hls.attachMedia(video);
          },
        },
      },
      danmaku: {
        id: '9E2E3368B56CDBB4',
        api: 'https://api.prprpr.me/dplayer/',
        token: 'tokendemo',
        maximum: 1000,
        addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
        user: 'DIYgod',
        bottom: '15%',
        unlimited: true,
      },
    });
  },
  created() {
    if (cookies.get('user_data') !== undefined) {
      this.user = JSON.parse(cookies.get('user_data')).user;
    }
    axios.post('/room/get', JSON.stringify({
      roomNumber: this.$route.query.roomNumber,
    })).then((response) => {
      if (response.data.code === ResponseCode.SUCCESS) {
        this.roomInform = response.data.data;
        this.getSubState();
        this.loading = false;
      } else {
        this.$message.error(response.data.msg);
      }
    });
  },
  methods: {
    subscribe(key) {
      if (cookies.get('user_data') === undefined) {
        this.$message.error('请先登录！');
        return;
      }
      this.user = JSON.parse(cookies.get('user_data')).user;
      axios.post('/room/subs', JSON.stringify({
        roomId: this.roomInform.id,
        userId: this.user.id,
        signal: key,
      })).then((response) => {
        if (response.data.code === ResponseCode.SUCCESS) {
          this.subscribe_signal = key;
          if (key) {
            this.$message.success('订阅成功！');
          } else {
            this.$message.success('取消订阅成功！');
          }
        }
      });
      if (key) {
        this.roomInform.stars = this.roomInform.stars + 1;
      } else {
        this.roomInform.stars = this.roomInform.stars - 1;
      }
    },
    getSubState() {
      axios.post('/room/subs', JSON.stringify({
        roomId: this.roomInform.id,
        userId: this.user.id,
      })).then((responseSub) => {
        if (responseSub.data.code === ResponseCode.SUCCESS) {
          this.subscribe_signal = responseSub.data.data;
        }
      });
    },
    send() {
      this.user = JSON.parse(cookies.get('user_data')).user;
      if (this.input === '') {
        this.$message.error('弹幕不能为空');
        return;
      }
      this.informs.push({
        username: this.user.nickname,
        words: this.input,
      });
      this.dp.danmaku.send(
        {
          text: this.input,
          color: '#b7daff',
          type: 'right', // should be `top` `bottom` or `right`
        },
      );
      const scrollTarget = document.getElementById('chat');
      scrollTarget.scrollTop = scrollTarget.scrollHeight + 28;
    },
  },
  data() {
    return {
      input: '',
      dp: {},
      informs: [],
      roomInform: {},
      user: {},
      loading: true,
      subscribe_signal: false,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 45px;
  display: flex;
}
.box-left {
  width: 55vw;
  min-width: 850px;
  max-width: 900px;
}
.box-right {
  width: 30vw;
  min-width: 300px;
  max-width: 350px;
}
.room {
  background-color: ghostwhite;
  height: 500px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 10px;
}
.room-sidebar {
  background-color: ghostwhite;
  height: 500px;
  margin-left: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 10px;
}
.option-title-left {
  margin: 30px 0 18px 30px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  position: relative;
}
.option-title-left:after {
  content: '';
  width: 35px;
  height: 4px;
  position: absolute;
  top: 100%;
  left: 20px;
  background-color: lightskyblue;
}
.option-title-left:before {
  content: '';
  width: 1px;
  height: 16px;
  position: absolute;
  left: 97px;
  top: 7px;
  background-color: gray;
}
.option-title-right {
  margin: 30px 0 18px 30px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  position: relative;
  text-align: center;
}
.option-title-right:after {
  content: '';
  width: 35px;
  height: 4px;
  position: absolute;
  top: 100%;
  left: 45%;
  background-color: lightskyblue;
  text-align: center;
}
.notice {
  padding: 15px;
  font-size: 10px;
  color: #9999AA;
}
#chat {
  padding: 10px;
  height: 380px;
  background-color: #f2f2f3;
  overflow: scroll;
}
.chat-input {
  padding: 13px;
  width: 300px;
}
.msg-input {
  max-width: 160px;
}
.msg-submit {
  margin-left: -5px;
  background-color: cornflowerblue;
  color: white;
}
.room-title-bar {
  display: inline-block;
}
.room-title {
  font-size: 27px;
  color: slategray;
  margin-left: 10px;
}
.room-subtitle {
  margin-top: 8px;
  margin-left: 10px;
  color: #9999AA;
}
.author-avatar {
  width: 70px;
  height: 70px;
}
.author-nick {
  margin-left: 5px;
  color: black;
  font-size: 17px;
}
.room-type {
  margin-left: 12px;
  margin-right: 18px;
}
.room-audience {
  margin-right: 230px;
  font-size: 16px;
  margin-left: -3px;
  display:-moz-inline-box;
  display:inline-block;
  width: 110px;
}
.room-subscribe {
  background-color: cornflowerblue;
  color: white;
  margin-left: 20px;
  width: 110px;
  font-size: 16px;
}
.room-subscribed {
  background-color: steelblue;
  color: white;
  margin-left: 20px;
  width: 110px;
  font-size: 16px;
}
#video {
  margin: 10px;
  background-color: black;
  height: 400px;
}
</style>
