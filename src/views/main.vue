<template>
  <div class="app-body">
    <app-sidebar></app-sidebar>
    <div class="app-main">

      <div class="app-toolbar">
        <div class="device-btns">
          <i :class="['el-icon-monitor', pageType == 'pc' ? 'active' : '']"
             @click="pageType='pc'"></i>
          <i :class="['el-icon-mobile', pageType == 'phone' ? 'active' : '']"
             @click="pageType='phone'"></i>
        </div>
        <div class="bar-btn" @click="savePageSet">
          <i class="el-icon-circle-check"></i>
          <span> 保存</span>
        </div>
        <div class="bar-btn" @click="showPageSet">
          <i class="el-icon-setting"></i>
          <span> 表单设置</span>
        </div>
      </div>

      <div class="scroll-y">
        <div :class="[pageType == 'pc' ? 'app-pc' : 'app-phone']"
             @dragover.self="dragPhoneOver"
             @dragleave.self="dragPhoneLeave"
             @drop.self="dropPhone"
             @dragover.prevent>

          <!--占位提示控件-->
          <div class="place-holder"
               @dragover.stop="dragover"
               @dragleave.stop="dragleave"
               @drop.stop="drop"
               @dragover.prevent>放在这里
          </div>

          <template v-if="compList.length" v-for="(comp, idx) in compList">

            <div :class="['tpl-container', comp.active ? 'current' : '']"
                 :data-index="idx" @click.capture="clickComp">

              <component :is="comp.type" :component="comp" :device="pageType"
                         :column="pageConfig.base[0].val"></component>

              <!--控件操作-->
              <div class="comp-menu">
                <el-tooltip effect="dark" content="上移" placement="top">
                  <a href="javascript:void(0)"
                     :class="[idx == 0 ? 'disabled' : '']"
                     @click="upComp(idx)">
                    <i class="el-icon-arrow-up"></i>
                  </a>
                </el-tooltip>
                <el-tooltip effect="dark" content="下移" placement="top">
                  <a href="javascript:void(0)"
                     :class="[idx == compList.length - 1 ? 'disabled' : '']"
                     @click="downComp(idx)">
                    <i class="el-icon-arrow-down"></i>
                  </a>
                </el-tooltip>
                <el-tooltip effect="dark" content="删除" placement="top">
                  <a href="javascript:void(0)"
                     @click="delComp(idx)">
                    <i class="el-icon-delete"></i>
                  </a>
                </el-tooltip>
              </div>
            </div>

            <div class="place-holder"
                 @dragover.stop="dragover"
                 @dragleave.stop="dragleave"
                 @drop.stop="drop"
                 @dragover.prevent
                 :data-index="idx">放在这里
            </div>

          </template>
        </div>

      </div>
    </div>

    <form-option :option="currentConfig"></form-option>

  </div>
</template>

<script>
  import util from '@/utils/index'
  import appSidebar from './layout/sidebar.vue'
  import formOption from './layout/option.vue'
  // 组件默认配置
  import compConfig from '../config/comp.config.js'

  export default {
    name: 'AppMain',
    components: {
      appSidebar,
      formOption
    },
    data() {
      return {
        id: '',
        pageType: 'pc',
        compList: [],
        pageConfig: util.copyObj(compConfig['form-config']),
        currentIndex: -1,
        currentConfig: this.pageConfig
      }
    },
    mounted() {
      this.readLocalData()
      this.showPageSet()
    },
    watch: {
      compList: {
        handler(val) {
          if (val && val.length > 1) {
            localStorage.setItem('formDataSet', JSON.stringify({
              time: Date.now(),
              config: val
            }))
          }
        },
        deep: true
      },
      pageType: {
        handler(val) {
          localStorage.setItem('pageType', JSON.stringify({
            id: this.id || 'new-from',
            pageType: val
          }))
        }
      }
    },
    methods: {
      showPageSet() {
        this.resetCompUnchecked()
        this.currentIndex = -1
        this.currentConfig = this.pageConfig
      },
      savePageSet() {
        console.warn('save Info: ', JSON.stringify(this.compList))
        this.$message({
          message: '打开chomre devtool查看保存的信息！',
          type: 'success'
        })
      },
      readLocalData() {
        const tmp = localStorage.getItem('formDataSet')
        if (tmp) {
          const localData = JSON.parse(tmp)
          const t = util.parseTime(localData.time)
          this.$confirm('您有一份【' + t + '】未保存的编辑内容, 是否恢复到当前编辑界面？', '提示', {
            confirmButtonText: '载入',
            cancelButtonText: '丢弃',
            type: 'warning',
            center: true
          }).then(() => {
            this.compList = localData.config
            this.resetCompUnchecked()
          }).catch(() => {
            localStorage.setItem('formDataSet', '')
          })
        }
      },
      resetCompUnchecked() {
        this.compList.forEach((val) => {
          if (val.active) {
            val.active = false
          }
        })
      },
      addComp(index, key, icon) {
        const comp = util.copyObj(compConfig[key])
        const config = {
          type: key,
          icon: icon,
          active: true,
          domId: key + '-' + util.createDomID()
        }
        Object.assign(comp, config)
        this.compList.splice(index + 1, 0, comp)
        // 显示配置项
        this.currentIndex = index + 1
        this.currentConfig = comp
        // console.log(88888, comp)
      },
      clickComp(e) {
        const idx = parseInt(e.currentTarget.dataset.index)
        this.compList.forEach((val, index) => {
          if (index === idx) {
            val.active = true
            this.currentIndex = index
            this.currentConfig = val
          } else {
            val.active = false
          }
        })
      },
      upComp(idx) {
        if (idx < 1) return false
        // 复制当前控件
        const tmp = util.copyObj(this.compList[idx])
        this.compList.splice(idx, 1)
        this.compList.splice(idx - 1, 0, tmp)
        // 显示当前组件配置
        this.currentIndex = idx - 1
        this.currentConfig = this.compList[idx - 1]
      },
      downComp(idx) {
        if (idx === this.compList.length - 1) {
          return false
        }
        // 复制当前控件
        const tmp = util.copyObj(this.compList[idx])
        this.compList.splice(idx, 1)
        this.compList.splice(idx + 1, 0, tmp)
        // 显示当前组件配置
        this.currentIndex = idx + 1
        this.currentConfig = this.compList[idx + 1]
      },
      delComp(idx) {
        // 删除控件
        this.compList.splice(idx, 1)
        // 显示页面配置参数
        this.showPageSet()
      },
      dragover(e) {
        const target = e.target
        if (!target.classList.contains('active')) target.classList.add('active')
      },
      drop(e) {
        const target = e.target
        target.classList.remove('active')
        const key = e.dataTransfer.getData('cmp-type')
        const icon = e.dataTransfer.getData('cmp-icon')
        const idx = parseInt(target.dataset.index)
        if (compConfig[key]) {
          this.resetCompUnchecked()
          this.addComp(idx, key, icon)
        } else {
          this.$message.warning('没有查询到该组件的配置信息。。。')
        }
      },
      dragleave(e) {
        e.target.classList.remove('active')
      },
      dragPhoneOver() {
        const target = document.querySelector('.place-holder:last-child')
        if (target && !target.classList.contains('active')) target.classList.add('active')
      },
      dropPhone(e) {
        const target = document.querySelector('.place-holder:last-child')
        if (target) {
          target.classList.remove('active')
          const key = e.dataTransfer.getData('cmp-type')
          const icon = e.dataTransfer.getData('cmp-icon')
          const idx = parseInt(target.dataset.index)
          if (compConfig[key]) {
            this.resetCompUnchecked()
            this.addComp(idx, key, icon)
          } else {
            this.$message.warning('没有查询到该组件的配置信息。。。')
          }
        }
      },
      dragPhoneLeave() {
        const target = document.querySelector('.place-holder:last-child')
        target && target.classList.remove('active')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-body {
    display: flex;
    position: absolute;
    top: 94px;
    bottom: 0;
    width: 100%;
  }

  .app-main {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 377px;
    background-color: #f2f3f4;

    .scroll-y {
      flex: 1;
      width: 100%;
      overflow-y: auto;
    }

    .app-toolbar {
      position: relative;
      height: 38px;
      line-height: 42px;
      background-color: #fff;
      border-bottom: 1px solid #e8e8e8;

      .device-btns {
        float: left;

        i {
          margin-left: 5px;
          font-size: 18px;
          padding: 5px 7px;
          color: #666;
          cursor: pointer;

          &.active,
          &:hover {
            background-color: #f4f5f6;
          }
        }
      }

      .bar-btn {
        float: right;
        padding: 0 10px;
        font-size: 14px;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        cursor: pointer;
        color: #666;

        &:hover {
          background-color: #e8e8e8;
        }
      }
    }

    .app-phone {
      position: relative;
      box-sizing: border-box;
      width: 377px;
      min-height: 667px;
      padding: 0;
      margin: 30px auto;
      background-color: #fff;
    }

    .app-pc {
      margin: 10px;
      min-width: 560px;
      background-color: #fff;
      min-height: calc(100% - 20px);
    }

    .place-holder {
      position: relative;
      display: block;
      height: 10px;
      font-size: 0;

      &.active {
        height: 40px;
        line-height: 40px;
        border: 1px dashed #f32e37;
        background-color: #ffe800;
        color: #333;
        font-size: 14px;
        margin: 0;
        text-align: center;
      }
    }

    .tpl-container {
      position: relative;
      width: 100%;
      min-height: 28px;
      background-color: transparent;
      border: 1px solid #fff;
      transition: opacity .1s ease-out;
      user-select: none;
      box-sizing: border-box;
      z-index: auto;
      opacity: 1;
      cursor: pointer;

      &.current {
        border: 1px solid rgba(255, 68, 0, 0.6);

        &:hover {
          border-style: solid;
        }

        .comp-menu {
          display: block;
        }
      }

      &:hover {
        border: 1px dotted rgba(255, 68, 0, 1);
      }

      .comp-content {
        position: relative;
      }
    }

    .comp-menu {
      position: absolute;
      display: none;
      top: 0;
      right: 0;
      z-index: 100;

      > a {
        display: inline-block;
        position: relative;
        width: 30px;
        height: 26px;
        line-height: 24px;
        background-color: rgba(255, 68, 0, 0.6);

        text-align: center;
        font-size: 16px;
        color: #fff;

        &.disabled {
          background-color: rgba(220, 223, 230, 0.8);
        }

        &:hover {
          background-color: rgba(255, 68, 0, 1);

          &.disabled {
            background-color: rgba(220, 223, 230, 1);
          }
        }
      }
    }
  }
</style>
