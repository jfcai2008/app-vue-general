<template>
  <aside class="text-text aside-background">
    <el-menu
      :default-active="$route.path"
      class="menu-background fz24"
      background-color="#BF1629"
      active-text-color1="navy"
      hover-background="#d32f2f"
      text-color="#ffffff"
      router
    >
      <div v-for="menu of routesMenu" :key="menu.path">
        <el-submenu
          v-if="menu.children.length > 1"
          :index="menu.path"
          class="menu-background fz24"
        >
          <template slot="title">
            <!-- <i :class="menu.icon" /> -->
            <i class="fz40" :class="menu.type"></i>
            <span class="">{{ menu.title }}</span>
          </template>
          <template>
            <el-menu-item
              v-for="sub of menu.children.filter(
                (r) => r.visible == null || r.visible == true
              )"
              :key="sub.path"
              class="hover-bg-dark"
              :index="menu.path + '/' + sub.path"
              >{{ sub.title }}</el-menu-item
            >
          </template>
        </el-submenu>
        <el-menu-item
          v-else
          :key="menu.path"
          :index="menu.path"
          class="hover-bg-dark"
        >
          <template slot="title">
            <!-- <i :class="menu.icon" /> -->
            <i class="fz40" :class="menu.type"></i>
            <span>{{ menu.title }}</span>
          </template>
        </el-menu-item>
      </div>
    </el-menu>
  </aside>
</template>

<script>
import { routesMenu } from "../router";
export default {
  data() {
    return {
      routesMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
aside {
  font-size: 24px;
  .el-menu-item,
  .el-submenu {
    i {
      color: white;
      margin-right: 16px;
      font-size: 20px;
    }
    span {
      font-size: 16px;
    }
  }
}
</style>