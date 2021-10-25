<template>
  <div class="all_box">
    <el-container class="home_bg" style="height:100%; overflow-y:auto;">
<!--      头部部分-->
      <el-header class="home_header">
        <div class="home_header_left">
          <i class="el-icon-s-fold icons"></i>
          <h3>开发智能实训平台</h3>
        </div>
        <div class="home_header_right">
          <p>{{user.username | userFilter}}，您好</p>
          <p>{{user.timer | timerFn}}</p>
          <p clASS="p3">
            <i class="el-icon-circle-close icons"></i>
            <span @click="quitFn">退出</span>
          </p>
        </div>
      </el-header>
<!--      主子部分-->
      <el-container class="bottom">
<!--        侧边栏-->
        <el-aside width="208px">
          <el-row class="tac left">
            <el-col :span="12">
              <el-menu
                  default-active="this.$router.push"
                  router
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#000"
                  text-color="#fff"
                  active-text-color="green">
                <el-menu-item index="/home/h1">
                  <i class="el-icon-s-home icons"></i>
                  <span slot="title" router>系统首页</span>
                </el-menu-item>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location icons"></i>
                    <span>基本信息</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/home/h2">待办信息</el-menu-item>
                    <el-menu-item index="/home/h3">发现信息</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location icons"></i>
                    <span>课程管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location icons"></i>
                    <span>实训项目管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
<!--          主体部分-->
          <keep-alive>
            <router-view/>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// <!--引入dayjs插件-->
import dayjs from 'dayjs'
export default {
  name: "Home",
  data(){
    return {
      user:JSON.parse(localStorage.getItem('name')) || {},

    }
  },
  mounted(){
    this.user = JSON.parse(localStorage.getItem('name'))
  },
  methods:{
  //  退出登录
    quitFn(){
      this.$router.replace('/')
      localStorage.removeItem('name')
    },
  //  侧边栏
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  filters:{
    //格式化姓名
    userFilter(val){
      if(val){
        return `${val.split('')[0]}老师`
      }else{
        return '请登录'
      }
    },
    // 格式化日期
    timerFn(val){
      return dayjs(val).format('YYYY-MM-DD')
    }
  },
  beforeDestroy() {

  }
}
</script>

<style scoped>
.all_box{
  width: 100vw;
  height: 100vh;
  color:white;
}
  .home_bg{
    background: #060606;
  }
  .icons{
    font-size: 30px;
    color:#51eb99;
    margin-right: 8px;
  }
  .home_header{
    display: flex;
    justify-content: space-between;
  }
  .home_header>div{
    height: 100%;
  }
.home_header_left{
    display: flex;
    align-items: center;
  }
.home_header_right{
  display: flex;
  align-items: center;
}
.home_header_right>p{
  margin: 0px 8px;
}
.p3{
  display: flex;
  align-items: center;
}
.el-col-12{
  width: 100%;
}
.el-menu{
  background: #000;
  border:1px solid #000
}
.bottom{
  flex-grow:10;
}
</style>