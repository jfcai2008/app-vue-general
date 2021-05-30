<template>
  <div class="main">
    <el-card v-if="!hideSearch" shadow="hover">
      <div class="region region-search" style="margin-bottom: -8px;">
        <slot name="search" />
        <el-tabs v-if="!!tabs" v-model="tabIndex" @tab-click="tabClick">
          <el-tab-pane v-for="(tab,i) of tabs" :key="i">
            <!-- <span slot="label" class="fz40 m16"><i class="iconfont iconqingdan fz48" /> 基本情况</span> -->
            <div slot="label" class=" m8 fz20 text-dark text-center hover-card">
              <!-- <i class="iconfont  fz80" :class="tab.icon" /> <p class="m-">{{ tab.title }}</p> -->
              <i class="fz40" :class="tab.type"></i><p class="m-">{{ tab.title }}</p>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
    <el-card class="mt16" style="min-height: 100vh" shadow="hover">
      <div v-if="$slots.intro||$slots.action" class="region  in-side mb16">
        <div>
          <slot name="intro" />
        </div>
        <!-- <span><el-divider v-if="!hideIntro" direction="vertical" />
          <slot name="action" />
        </span> -->
        <div>
          <slot name="action" />
        </div>
      </div>
      <div v-else class="mt-8" />
      <slot />
    </el-card>
  </div>
</template>
<script>
export default {
  props: {
    hideSearch: { type: Boolean },
    // hideTabs: { type: Boolean },
    hideAction: { type: Boolean, default: true },
    hideIntro: { type: Boolean, default: true },
    tabs: { type: Array, default: () => [] }
    // tabChange: { type: Function, default: () => () => {} }
  },
  data() {
    return {
      tabIndex: 0
    }
  },
  watch: {
    tabIndex(n) {
      this.$emit('tab-change', n)
    }
  },
  methods: {
    tabClick() {
      this.$emit('input', this.tabIndex)
      this.$emit('change', this.tabIndex, this.tabs[this.tabIndex])
    }
  }

}
</script>

<style lang="scss" scoped>
.main {
  margin: 16px;
}
</style>
<style lang="scss">

.main {
  .region {
    .el-divider--vertical {
      margin: 0 16px;
    }
    .search-width {
      padding: 0 20px;
      word-wrap: break-word;
      white-space: nowrap;
      .font {
        color: #ccc;
      }
    }
    &-search {
      .el-form--inline .el-form-item {
        margin: 0 8px 8px 0;
      }
    }
  }
  .el-card__body {
    padding: 16px;
  }
}
</style>
