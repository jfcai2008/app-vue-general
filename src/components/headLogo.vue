<template>
  <div class="in-line-header-2 logo-background w210">
    <!-- <i class="iconfont icondanwei2 mr8 fz28" /> -->
    <img src="@/assets/images/logo.gif" height="30px" />
    <router-link to="/"> {{ appTitle }}</router-link>
  </div>
</template>

<script>
import CONFIG from "../config/appconfig";
export default {
  data() {
    return {
      appTitle: CONFIG.appTitle,
    };
  },
};
</script>
<style>
</style>