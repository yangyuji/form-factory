<template>
  <div :class="['comp-content', component.active ? 'active' : '']">

    <div v-if="state == 'hidden'" class="hidden-mask"></div>

    <div class="pc-form-item">
      <label class="item-label">{{ label }}</label>
      <editor size="small" class="item-input"
              :min-height="minHeight"
              :read-only="state == 'readonly'"
              :placeholder="placeholder"
              :value="defaultValue">
      </editor>
      <div class="item-tips" v-if="tips" v-html="tips"></div>
    </div>

  </div>
</template>

<script>
  import Editor from '@/components/public/Editor'
  export default {
    name: 'RichText',
    components: {
      Editor
    },
    props: {
      component: {
        type: Object
      },
      device: {
        type: String
      },
      column: {
        type: Number
      }
    },
    data() {
      return {
        config: this.component,
        deviceType: this.device,
        deviceColumn: this.column
      }
    },
    computed: {
      label() {
        return this.config.base[0].val
      },
      placeholder() {
        return this.config.base[1].val || '请输入'
      },
      minHeight() {
        return this.config.base[2].val
      },
      state() {
        return this.config.base[3].val
      },
      defaultValue() {
        return this.config.base[4].val
      },
      tips() {
        return this.config.base[5].val
      }
    },
    watch: {
      component: {
        handler(val) {
          this.config = val
        },
        deep: true
      },
      device: {
        handler(val) {
          this.deviceType = val
        }
      },
      column: {
        handler(val) {
          this.deviceColumn = val
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comp-content {
    position: relative;

    &.disabled {
      background-color: #0086b3;
    }

    .hidden-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(150, 150, 150, 0.1);
      z-index: 99;
    }

    .pc-form-item {
      padding: 0 15px;

      .item-label {
        display: block;
        font-size: 14px;
        line-height: 28px;
        color: #333;
      }
      .item-input {
        width: 100%;
      }
      .item-tips {
        padding: 5px 5px 5px 0;
        line-height: 20px;
        font-size: 13px;
        color: #999;

        > i {
          font-size: 13px;
          color: #999;
        }
      }
    }
  }
</style>
