import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginForm:{
      username:'',
      password:'',
    },
    arrList:[
      {
        id:'001',
        date: '2016-05-03',
        name: '张三',
        address: '上海市普陀区金沙江路 1518 弄',
        done:true
      }, {
        id:'002',
        date: '2016-05-02',
        name: '李四',
        address: '上海市普陀区金沙江路 1518 弄',
        done:false
      }, {

      id:'003',
        date: '2016-05-04',
        name: '王麻',
        address: '上海市普陀区金沙江路 1518 弄',
        done:true
      }
    ]
  },
  mutations: {
    USER(state,val){
      state.loginForm = {...val,timer:new Date()}
      localStorage.setItem('name',JSON.stringify(state.loginForm))
    },
    SAVELIST(state,val){
      state.arrList = val
    },
    UNSHIFT(state,val){
      state.arrList.unshift(val)
    }
  },
  actions: {
  },
  modules: {
  }
})
