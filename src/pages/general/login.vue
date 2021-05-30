<template>
  <div
    class="container-login"
    id="particles-js"
    style="grid-template-rows: 200px 248px 200px"
  >
    <div class="empty"></div>
    <!-- <div class="lgsect"> -->
    <div class="login">
      <div class="login-top">登录</div>
      <div class="login-center clearfix">
        <div class="login-center-img">
          <img src="@/assets/images/name.png" />
        </div>
        <div class="login-center-input">
          <input
            type="text"
            v-model="userName"
            placeholder="请输入您的用户名"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入您的用户名'"
          />
          <div class="login-center-input-text">用户名</div>
        </div>
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img">
          <img src="@/assets/images/password.png" />
        </div>
        <div class="login-center-input">
          <input
            type="password"
            v-model="userPass"
            placeholder="请输入您的密码"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入您的密码'"
          />
          <div class="login-center-input-text">密码</div>
        </div>
      </div>
      <div style="justify-self: center; align-self: center">
        <div class="login-button" @click="login()">登录</div>
      </div>
    </div>
    <!-- </div> -->
    <div class="empty"></div>
  </div>
</template>
<script>
// import axiosPost from "../../config/common";
import CONFIG from "../../config/appconfig";
import tools from "../../config/serverapi";
export default {
  name:'login',
  data() {
    return {
      userName: "",
      userPass: "",
      part_up_height: 0,
    };
  },
  mounted() {
    this.part_up_height = document.body.clientHeight;
    let ui = tools.getObject(CONFIG.USER_KEY);
    if (ui) {
      this.userName = ui.user_id;
      this.userPass = ui.user_pw;
    }
  },
  methods: {
    login() {
      let userinfo = {
        user_id: this.userName,
        user_pw: this.userPass,
      };
      tools.saveObject(CONFIG.USER_KEY, userinfo);
      tools.axiosPost("soccer-api/login", userinfo).then((dds) => {
        console.log(dds.data);
        if (dds.data.status === true) {
          this.$store.dispatch('user/saveUserInfo',dds.data)
          tools.saveItem('token',dds.data.token)
          this.$router.replace('/fund');
        }
      });
    },
  },
};
</script>

<style scoped>
.container-login {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("../../assets/images/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  align-items: center;
}
.empty {
}

.lgsect {
  width: 100%;
  align-self: center;
}
.login {
  justify-self: center;
  width: 350px;
  border-radius: 5px;
  height: 248px;
  background: white;
  box-shadow: 0px 0px 5px #333333;
  display: grid;
  grid-template-rows: 80px 40px 40px 80px;
}

.login-top {
  font-size: 24px;
  color: #333333;
  align-self: center;
  justify-self: center;
}

.login-center {
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  margin-bottom: 30px;
}

.login-center-img {
  width: 20px;
  height: 20px;
  float: left;
  margin-top: 5px;
}

.login-center-img > img {
  width: 100%;
}

.login-center-input {
  float: left;
  width: 230px;
  margin-left: 15px;
  height: 30px;
  position: relative;
}

.login-center-input input {
  z-index: 2;
  transition: all 0.5s;
  padding-left: 10px;
  color: #333333;
  width: 100%;
  height: 30px;
  border: 0;
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  box-sizing: border-box;
  outline: none;
  position: relative;
}

.login-center-input input:focus {
  border: 1px solid dodgerblue;
}

.login-center-input-text {
  background: white;
  padding: 0 5px;
  position: absolute;
  z-index: 0;
  opacity: 0;
  height: 20px;
  top: 50%;
  margin-top: -10px;
  font-size: 14px;
  left: 5px;
  color: dodgerblue;
  line-height: 20px;
  transition: all 0.5s;
  -moz-transition: all 0.5s; /* Firefox 4 */
  -webkit-transition: all 0.5s; /* Safari 和 Chrome */
  -o-transition: all 0.5s; /* Opera */
}

.login-center-input input:focus ~ .login-center-input-text {
  top: 0;
  z-index: 3;
  opacity: 1;
  margin-top: -15px;
}

.login.active {
  -webkit-animation: login-small 0.8s;
  animation: login-small 0.8s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

.login-button {
  cursor: pointer;
  width: 250px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: dodgerblue;
  border-radius: 5px;
  margin: 0 auto;
  color: white;
}
</style>