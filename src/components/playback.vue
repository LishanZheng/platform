<template>
  <div class="container">
    <div>
      <el-avatar icon="el-icon-user-solid" class="author-avatar"></el-avatar>
    </div>
    <div class="inform">
      <span class="author-nick">author-nick</span>
      <span class="publish-time">publish-time</span>
      <div class="title">回放标题</div>
      <el-card class="video">
        视频
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'playback',
  data() {
    return {
      inform: {

      },
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: white;
  position: relative;
  display: flex;
}
.container:after {
  content: '';
  width: 90%;
  height: 1px;
  position: absolute;
  background-color: #d3dce6;
  left: 50px;
  top: 99%;
}
.author-avatar {
  width: 60px;
  height: 60px;
}
.inform {
  margin: 20px 0 0 20px;
  align-items: baseline;
}
.publish-time {
  margin-left: 20px;
  font-size: 12px;
}
.title {
  margin: 15px 0;
  font-size: 21px;
  font-weight: bold;
  color: slategrey;
}
.video {
  width: 600px;
  height: 200px;
}
</style>
