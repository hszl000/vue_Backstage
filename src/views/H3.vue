<template>
  <div class="xx_all">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="one">
        <ul class="ul">
          <li v-for="item in arrList" :key="item.id">
            <router-link :to="`/home/xiaoxi?List=${item.content}`" class="lu">
              <img :src="item.author.avatar_url" alt="加载失败" class="imgs">
              <div>
                <p>{{item.author.loginname}}</p>
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="精华" name="two">
        <ul class="ul">
          <li v-for="item in arrList" :key="item.id">
            <router-link :to="`/home/xiaoxi?List=${item.content}`" class="lu">
              <img :src="item.author.avatar_url" alt="加载失败" class="imgs">
              <div>
                <p>{{item.author.loginname}}</p>
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="分享" name="three">
        <ul class="ul">
          <li v-for="item in arrList" :key="item.id">
            <router-link :to="`/home/xiaoxi?List=${item.content}`" class="lu">
              <img :src="item.author.avatar_url" alt="加载失败" class="imgs">
              <div>
                <p>{{item.author.loginname}}</p>
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="问答" name="four">
        <ul class="ul">
          <li v-for="item in arrList" :key="item.id">
            <router-link :to="`/home/xiaoxi?List=${item.content}`" class="lu">
              <img :src="item.author.avatar_url" alt="加载失败" class="imgs">
              <div>
                <p>{{item.author.loginname}}</p>
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </li>
        </ul>}</el-tab-pane>
      <el-tab-pane label="招聘" name="six">
        <ul class="ul">
          <li v-for="item in arrList" :key="item.id">
            <router-link :to="`/home/xiaoxi?List=${item.content}`" class="lu">
              <img :src="item.author.avatar_url" alt="加载失败" class="imgs">
              <div>
                <p>{{item.author.loginname}}</p>
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="客户端测试" name="seven">
        <ul class="ul">
          <li v-for="item in arrList" :key="item.id">
            <router-link :to="`/home/xiaoxi?List=${item.content}`" class="lu">
              <img :src="item.author.avatar_url" alt="加载失败" class="imgs">
              <div>
                <p>{{item.author.loginname}}</p>
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'H3',
  data() {
    return {
      activeName: 'one',
      arrList:[],
      allList:[]
    };
  },
  mounted() {
    axios('https://cnodejs.org/api/v1/topics').then(resolve=>{
      this.arrList = this.allList = resolve.data.data
      console.log(resolve.data.data)
    },reason=>{
      console.log(reason)
    })
  }
,
  methods: {
    handleClick(tab) {
      if(tab.index == 2){
        this.arrList = this.allList.filter((item,index)=>index<=10)
      }else if(tab.index == 3){
        this.arrList = this.allList.filter((item,index)=>index<=20 && index>=10)
      }else if(tab.index == 4){
        this.arrList = this.allList.filter((item,index)=>index<=30 && index>=20)
      }else{
        this.arrList = this.allList.filter((item,index)=>index<=40 && index>=30)
      }
    }
  }
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
  .xx_all{
    background: #1d1e23;
    padding: 20px;
  }
  .ul{
    padding: 30px;
  }
  .ul>li{
    margin: 10px;
    background: #CCC;
    padding: 10px 20px;
  }
  .imgs{
    width: 80px;
    height: 80px;

    border-radius: 50%;
  }
  .lu{
    display: flex;
    align-items: center;
  }
</style>