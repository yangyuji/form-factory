<template>
  <div class="app-option">
    <el-tabs :stretch="true" value="base" v-if="optionList">
      <el-tab-pane label="属性" name="base">
        <div class="option-title">
          <i :class="['fa', optionList.icon]"></i> {{optionList.title}}
        </div>

        <div class="options-panel">
          <el-form class="base-form" label-width="78px" label-position="right" size="mini">
            <template v-if="optionList.base && optionList.base.length"
                      v-for="opt in optionList.base">
              <el-form-item v-if="opt.type == 'text'"
                            class="small" :label="opt.label + '：'">
                <el-input size="mini" maxlength="30" clearable
                          v-model="opt.val" style="width:200px;"
                          :placeholder="opt.place"></el-input>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'select'"
                            class="small" :label="opt.label + '：'">
                <el-select v-if="opt.options && opt.options.length"
                           size="mini" maxlength="30"
                           v-model="opt.val" style="width:200px;"
                           :multiple="opt.multiple"
                           :placeholder="opt.place">
                  <el-option
                    v-for="item in opt.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'number'"
                            class="small" :label="opt.label + '：'">
                <el-input-number size="mini" :min="0" :step="1" :precision="0"
                                 :max="1000" v-model="opt.val"></el-input-number>
                <span v-if="opt.tips" class="option-helper">
                  <i class="fa fa-info"></i>
                  {{ opt.tips }}
                </span>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'switch'"
                            class="small" :label="opt.label + '：'">
                <el-switch size="mini" v-model="opt.val"></el-switch>
                <span v-if="opt.tips" class="option-helper">
                  <i class="fa fa-info"></i>
                  {{ opt.tips }}
                </span>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'radio-group'"
                            class="small" :label="opt.label + '：'">
                <el-radio-group v-if="opt.options && opt.options.length"
                                v-model="opt.val" size="mini">
                  <el-radio-button v-for="(item, i) in opt.options"
                                   :key="i" :label="item.value">
                    {{ item.label }}
                  </el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'checkbox-group'"
                            class="small" :label="opt.label + '：'">
                <el-checkbox-group v-if="opt.options && opt.options.length"
                                   v-model="opt.val" size="mini">
                  <el-checkbox-button v-for="(item, i) in opt.options"
                                      :key="i" :label="item.value">
                    {{ item.label }}
                  </el-checkbox-button>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'text-area'"
                            class="small" :label="opt.label + '：'">
                <el-input type="textarea" size="mini" :placeholder="opt.place" v-model="opt.val"></el-input>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'rich-text'"
                            class="small" :label="opt.label + '：'">
                <el-button type="primary" size="mini">设置高级内容</el-button>
                <span class="option-helper">
                  <i class="fa fa-info"></i>
                  编辑富文本内容
                </span>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'china-area'"
                            class="small" :label="opt.label + '：'">
                <el-cascader size="mini" class="item-input" style="width:230px;"
                             :options="regionData"
                             :clearable="true"
                             :placeholder="opt.place"
                             v-model="opt.val">
                </el-cascader>
              </el-form-item>
            </template>
          </el-form>

          <el-form v-if="optionList.data" label-width="86px"
                   label-position="right" size="mini">
            <h3>数据</h3>
            <el-form-item class="small" label="数据类型：">
              <el-radio-group size="mini" v-model="optionList.data.type">
                <el-radio-button label="static">静态数据</el-radio-button>
                <el-radio-button label="request">动态数据</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <template v-if="optionList.data.type == 'request'">
              <el-form-item class="small" label="请求方式：">
                <el-radio-group size="mini" v-model="optionList.data.request.method">
                  <el-radio-button label="get">GET</el-radio-button>
                  <el-radio-button label="post">POST</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item class="small" label="接口地址：">
                <el-input size="mini" maxlength="30" clearable
                          v-model="optionList.data.request.url" style="width:165px;"
                          placeholder="请选择接口地址"></el-input>
                <el-button plain size="mini">选择</el-button>
              </el-form-item>
              <el-form-item class="small" label="label字段：">
                <el-input size="mini" v-model="optionList.data.optionMap.label"
                          placeholder="输入label字段名" style="width:180px;" clearable/>
              </el-form-item>
              <el-form-item class="small" label="value字段：">
                <el-input size="mini" v-model="optionList.data.optionMap.value"
                          placeholder="输入value字段名" style="width:180px;" clearable/>
              </el-form-item>
              <el-form-item class="small" label="请求参数：">
                <span class="option-helper">
                  <i class="fa fa-info"></i>
                  ${key} 动态获取地址栏 ? 后的参数值
                </span>
              </el-form-item>
              <div class="static-data-list" style="margin-top:-10px;">
                <div class="static-data-item" style="margin-left:10px;"
                     v-for="(param, idx) in optionList.data.request.params">
                  <el-input size="mini" v-model="param.label"
                            placeholder="输入参数名" style="width:140px;" clearable>
                    <template slot="prepend">参数名:</template>
                  </el-input>
                  <el-input size="mini" v-model="param.value"
                            placeholder="输入参数值" style="width:140px;" clearable>
                    <template slot="prepend">参数值:</template>
                  </el-input>
                  <i class="el-icon-delete" @click="optionList.data.request.params.splice(idx, 1)"></i>
                </div>
                <el-button style="margin-left:10px;" plain type="primary" size="mini"
                           @click="optionList.data.request.params.push({
                         label: '选项一',
                         value: '',
                         default: false
                       })">添加一项</el-button>
              </div>
            </template>

            <div v-else class="static-data-list">
              <div class="static-data-item" v-for="(opt, idx) in optionList.data.options">
                <i :class="['el-icon-circle-check', opt.default ? 'checked' : '']"
                   @click="setDefaultOption(optionList.data.options, idx)"></i>
                <el-input size="mini" v-model="opt.label"
                          placeholder="输入显示值" style="width:130px;" clearable>
                  <template slot="prepend">显示值:</template>
                </el-input>
                <el-input size="mini" v-model="opt.value"
                          placeholder="输入选项值" style="width:130px;" clearable>
                  <template slot="prepend">选项值:</template>
                </el-input>
                <i class="el-icon-delete" @click="optionList.data.options.splice(idx, 1)"></i>
              </div>
              <el-button style="margin-left:10px;" plain type="primary" size="mini"
                         @click="optionList.data.options.push({
                         label: '选项一',
                         value: '',
                         default: false
                       })">添加一项</el-button>
            </div>
          </el-form>

          <el-form v-if="optionList.rules && optionList.rules.length"
                   label-width="78px" label-position="right" size="mini">
            <h3>校验</h3>
            <template v-for="opt in optionList.rules">
              <el-form-item v-if="opt.type == 'text'"
                            class="small" :label="opt.label + '：'">
                <el-input size="mini" maxlength="30" clearable
                          v-model="opt.val" style="width:200px;"
                          :placeholder="opt.place"></el-input>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'select'"
                            class="small" :label="opt.label + '：'">
                <el-select v-if="opt.options && opt.options.length"
                           size="mini" maxlength="30"
                           v-model="opt.val" style="width:200px;"
                           :multiple="opt.multiple"
                           :placeholder="opt.place">
                  <el-option
                    v-for="item in opt.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'number'"
                            controls-position="right"
                            class="small" :label="opt.label + '：'">
                <el-input-number size="mini" :min="0" :step="1" :precision="0"
                                 :max="1000" v-model="opt.val"></el-input-number>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'switch'"
                            class="small" :label="opt.label + '：'">
                <el-switch size="mini" v-model="opt.val"></el-switch>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'radio-group'"
                            class="small" :label="opt.label + '：'">
                <el-radio-group v-if="opt.options && opt.options.length"
                                v-model="opt.val" size="mini">
                  <el-radio-button v-for="(item, i) in opt.options"
                                   :key="i" :label="item.value">
                    {{ item.label }}
                  </el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item v-else-if="opt.type == 'text-area'"
                            class="small" :label="opt.label + '：'">
                <el-input type="textarea" size="mini" :placeholder="opt.place" v-model="opt.val"></el-input>
              </el-form-item>
            </template>
          </el-form>

        </div>
      </el-tab-pane>

      <el-tab-pane v-if="optionList.type" label="高级" name="senior">
        <div class="option-title">
          <i :class="['fa', optionList.icon]"></i> {{optionList.title}}
        </div>

        <div class="options-panel">
          <el-form class="base-form" label-width="76px" label-position="right" size="mini">
            <el-form-item class="small" label="唯一标识：">
              <el-input size="mini" v-model="optionList.domId"></el-input>
            </el-form-item>
            <el-form-item class="small" label="显示设备：">
              <el-checkbox-group v-model="optionList.device" size="mini">
                <el-checkbox-button label="pc">电脑</el-checkbox-button>
                <el-checkbox-button label="phone">手机</el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item class="small" label="数据提交：">
              <el-radio-group v-model="optionList.submit" size="mini">
                <el-radio-button label="show">仅显示时提交</el-radio-button>
                <el-radio-button label="all">始终提交</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item class="small" label="行为设置：">
              <el-button type="primary" size="mini">新建动作</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { regionData } from 'element-china-area-data'
  export default {
    name: 'FormOption',
    components: {},
    props: {
      option: {
        type: Object
      }
    },
    data() {
      return {
        cascaderIdx: 0,
        regionData: regionData,
        departData: [],
        optionList: this.option,
        actionShow: false,
        dataShow: false
      }
    },
    watch: {
      option: {
        handler(val) {
          if (val) {
            this.cascaderIdx++
            this.optionList = val
          }
        },
        deep: true
      }
    },
    methods: {
      setDefaultOption(options, idx) {
        options.forEach((item, i) => {
          if (i === idx) item.default = true
          else item.default = false
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .app-option {
    width: 320px;
    padding: 0;
    overflow: hidden;
    border-left: 1px solid #e8e8e8;

    .el-tabs__header {
      margin-bottom: 0px;
    }

    .option-title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0;
      background-color: #fff;
      padding: 9px 5px 6px 15px;
      border-bottom: 1px solid #e8e8e8;
      font-size: 14px;
      color: #333;
      z-index: 99;

      > i {
        font-size: 14px;
      }
    }

    .options-panel {
      margin-top: 36px;
      width: 100%;
      height: calc(100vh - 168px);
      overflow-y: auto;

      .el-form {

        &.base-form {
          margin-top: 10px;
        }

        > h3 {
          background-color: #f2f3f4;
          padding: 5px 0 5px 10px;
          margin: 20px 0 10px 0;
          font-size: 14px;
          font-weight: 500;
        }

        .el-form-item.small {
          margin-right: 10px;
          margin-bottom: 10px;

          .el-date-editor.el-input {
            width: 186px;
            .el-input__inner {
              padding-left: 30px !important;
            }
          }

          .el-input__inner {
            padding: 0 10px;
          }

          .el-textarea__inner {
            padding: 5px 10px;
          }

          .el-form-item__label {
            padding-right: 0;
            font-size: 13px;
          }
        }

        .option-helper {
          margin-left: 5px;
          font-size: 12px;
          color: #666;

          i {
            font-size: 13px;
            color: #666;
          }
        }

        .static-data-list {
          margin-left: 5px;

          .static-data-item {
            margin-bottom: 5px;

            .el-icon-circle-check {
              padding: 3px 4px;
              cursor: pointer;
              color: rgba(153, 153, 153, 0.7);

              &.checked {
                color: #135df3;
              }

              &:hover {
                background-color: rgba(229, 229, 229, 0.3);
              }
            }

            .el-icon-delete {
              cursor: pointer;
              color: #ff0000;
              margin-left: 5px;
            }
          }

          .el-input-group__append, .el-input-group__prepend {
            padding: 0 5px;
          }

          .el-radio--mini {
            margin-left: 5px;
            margin-right: 0;
            padding: 5px 0px 0 10px;
          }
        }
      }
    }
  }
</style>
