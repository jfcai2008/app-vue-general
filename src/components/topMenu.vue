<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="menu-background fz24"
      background-color="#BF1629"
      active-text-color1="navy"
      hover-background="#d32f2f"
      text-color="#ffffff"
      mode="horizontal"
      router
    >
      <div v-for="menu of routesMenu" :key="menu.path">
        <el-submenu
          v-if="menu.children.length > 1"
          :index="menu.path"
          class="menu-background fz24"
        >
          <template slot="title">
            <!-- <i :class="menu.icon" class="fz18" /> -->
            <i class="fz20" :class="menu.type" style="color:blue"></i>
            <span class="fz18 ml5">{{ menu.title }}</span>
          </template>
          <template>
            <el-menu-item
              v-for="sub of menu.children.filter(
                (r) => r.visible == null || r.visible == true
              )"
              :key="sub.path"
              class="hover-bg-dark"
              :index="menu.path + '/' + sub.path"
              ><i class="fz18 el-icon-right"></i>{{ sub.title }}</el-menu-item
            >
          </template>
        </el-submenu>
        <el-menu-item
          v-else
          :key="menu.path"
          :index="menu.path"
          class="hover-bg-dark"
        >
          <div slot="title">
            <i :class="menu.icon" />
            <span class="fz18 ml5">{{ menu.title }}</span>
          </div>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
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
/* 水平样式 */
.el-menu--horizontal > div > .el-submenu {
  float: left;
}
/* 一级菜单的样式 */
.el-menu--horizontal > div > .el-menu-item {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}
/* 解决下图1 下拉三角图标 */
.el-menu--horizontal > div > .el-submenu .el-submenu__icon-arrow {
  position: static;
  vertical-align: middle;
  margin-left: 8px;
  margin-top: -3px;
}
/* 解决下图2 无下拉菜单时 不对齐问题 */
.el-menu--horizontal > div > .el-submenu .el-submenu__title {
  height: 60px;
  line-height: 60px;
  border-bottom: 2px solid transparent;
  color: #909399;
}
</style>