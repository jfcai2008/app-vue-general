<template>
  <div>
    <tabbed-page v-model="tab" :tabs="tabs" @change="tabChange">
      你当前选择的是：{{tabs[tab].title}}
    </tabbed-page>

  </div>
</template>
<script>
import { fronts } from "../../datas/frontend";
export default {
  data() {
    return {
      tabs: fronts,
      tab: 0,
    };
  },
  methods: {
    tabChange(tab) {
      console.log(tab);
    },
  },
};
</script>

<style lang="sass" scoped>
</style>