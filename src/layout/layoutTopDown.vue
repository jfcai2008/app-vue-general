<template>
  <div class="bg-light text-text fz18 layout3">
    <topMenu></topMenu>
    <main class="text-textdark2">
      <div style="background-color: white; height: 100%">
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
      </div>
    </main>
  </div>
</template>
<script>
import topMenu from "../components/topMenu";
export default {
  data() {
    return {
    };
  },
  components: { topMenu },
  computed: {
    key() {
      return this.$route.path + new Date().getTime();
    },
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
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
  margin: 8px;
  height: calc(100vh - 56px);
  overflow-y: scroll;
}
</style>
