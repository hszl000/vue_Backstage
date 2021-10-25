<template>
  <div>
    <p class="p"><span class="sp"></span>系统首页</p>
    <div class="jbxx">
      <i class="el-icon-s-custom icons"></i>
      <div class="jbxx_ps">
        <p>登陆账号：{{user.username}}</p>
        <p>姓名:{{user.username}}</p>
        <p>上次登录时间：{{user.timer}}</p>
      </div>
    </div>
    <div class="jbxx_main">
      <Shuju title="数据情况" ico="el-icon-pie-chart">
        <template scope="dl">
          <ul class="sjqk">
            <li v-for="(item,index) in dl.arrList" :key="index">
              <i :class="[item.ico,'icons','slot_ico']"></i>
              <p>课程数：{{item.num}}</p>
            </li>
          </ul>
        </template>
      </Shuju>
      <Shuju title="学生统计" ico="el-icon-s-help">
        <template scope="dl">
          <div class="xstj">
            <ul>
              <li v-for="(item,index) of dl.arrList4" :key="index" class="xstj_li">
                <span>{{item.title}}</span>
                <div style="width:100%;height:.7rem;background:#000000;padding:1px;border-radius: 20px; overflow: hidden;margin:0px 10px">
                  <p :style="{'width':item.num+'%','background':'#59e899','height':'100%','borderRadius':'20px'}"></p>
                </div>
                <span>{{item.num}}</span>
              </li>
            </ul>
            <i class="el-icon-s-cooperation icon_xs"></i>
          </div>
        </template>
      </Shuju>
      <Shuju title="个人消息" ico="el-icon-message">
        <template scope="dl">
          <el-table
              :data="dl.arrList2"
              height="150"
              border
              style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="100">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="100">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
          </el-table>
        </template>
      </Shuju>
      <Shuju title="教务公告" ico="el-icon-message">
        <template scope="dl">
          <el-table
              :data="dl.arrList3"
              height="150"
              border
              style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="100">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="100">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
          </el-table>
        </template>
      </Shuju>
    </div>
  </div>
</template>

<script>
import Shuju from '../components/Shuju'
export default {
  name: "H1",
  components:{
    Shuju
  },
  data(){
    return {
      user:JSON.parse(localStorage.getItem('login')) || {},
    }
  }
}
</script>

<style scoped>
  .sp{
    padding: 3px;
    background: #51eb99;
    margin-right: 5px;
  }
  .p{
    padding: 8px;
    background: #141414;
  }
  .icons{
    font-size: 80px;
    color:#51eb99;
    margin-right: 8px;
    border-radius: 50%;
    border:3px solid #51eb99;
    overflow: hidden;
  }
  .jbxx{
    padding: 15px;
    background: #1d1e23;
    display: flex;
    border-bottom: 1px solid #2f3035;
  }
  .jbxx_ps{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .jbxx_main{
    background: #1d1e23;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  .jbxx_main>div{
    width: 49%;
    margin-bottom: 20px;

  }

  .sjqk{
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .slot_ico{
    font-size: 50px;
    margin: 20px;
  }
  .xstj{
    display: flex;
  }
  .xstj>ul{
    flex: 1;
  }
  .xstj_li{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .icon_xs{
    font-size:100px;
    color: #59e899;
    margin: 10px;
  }
</style>