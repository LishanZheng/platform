<template>
  <div class="container">
    <div class="box-left">
      <div class="video">视频</div>
      <div class="option-title-left">直播回放</div>
      <div class="box">
        <div class="playback">
          <playback v-for="item in 6" :key="item"></playback>
        </div>
      </div>
    </div>
    <div class="box-right">
      <div class="chat">弹幕</div>
      <div class="option-title-right">推荐视频</div>
    </div>
  </div>
</template>

<script>
import Playback from '../components/playback';

export default {
  name: 'room',
  components: { Playback },
};
</script>

<style scoped>
.container {
  padding: 45px;
  background-color: rgba(241,247,254,1);
  display: flex;
}
.box-left {
  width: 60vw;
}
.box-right {
  width: 35vw;
}
.video {
  background-color: white;
  height: 400px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
.chat {
  background-color: white;
  height: 400px;
  margin-left: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
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
</style>
