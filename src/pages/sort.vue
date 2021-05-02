<template>
  <div>
    <div class="title">全部分类</div>
    <div class="box">
      <el-button v-for="(item, index) in sortList" :key="index" class="program">
        <img :src=item.src
             alt=""
             @click="to(item.type)"
             class="image">
        <div class="name">{{ item.name }}</div>
      </el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sort',
  methods: {
    to(type) {
      this.$router.push({ name: 'list', query: { type } });
    },
  },
  data() {
    return {
      sortList: [{
        name: '英雄联盟',
        type: '英雄联盟',
        src: 'https://huyaimg.msstatic.com/cdnimage/game/1-MS.png',
      }, {
        name: '穿越火线',
        type: '穿越火线',
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
        name: 'QQ飞车手游',
        type: 'QQ飞车手游',
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
    };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.program {
  width: 180px;
  height: 180px;
  margin: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  background-color: rgba(235,243,255,1);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

}
.program:hover {
  border: 0;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  color: cornflowerblue;
  background-color: white;
}
.image {
  width: 130px;
  height: 130px;
}
</style>
