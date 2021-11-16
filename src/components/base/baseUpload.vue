<template>
  <div :class="['comp-content', component.active ? 'active' : '']">

    <div v-if="state == 'hidden'" class="hidden-mask"></div>

    <div class="pc-form-item">
      <label class="item-label">{{ label }}</label>

      <el-upload v-if="multiple"
                 class="multiple-uploader"
                 :multiple="true"
                 :disabled="state == 'disabled'"
                 :show-file-list="false"
                 :on-success="uploadSuccess"
                 :on-progress="uploadProgress"
                 :on-error="uploadError"
                 :before-upload="beforeUpload">
        <ul class="el-upload-list el-upload-list--picture-card"
            v-if="fileList && fileList.length">
          <li class="el-upload-list__item"
              v-for="(file, n) in fileList">
            <div>
              <img :src="file" class="upload-image">
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span v-if="!['readonly', 'disabled'].includes(state)"
                  class="el-upload-list__item-delete"
                  @click.prevent.stop="removeMultipleUpload(n)">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </li>
        </ul>
        <template v-if="uploading">
          <el-progress :width="144" type="circle" :percentage="uploadPercent"></el-progress>
        </template>
        <template v-else>
          <i class="el-icon-plus image-uploader-icon"></i>
        </template>
      </el-upload>

      <el-upload v-else
                 class="image-uploader"
                 :multiple="false"
                 :disabled="state == 'disabled'"
                 :show-file-list="false"
                 :on-success="uploadSuccess"
                 :on-error="uploadError"
                 :on-progress="uploadProgress"
                 :before-upload="beforeUpload">
        <template v-if="uploading">
          <el-progress :width="144" type="circle" :percentage="uploadPercent"></el-progress>
        </template>
        <template v-else>
          <template v-if="fileList && fileList.length">
            <img :src="fileList"
                 class="upload-image" alt="">
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview">
                <i class="el-icon-zoom-in"></i>
              </span>
              <span v-if="!['readonly', 'disabled'].includes(state)"
                class="el-upload-list__item-delete"
                @click.prevent.stop="removeSingleUpload()">
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </template>
          <i v-else class="el-icon-plus image-uploader-icon"></i>
        </template>
      </el-upload>

      <div class="item-tips" v-if="tips" v-html="tips"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'BaseUpload',
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
        uploading: false,
        fileList: [],
        uploadPercent: 0,
        config: this.component,
        deviceType: this.device,
        deviceColumn: this.column
      }
    },
    computed: {
      label() {
        return this.config.base[0].val
      },
      multiple() {
        return this.config.base[1].val
      },
      state() {
        return this.config.base[2].val
      },
      defaultValue() {
        return this.config.base[3].val
      },
      tips() {
        return this.config.base[4].val
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
    },
    methods: {
      uploadProgress(e, file, fileList) {
        console.log('uploadProgress', e)
        this.uploading = true
        this.uploadPercent = parseInt(e.percent)
      },
      uploadSuccess(res, file, files) {
        this.uploading = false
        if (res && res.code === 200) {
          this.$alert('文件上传成功!', '提示')
          if (this.config.multiple) {
            this.fileList.push(res.data.id)
          } else {
            this.fileList = res.data.id
          }
        } else {
          this.$alert('文件上传失败' + res.msg, '提示')
        }
      },
      removeSingleUpload() {
        this.fileList = ''
      },
      removeMultipleUpload(idx) {
        this.fileList.splice(idx, 1)
      },
      uploadError(err, file, fileList) {
        this.uploading = false
        this.$alert('文件上传失败' + err, '提示')
      },
      beforeUpload(file) {
        const arr = file.name.split('.')
        const suffix = arr[arr.length - 1]
        let limitType = true
        if (suffix) {
          limitType = this.config.rules[1].val ? this.config.rules[1].val.includes(suffix.toLowerCase()) : true
        }
        const limitSize = this.config.rules[2].val ? file.size / 1024 / 1024 < parseInt(this.config.rules[2].val) : true
        if (!limitType) {
          this.$alert('上传文件只能是' + this.config.rules[1].val.join(',') + '格式!', '提示')
        }
        if (!limitSize) {
          this.$alert('上传文件大小不能超过' + this.config.rules[2].val + 'MB!', '提示')
        }
        return limitType && limitSize
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
        max-width: 300px;
      }
      .item-tips {
        padding: 5px;
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

  .image-uploader {
    line-height: 1;
    height: 144px;
    width: 144px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;

    &:hover {
      border-color: #409EFF;
    }

    .el-upload {
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;

      &:hover {
        .image-uploader-icon {
          color: #409EFF;
        }
      }
    }
  }

  .multiple-uploader {

    .el-upload {
      line-height: 1;
    }
    .el-upload-list--picture-card .el-upload-list__item {
      width: 144px;
      height: 144px;
    }
    .image-uploader-icon {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
    }
  }

  .upload-image {
    max-width: 100%;
    max-height: 100%;
  }

  .image-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 144px;
    height: 144px;
    line-height: 144px;
    text-align: center;
  }

  .el-upload-list__item-actions {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    cursor: default;
    text-align: center;
    color: #fff;
    opacity: 0;
    font-size: 20px;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s
  }

  .el-upload-list__item-actions:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle
  }

  .el-upload-list__item-actions span {
    display: none;
    cursor: pointer
  }

  .el-upload-list__item-actions span + span {
    margin-left: 15px
  }

  .el-upload-list__item-actions .el-upload-list__item-delete {
    position: static;
    font-size: inherit;
    color: inherit
  }

  .el-upload-list__item-actions:hover {
    opacity: 1
  }

  .el-upload-list__item-actions:hover span {
    display: inline-block
  }
</style>
