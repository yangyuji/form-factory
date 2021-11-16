<template>
  <div :class="['comp-content', component.active ? 'active' : '']">

    <div v-if="state == 'hidden'" class="hidden-mask"></div>

    <div class="pc-form-item">
      <label class="item-label">{{ label }}</label>
      <div class="rich-text"
           :style="{ minHeight: minHeight + 'px' }"
           v-html="defaultValue">
      </div>
      <div class="item-tips" v-if="tips" v-html="tips"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'RichContent',
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
        return this.config.base[4].val || '<div style="font-size:14px;color:#d0d3d9;">' + this.config.base[1].val + '</div>'
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
      .rich-text {
        width: 100%;
        line-height: 1.5;
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
