<template>
  <div>
    <el-header class="header">
      <el-radio-group v-model="tabPosition" class="btns">
        <el-radio-button label="all">全部</el-radio-button>
        <el-radio-button label="unDone">未完成</el-radio-button>
        <el-radio-button label="acc">已完成</el-radio-button>
      </el-radio-group>
      <div class="ipts">
        <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable>
        </el-input>
        <el-row>
          <el-button type="primary" @click="addList">添加</el-button>
        </el-row>
      </div>
    </el-header>
    <el-main>
      <el-table
          :data="List"
          height="490"
          row-key="id"
          border
          :style="{'width': '100%'}"
          :row-class-name="textdelect"
          @row-click="operFn"
      >
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import {nanoid} from 'nanoid'
export default {
  name: "H2",
  data() {
    return {
      tabPosition: 'all',
      input: '',
      List:[]
    }
  },
  mounted() {
    //展示全部
    this.List = this.$store.state.arrList
  }
,
  methods:{
    //判断添加类名删除线
    textdelect({row}) {
      if (row.done) {
        return 'textALign'
      } else {
        return ''
      }
    },
    // 完成 or 未完成
    operFn(row){
      //疑似对象引用。。。可以直接修改
      row.done = !row.done
    },
  //  点击添加
    addList(){
      //包装对象
      const ListObj = {name:this.input,date:dayjs().format('YYYY-MM-DD'),address: '上海市普陀区金沙江路 1518 弄',done:false,id:nanoid()}
      //调用vuex添加方法
      this.$store.commit('UNSHIFT',ListObj)
    }
  },
  watch:{
    tabPosition:{
      deep:true,
      handler(val){
        if(val === 'unDone'){ //展示未完成
          this.List = this.$store.state.arrList.filter(item=>!item.done)
        }else if( val === 'acc'){ //展示已完成
          this.List = this.$store.state.arrList.filter(item=>item.done)
        }else{ //展示全部
          this.List = this.$store.state.arrList
        }
      }
    }
  }
}
</script>

<style >
.header{
  background: #1d1e23;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ipts{
  display: flex;
}
.el-table .textALign{
  text-decoration:line-through red;
}
</style>