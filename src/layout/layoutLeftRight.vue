<template>
  <div
    class="bg-light text-text fz18 layoutLR"
  >
    <div class="leftSide">
        <headLogo></headLogo>
        <asideMenu></asideMenu>
    </div>
    <main class="text-textdark2">
      <div style="background: white; height: 100%">
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
      </div>
    </main>
  </div>
</template>
<script>
// import headTitle from "../components/headTitle";
import headLogo from "../components/headLogo";
import asideMenu from "../components/asideMenu";
export default {
  data() {
    return {
      showAside: true,
    };
  },
  components: { headLogo, asideMenu },
  computed: {
    key() {
      return this.$route.path + new Date().getTime();
    },
  },
  methods: {
    toggleAside() {
      this.showAside = !this.showAside;
    },
  },
};
</script>

<style lang="scss" scoped>
.layoutLR{
  display: grid;
  grid-template-columns: auto 1fr;
  &>*{
    overflow: hidden;
  }
}
.leftSide{
    display:grid;
    grid-template-rows:56px 1fr
}
.hover-button {
  line-height: 56px;
  font-size: 18px;
  padding: 0 16px;
  color: white;
  // padding:0;
  text-align: center;

  &:hover {
    background-color: #282d2f;
    cursor: pointer;
  }
}

main {
  height: calc(100vh - 56px);
  padding: 8px;
  overflow-y: scroll;
}
</style>
