<template>
  <div>
    <div>
      <el-carousel height="250px" width="200px" type="card">
        <el-carousel-item v-for="(item, index) in inform.carousels" :key="index" >
          <el-image :src="item.src" class="image"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="title">{{ inform.name }}</div>
    <div class="box">
      <card v-for="(item, index) in inform.list" :key="index" :inform="item"></card>
    </div>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>

import card from '../components/card';

export default {
  name: 'list',
  components: { card },
  created() {
    this.type = this.$route.query.type;
    this.inform = {
      name: this.type,
      carousels: [
        {
          title: '跑马灯',
          src: 'https://huyaimg.msstatic.com/cdnimage/gamebanner/phprjHrrS1610958075.jpg',
        },
        {
          title: '跑马灯',
          src: 'https://huyaimg.msstatic.com/cdnimage/gamebanner/phpOx6vgU1614931948.jpg',
        },
        {
          title: '跑马灯',
          src: 'https://huyaimg.msstatic.com/cdnimage/gamebanner/phpM9bWhC1615387151.jpg',
        },
      ],
      list: [
        {
          title: '蒙三特斯de直播间',
          name: '蒙三特斯',
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          quantity: '10.3万',
          type: '英雄联盟',
        },
        {
          title: '叶子的直播间',
          name: '小叶子999',
          src: 'https://huyaimg.msstatic.com/cdnimage/gamebanner/phpVgg2BA1502443405.jpg',
          quantity: '10.4万',
          type: '穿越火线',
        },
        {
          title: '蒙三特斯de直播间',
          name: '蒙三特斯',
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          quantity: '10.3万',
          type: '英雄联盟',
        },
        {
          title: '叶子的直播间',
          name: '小叶子999',
          src: 'https://huyaimg.msstatic.com/cdnimage/gamebanner/phpVgg2BA1502443405.jpg',
          quantity: '10.4万',
          type: '穿越火线',
        },
        {
          title: '蒙三特斯de直播间',
          name: '蒙三特斯',
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          quantity: '10.3万',
          type: '英雄联盟',
        },
        {
          title: '叶子的直播间',
          name: '小叶子999',
          src: 'https://huyaimg.msstatic.com/cdnimage/gamebanner/phpVgg2BA1502443405.jpg',
          quantity: '10.4万',
          type: '穿越火线',
        },
      ],
    };
  },
  methods: {

  },
  data() {
    return {
      type: '',
      inform: {},
    };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 24px;
  margin: 10px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.pagination {
  text-align: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.image {
  height: 250px;
}
/*.el-carousel__item:nth-child(2n) {*/
/*  background-color: #99a9bf;*/
/*}*/
/*.el-carousel__item:nth-child(2n+1) {*/
/*  background-color: #d3dce6;*/
/*}*/
</style>
