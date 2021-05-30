<template>
  <header class="header-background">
    <div class="in-side">
      <div class="">
        <div class="hover-btn" @click="toggleAside()">
          <i :class="showAside ? 'el-icon-s-fold' : 'el-icon-s-unfold'" />
        </div>
      </div>
      <div class="in-line-2 mr22">
        <div class="hover-btn" @click="fullScreen">
          <i class="el-icon-full-screen" />
        </div>
        <el-dropdown class="hover-btn text-text">
          <span>
            <i class="el-icon-user" /> {{ LoginUser.user_id }}
            <i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click.native="logout">
              <span style="display: block">登出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import screenfull from "screenfull";
import CONFIG from "../config/appconfig";
import tools from "../config/serverapi";
export default {
  data() {
    return {
      LoginUser: {},
    };
  },
  props: {
    showAside: { type: Boolean, default: true },
  },
  mounted() {
    let tmp = tools.getObject(CONFIG.USER_KEY);
    if (tmp) {
        console.log(tmp)
      this.LoginUser = tmp;
    }
    //   let ur = this.$store.state.user.userInfo
    //   console.log(ur)
    //   console.log(ur.UserID)
  },
  computed: {
    //   LoginUser(){
    //     return this.$store.state.user.userInfo
    //   }
  },
  methods: {
    fullScreen() {
      if (!screenfull.enabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
    toggleAside() {
      this.$emit("toggleAside");
    },
  },
};
</script>
<style>
</style>