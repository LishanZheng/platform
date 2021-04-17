<template>
  <div class="container">
    <div class="header">
      <span class="header-title">
        个人中心
      </span>
    </div>
    <div class="box">
      <div class="box-left">
      </div>
      <div class="box-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'member',
  data() {
    return {
      form: [],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 40px 0 0 8vw;
}
/*.header:before {*/
/*  content: '';*/
/*  width: 80%;*/
/*  height: 2px;*/
/*  position: absolute;*/
/*  top: 100%;*/
/*  right: 6%;*/
/*  background-color: silver;*/
/*}*/
.header-title {
  font-size: 32px;
  color: black;
  position: relative;
}
.header-title:before {
  content: '';
  width: 80%;
  height: 2px;
  position: absolute;
  top: 100%;
  left: 10%;
  background-color: lightskyblue;
}
.box {
  display: flex;
  margin-top: 15px;
}
.box-left {
  width: 200px;
  min-width: 200px;
  background-color: #2f3035;
}
.box-right {
  width: 680px;
  min-width: 680px;
  height: 100vh;
  background-color: #f8f8fe;
}
</style>
