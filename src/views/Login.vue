<template>
  <div class="login">
    <div class="header">登录</div>
    <div class="container">
      <input type="text" placeholder="请输入用户名" v-model="phone">
      <span class="left"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="bottom"></span>
    </div>
    <div class="container1">
      <input type="password" placeholder="请输入密码" v-model="password">
      <span class="left"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="bottom"></span>
    </div>
    <div class="btn" @click="Login">登录</div>
  </div>
</template>

<script>
import {getUserDetail} from '@/request/api/home.js'
export default {
  data(){
    return {
      phone:'',
      password:''
    }
  },
  methods: {
    Login:async function(){
      let res=await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
      console.log(res);
      if(res.data.code==200)
      {
        this.$store.commit('updateIsLogin',true)
        this.$store.commit('updateToken',res.data.token)
        let result=await getUserDetail(res.data.account.id)
        this.$store.commit('updateUser',result)
        this.$router.push('/infoUser')
      }
      else{
        alert('手机号或者密码错误')
        this.password=''
      }
    }
    
  },
}
</script>

<style lang="less" scoped>
  .login {
          width: 100%;
          height: 13.34rem;
            border-radius: 15px;
            padding: 0 50px;
            position: relative;
            left: 50%;
            top: 6.7rem;
            transform: translate(-50%, -50%);
            background-color: #282c34;        
            .header {
            font-size: .76rem;
            font-weight: bold;
            text-align: center;
            line-height: 4rem;
            color: #61dafb;
        }
        .container {
            height: .6rem;
            width: 5rem;
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);
        }

        input {
            width: 100%;
            height: 100%;
            position: relative;
            outline: none;
            border: none;
            box-sizing: border-box;
            padding-left: .1rem;
            background-color: #282c34;
            color: #61dafb;
            caret-color: #61dafb;
        }
        input::placeholder {
            color: #61dafb;
        }

        span {
            position: absolute;
            content: "";
            display: block;
            background-color: #61dafb;
            transition: transform .1s ease-in-out;
        }
        .top,
        .bottom {
            left: 0px;
            right: 0px;
            height: .04rem;
        }
        .left,
        .right {
            top: 0px;
            bottom: 0px;
            width: .04rem;
            transform: scaleY(0);
        }
        .top {
            top: 0px;
            transform: scaleX(0);
            transform-origin: left center;
            transition-delay: .2s;
        }
        .left {
            left: 0px;
            transform-origin: bottom center;
            transition-delay: .3s;
        }
        .bottom {
            bottom: 0px;
        }
        .right {
            right: 0px;
            transform-origin: top center;
            transition-delay: .1s;
        }
        input:focus ~ .right {
            transform: scaleY(1);
            transform-origin: bottom center;
        }
        input:focus ~ .left {
            transform: scaleY(1);
            transform-origin: top center;
        }
        input:focus ~ .top {
            transform: scaleY(1);
            transform-origin: right center;
        }
        .container1 {
            height: .6rem;
            width: 5rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .btn {
            position: absolute;
            left: 50%;
            top: 54%;
            transform: translate(-50%, -50%);
            text-align: center;
            padding: .1rem;
            width: 52%;
            margin-top: .8rem;
            background-color: #61dafb;
            color: #fff;
        }
        }

</style>