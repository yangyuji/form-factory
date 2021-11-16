<template>
  <div :class="['comp-content', component.active ? 'active' : '']">
    {{ label }}：
    <el-input size="small" :placeholder="placeholder" v-model="value"></el-input>
  </div>
</template>

<script>
  export default {
    name: 'LocalPoint',
    props: {
      component: {
        type: Object
      },
      device: {
        type: String
      }
    },
    data() {
      return {
        config: this.component,
        value: this.component.base[4].val || ''
      }
    },
    computed: {
      label() {
        return this.config.base[0].val
      },
      placeholder() {
        return this.config.base[1].val
      }
    },
    watch: {
      component: {
        handler(val) {
          this.config = val
          this.value = val.base[4].val || ''
        },
        deep: true
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .page-faq {
    display: flex;

    .faq-item {

    }
  }
</style>
