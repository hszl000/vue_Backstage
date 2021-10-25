<template>
  <div>
    <p class="zujian_p">
      <i :class="[ico,'ions']"></i>
      <span>{{ title }}</span>
    </p>
    <div class="zujian_div">
      <slot :arrList="arrList" :arrList2="arrList2" :arrList3="arrList3" :arrList4="arrList4">我是默认内容</slot>
    </div>
  </div>
</template>

<script>
export default {
name: "Shuju",
  props:['title','ico'],
  mounted(){
  console.log(this.title)
  },
  data(){
  return {
    arrList:[
      {ico:'el-icon-pie-chart',num:'289'},
      {ico:'el-icon-s-help',num:'18'},
      {ico:'el-icon-s-help',num:'18'},
    ],
    arrList2:[
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
    ],
    arrList3:[
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
    ],
    arrList4:[
      {title:"大一",num:28},
      {title:"大二",num:52},
      {title:"大三",num:18},
      {title:"大四",num:18},
    ]
  }
  }
}
</script>

<style scoped>
*{
  list-style: none;
}
  .zujian_p{
    background: #060606;
  }
  .ions{
    margin-right: 8px;
  }
  .zujian_div{
    padding: 15px;
    background: #333333;
  }
</style>