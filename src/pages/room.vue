<template>
  <div class="container">
    <div class="box-left">
      <div class="room">
        <el-avatar src="https://huyaimg.msstatic.com/avatar/1097/09/2be017ac7938c7c1edf91daaba7670_180_135.jpg" class="author-avatar"></el-avatar>
        <div class="room-title-bar">
          <div class="room-title">直播音悦台 好歌等你来</div>
          <div class="room-subtitle">
            <span class="author-nick">Across音乐厅</span>
            <span class="room-type">- 英雄联盟 -</span>
            <span class="room-audience">
              <i class="el-icon-user"></i>5,201
              <i class="el-icon-star-on"></i>145,201</span>
            <el-button class="room-subscribe">
              <i class="el-icon-star-off"></i> 订阅
            </el-button>
          </div>
        </div>
        <div id="video">视频</div>
      </div>
      <div class="option-title-left">直播回放</div>
      <div class="box">
        <playback v-for="item in 6" :key="item"></playback>
      </div>
    </div>
    <div class="box-right">
      <div class="room-sidebar">
        <div class="notice"><i class="el-icon-monitor"></i> 公告：今日不播！今日不播！</div>
        <div class="chat">
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
import Playback from '../components/playback';
import DPlayer from 'dplayer';
import Hls from 'hls.js';
import Danmaku from '../components/danmaku';

export default {
  name: 'room',
  components: { Danmaku, Playback },
  mounted() {
    this.dp = new DPlayer({
      container: document.getElementById('video'),
      autoplay: false,
      video: {
        url: 'http://across.ink:8090/hls/test.m3u8',
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
  methods: {
    send() {
      if (this.input === '') {
        this.$message.error('弹幕不能为空');
        return;
      }
      this.informs.push({
        username: '游客1231',
        words: this.input,
      });
      this.dp.danmaku.send(
        {
          text: this.input,
          color: '#b7daff',
          type: 'right', // should be `top` `bottom` or `right`
        },
      );
    },
  },
  data() {
    return {
      input: '',
      dp: {},
      informs: [],
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
.chat {
  padding: 10px;
  height: 380px;
  background-color: #f2f2f3;
  overflow:scroll;
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
  margin-right: 290px;
  font-size: 14px;
  margin-left: -3px;
}
.room-subscribe {
  background-color: cornflowerblue;
  color: white;
}
#video {
  margin: 10px;
  background-color: black;
  height: 400px;
}
</style>
