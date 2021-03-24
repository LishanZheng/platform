<template>
  <div>
    <div class="title">全部直播</div>
    <div>
      <el-carousel height="150px" type="card">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="box">
      <card v-for="item in 24" :key="item"></card>
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
  methods: {

  },
  data() {
    return {
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
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
