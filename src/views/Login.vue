<template>
  <div class="login">
    <div class="login_form">
      <h3 class="form_h3">欢迎登陆</h3>
      <el-form :rules="loginFormRul" ref="loginFormRel" :model="loginForm">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <div class="jzmm">
          <p>
            <el-checkbox v-model="checked">记住我</el-checkbox>
          </p>
          <p>
            <el-link :underline="false">忘记密码？</el-link>
          </p>
        </div>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { Message } from 'element-ui';
export default {
  name:'Login',
  data(){
    return {
      //表单请求数据
      loginForm: JSON.parse(localStorage.getItem('login')) || {
        username:'' ,
        password:'',
      },
      checked:true,
      //表单请求规则
      loginFormRul:{
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    //登录
    login(){
      //  登陆之前进行规则的校验，只有校验成功才能登陆
      this.$refs.loginFormRel.validate(vaild=>{
        if(!vaild) return
        localStorage.setItem('login',JSON.stringify({...this.loginForm,timer:new Date()}))
        this.$store.commit('USER',this.loginForm)
        this.$router.replace('/home')
        return Message({message:'登陆成功！'})
      })
    }
  },
  mounted(){
    console.log(localStorage.getItem('login'))
    console.log(this.loginForm)
  }
}
</script>

<style scoped>
  .login{
    width: 100vw;
    height: 100vh;
    background: #3c6c91;
  }
  .login_form{
    width: 300px;
    background: rgba(253, 252, 252,0.4);
    border-radius: 20px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 20px;
  }
  .form_h3{
    text-align: center;
    margin-bottom: 20px;
  }
  .btns{
    display: flex;
    justify-content: center;
  }
  .jzmm{
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
  }
</style>
