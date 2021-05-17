<template>
  <el-form ref="form" :model="form">
    <el-form-item>
      <div class="inform-header-box">
        <div class="header-box-left">
          <el-avatar shape="circle" :size="100" :src=form.avatar></el-avatar>
        </div>
        <div class="header-box-right">
          <div class="inform-nickname">
            <el-input  v-model="form.nickname"
                       class="inform-nickname"
                      :disabled="disabled_nickname">
            </el-input>
          </div>
          <div class="inform-account">账号: {{form.account}}</div>
          <div class="inform-email">邮箱: {{form.email}}</div>
        </div>
      </div>
    </el-form-item>
    <el-form-item>
      <el-divider content-position="left">基本信息</el-divider>
      <div style="display: flex">
        <div class="basic-item">注册时间：{{form.creationTime}}</div>
        <div class="basic-item">性别:
          <el-select v-model="form.gender" placeholder="请选择">
            <el-option
              v-for="item in genderList"
              :key="item.name"
              :label="item.name"
              :value="item.key">
            </el-option>
          </el-select>
        </div>
      </div>
    </el-form-item>
    <el-form-item>
      <el-divider content-position="left">个人介绍</el-divider>
      <div class="inform-intro">
        <el-input type="textarea" v-model="form.introduction"></el-input>
      </div>
    </el-form-item>
    <el-form-item>
      <el-divider content-position="left" v-if="form.anchor">直播相关信息</el-divider>
      <div style="display: flex" v-if="form.anchor">
        <div class="basic-item">房间号：{{form.anchor.roomNumber}}</div>
        <div class="basic-item">主播昵称:
          <el-input class="anchor-nickname"
                    v-model="form.anchor.name">
          </el-input>
        </div>
      </div>
    </el-form-item>
    <el-form-item>
      <el-divider content-position="left">账号设置</el-divider>
      <div>
        <el-button class="edit-password"
                   icon="el-icon-user"
                   :disabled="form.anchor !== null"
                   @click="drawer = true">成为主播</el-button>
<!--        <el-button class="edit-password"-->
<!--                   icon="el-icon-user"-->
<!--                   disabled="true"-->
<!--                   v-if="form.anchor">成为主播</el-button>-->
        <el-button class="edit-password" icon="el-icon-lock">修改密码</el-button>
      </div>
    </el-form-item>
    <el-form-item>
    </el-form-item>
    <el-form-item>
      <el-divider>
        <el-button type="primary">保存</el-button>
      </el-divider>
    </el-form-item>
    <el-drawer
      title="直播间注册"
      :visible.sync="drawer">
      <div>
        <el-main>
          <el-row type="flex" justify="center">
            <el-card style="width: 400px;" shadow="never">
              <el-form label-width="120px" label-position="top">
                <el-form-item label="直播间标题" prop="title">
                  <el-input type="text" v-model="inform_register.title"></el-input>
                </el-form-item>
                <el-form-item label="直播间公告" prop="announcement">
                  <el-input type="text" v-model="inform_register.announcement"></el-input>
                </el-form-item>
                <el-form-item label="直播间类型" prop="type">
                  <el-select v-model="inform_register.type" placeholder="请选择">
                    <el-option
                      v-for="item in typeList"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="封面" prop="cover">
                  <el-image :src="inform_register.cover"></el-image>
                </el-form-item>
                <el-form-item>
                  <div style="text-align: center;">
                    <el-button type="primary"
                               class="register-button"
                               @click="register">注册
                    </el-button>
                  </div>
                </el-form-item>
              </el-form>
            </el-card>
          </el-row>
        </el-main>
      </div>
    </el-drawer>
  </el-form>
</template>

<script>
import cookies from 'js-cookie';
import axios from 'axios';
import ResponseCode from '../../config/responseCode';

export default {
  name: 'anchorInform',
  created() {
    this.form = JSON.parse(cookies.get('user_data')).user;
    this.form.creationTime = this.form.creationTime.substring(0, 10);
    // if (this.form.gender === 0) {
    //   this.form.gender = '男';
    // } else {
    //   this.form.gender = '女';
    // }
    axios.post('/page/sort').then((response) => {
      if (response.data.code === ResponseCode.SUCCESS) {
        this.typeList = response.data.data;
      }
    });
  },
  data() {
    return {
      form: {},
      disabled_nickname: false,
      genderList: [
        {
          name: '男',
          key: 0,
        }, {
          name: '女',
          key: 1,
        },
      ],
      drawer: false,
      inform_register: {
        title: '',
        announcement: '马上准备开播了',
        type: '',
        cover: 'https://huyaimg.msstatic.com/cdnimage/gamebanner/phpiPSspx1620306840.jpg',
      },
      typeList: [],
    };
  },
  methods: {
    register() {
      axios.post('/anchor/register', {
        title: this.inform_register.title,
        announcement: this.inform_register.announcement,
        type: this.inform_register.type,
        cover: this.inform_register.cover,
        userId: this.form.id,
      }).then((response) => {
        if (response.data.code === ResponseCode.SUCCESS) {
          this.$message.success(response.data.msg);
          axios.post('/user/getMessage', {
            id: this.form.id,
          }).then((responseUser) => {
            let data;
            if (responseUser.data.code === ResponseCode.SUCCESS) {
              this.form = responseUser.data.data;
              data = {
                token: JSON.parse(cookies.get('user_data')).token,
                user: responseUser.data.data,
              };
              cookies.remove('user_data');
              cookies.set('user_data', data);
              location.reload();
            }
          });
        }
      });
    },
  },
};
</script>

<style scoped>

  .title {
    padding: 5px;
    background-color: skyblue;
    font-size: 20px;
  }
  .inform-header-box {
    margin: 20px 0 0 30px;
    display: flex;
  }
  .header-box-left {
    width: 110px;
    margin-top: 10px;
  }
  .header-box-right {
    margin-left: 20px;
  }
  .inform-intro {
    margin: 0 20px;
  }
  .edit-password {
    width: 300px;
  }
  .inform-nickname {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .inform-account{
    color: #475669;
    margin-top: -10px;
  }
  .basic-item {
    width: 320px;
    color: #475669;
  }
  .anchor-nickname {
    width: 200px;
  }
</style>
