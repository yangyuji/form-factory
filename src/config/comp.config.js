/* const typeMap = {
  'text': '单行文本',
  'text-area': '多行文本',
  'switch': '开关',
  'upload': '上传控件',
  'select': '下拉选择',
  'radio-group': '单选',
  'checkbox-group': '多选',
  'color-picker': '颜色拾取器'
} */

module.exports = {
  'form-config': {
    title: '表单配置',
    pageId: '',
    pageName: '',
    base: [
      {
        type: 'radio-group',
        label: '列数',
        attr: 'column-number',
        val: 2,
        options: [
          {
            label: '1列',
            value: 1
          }, {
            label: '2列',
            value: 2
          }
        ]
      }, {
        type: 'radio-group',
        label: '表单尺寸',
        attr: 'size',
        val: 'small',
        options: [
          {
            label: '大',
            value: 'medium'
          }, {
            label: '中',
            value: 'small'
          }, {
            label: '小',
            value: 'mini'
          }
        ]
      }, {
        type: 'text',
        label: '提交文案',
        attr: 'label',
        val: '提交',
        place: '请输入'
      }
    ]
  },
  'single-input': {
    title: '单行文本',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '单行文本',
        place: '请输入'
      }, {
        type: 'text',
        label: '占位提示',
        attr: 'placeholder',
        val: '',
        place: '请输入'
      }, {
        type: 'switch',
        label: '清除按钮',
        attr: 'clear',
        val: true
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: '',
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'text',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请输入'
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: [
      {
        type: 'switch',
        label: '必填',
        attr: 'isNecessary',
        tips: '请输入',
        val: true
      }, {
        type: 'number',
        label: '最大输入',
        attr: 'max-length',
        tips: '最大输入',
        val: 64
      }, {
        type: 'number',
        label: '最小输入',
        attr: 'min-length',
        tips: '最小输入',
        val: 3
      }, {
        type: 'select',
        label: '常用校验',
        attr: 'rule-normal',
        val: [],
        options: [
          {
            label: '手机',
            value: 'phone'
          }, {
            label: '身份证',
            value: 'idCard'
          }, {
            label: '字母、数字及下划线',
            value: 'char'
          }, {
            label: '座机',
            value: 'tel'
          }, {
            label: '邮箱地址',
            value: 'mail'
          }, {
            label: '网址',
            value: 'http'
          }
        ]
      }, {
        type: 'text',
        label: '正则校验',
        attr: 'rule-regex',
        val: '',
        place: '输入正则表达式'
      }
    ]
  },
  'multi-input': {
    title: '多行文本',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '多行文本',
        place: '请输入'
      }, {
        type: 'text',
        label: '占位提示',
        attr: 'placeholder',
        val: '',
        place: '请输入'
      }, {
        type: 'number',
        label: '初始高度',
        attr: 'rows',
        val: 4
      }, {
        type: 'switch',
        label: '适应高度',
        attr: 'auto-size',
        val: false
      }, {
        type: 'switch',
        label: '清除按钮',
        attr: 'clear',
        val: true
      }, {
        type: 'switch',
        label: '计数器',
        attr: 'show-word-limit',
        val: true
      }, {
        type: 'radio-group',
        label: '缩放控制',
        attr: 'resize',
        val: '',
        options: [
          {
            label: '无',
            value: 'none'
          }, {
            label: '双向',
            value: 'both'
          }, {
            label: '横向',
            value: 'horizontal'
          }, {
            label: '竖向',
            value: 'vertical'
          }
        ]
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: '',
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'text',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请输入'
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: [
      {
        type: 'switch',
        label: '必填',
        attr: 'isNecessary',
        tips: '请输入',
        val: true
      }, {
        type: 'number',
        label: '最大长度',
        attr: 'max-length',
        tips: '最大输入',
        val: 64
      }, {
        type: 'number',
        label: '最小长度',
        attr: 'min-length',
        tips: '最小输入',
        val: 3
      }
    ]
  },
  'number-input': {
    title: '数值',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '数值',
        place: '请输入'
      }, {
        type: 'text',
        label: '占位提示',
        attr: 'placeholder',
        val: '',
        place: '请输入'
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: [],
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'text',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请输入'
      }, {
        type: 'number',
        label: '最大值',
        attr: 'max',
        val: 1
      }, {
        type: 'number',
        label: '最小值',
        attr: 'min',
        val: 10000
      }, {
        type: 'number',
        label: '计数步长',
        attr: 'step',
        val: 1
      }, {
        type: 'number',
        label: '数值精度',
        attr: 'precision',
        val: 0
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: [
      {
        type: 'switch',
        label: '必填',
        attr: 'isNecessary',
        tips: '请输入',
        val: true
      }
    ]
  },
  'base-select': {
    title: '下拉选择',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '下拉选择',
        place: '请输入'
      }, {
        type: 'text',
        label: '占位提示',
        attr: 'placeholder',
        val: '',
        place: '请输入'
      }, {
        type: 'switch',
        label: '清除按钮',
        attr: 'clear',
        val: true
      }, {
        type: 'switch',
        label: '可搜索',
        attr: 'filterable',
        val: false
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: [],
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'text',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请输入'
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    data: {
      type: 'static', // static, request
      request: {
        method: 'post',
        url: '',
        params: [
          {
            name: '',
            value: ''
          }
        ]
      },
      optionMap: {
        value: 'value',
        label: 'label'
      },
      options: [
        {
          label: '选项一',
          value: '选项一',
          default: true
        },
        {
          label: '选项二',
          value: '选项二',
          default: false
        }
      ]
    },
    rules: [
      {
        type: 'switch',
        label: '必选',
        attr: 'isNecessary',
        tips: '请选择',
        val: true
      }
    ]
  },
  'base-radio': {
    title: '单选',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '单选',
        place: '请输入'
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: [],
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'text',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请输入'
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    data: {
      type: 'static', // static, request
      request: {
        method: 'post',
        url: '',
        params: [
          {
            name: '',
            value: ''
          }
        ]
      },
      optionMap: {
        value: 'value',
        label: 'label'
      },
      options: [
        {
          label: '选项一',
          value: '选项一',
          default: true
        },
        {
          label: '选项二',
          value: '选项二',
          default: false
        }
      ]
    },
    rules: [
      {
        type: 'switch',
        label: '必选',
        attr: 'isNecessary',
        tips: '请选择',
        val: true
      }
    ]
  },
  'base-checkbox': {
    title: '复选',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '复选',
        place: '请输入'
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: [],
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'text',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请输入'
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    data: {
      type: 'static', // static, request
      request: {
        method: 'post',
        url: '',
        params: [
          {
            name: '',
            value: ''
          }
        ]
      },
      optionMap: {
        value: 'value',
        label: 'label'
      },
      options: [
        {
          label: '选项一',
          value: '选项一',
          default: true
        },
        {
          label: '选项二',
          value: '选项二',
          default: false
        }
      ]
    },
    rules: [
      {
        type: 'switch',
        label: '必选',
        attr: 'isNecessary',
        tips: '请选择',
        val: true
      }
    ]
  },
  'base-switch': {
    title: '开关',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '开关',
        place: '请输入'
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: [],
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'switch',
        label: '默认值',
        attr: 'default-value',
        val: false
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: []
  },
  'base-date': {
    title: '日期时间',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '日期时间',
        place: '请输入'
      }, {
        type: 'text',
        label: '占位提示',
        attr: 'placeholder',
        val: '',
        place: '请输入'
      }, {
        type: 'switch',
        label: '清除按钮',
        attr: 'clear',
        val: true
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: [],
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'text',
        label: '格式',
        attr: 'format',
        val: '',
        place: '默认：yyyy-MM-dd'
      }, {
        type: 'text',
        label: '默认值',
        attr: 'default-value',
        val: ''
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: [
      {
        type: 'switch',
        label: '必选',
        attr: 'isNecessary',
        tips: '请选择',
        val: true
      }
    ]
  },
  'base-date-range': {
    title: '日期区间',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '日期区间',
        place: '请输入'
      }, {
        type: 'text',
        label: '占位提示',
        attr: 'placeholder',
        val: '',
        place: '请输入'
      }, {
        type: 'switch',
        label: '清除按钮',
        attr: 'clear',
        val: true
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: [],
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'text',
        label: '格式',
        attr: 'format',
        val: '',
        place: '默认：yyyy-MM-dd'
      }, {
        type: 'text',
        label: '分隔符',
        attr: 'range-separator',
        val: '',
        place: '默认：-'
      }, {
        type: 'text',
        label: '开始占位',
        attr: 'start-placeholder',
        val: '',
        place: '默认：开始日期'
      }, {
        type: 'text',
        label: '结束占位',
        attr: 'end-placeholder',
        val: '',
        place: '默认：结束日期'
      }, {
        type: 'text',
        label: '分隔符',
        attr: 'range-separator',
        val: '',
        place: '默认：-'
      }, {
        type: 'text',
        label: '默认值',
        attr: 'default-value',
        val: ''
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: [
      {
        type: 'switch',
        label: '必选',
        attr: 'isNecessary',
        tips: '请选择',
        val: true
      }
    ]
  },
  'base-upload': {
    title: '上传',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '上传',
        place: '请上传'
      }, {
        type: 'switch',
        label: '多选',
        attr: 'multiple',
        val: false
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: '',
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'text',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请输入'
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: [
      {
        type: 'switch',
        label: '必填',
        attr: 'isNecessary',
        tips: '请上传',
        val: false
      }, {
        type: 'select',
        multiple: true,
        label: '格式要求',
        attr: 'accept',
        val: '',
        options: [
          {
            label: '.jpeg',
            value: 'jpeg'
          }, {
            label: '.jpg',
            value: 'jpg'
          }, {
            label: '.png',
            value: 'png'
          }, {
            label: '.gif',
            value: 'gif'
          }, {
            label: '.bmp',
            value: 'bmp'
          }, {
            label: '.webp',
            value: 'webp'
          }, {
            label: '.docx',
            value: 'docx'
          }, {
            label: '.doc',
            value: 'doc'
          }, {
            label: '.xlsx',
            value: 'xlsx'
          }, {
            label: '.xls',
            value: 'xls'
          }, {
            label: '.pdf',
            value: 'pdf'
          }, {
            label: '.mp4',
            value: 'mp4'
          }, {
            label: '.mov',
            value: 'mov'
          }, {
            label: '.mkv',
            value: 'mkv'
          }, {
            label: '.avi',
            value: 'avi'
          }, {
            label: '.wmv',
            value: 'wmv'
          }, {
            label: '.m4v',
            value: 'm4v'
          }, {
            label: '.wav',
            value: 'wav'
          }, {
            label: '.mp3',
            value: 'mp3'
          }, {
            label: '.ogg',
            value: 'ogg'
          }, {
            label: '.acc',
            value: 'acc'
          }
        ]
      }, {
        type: 'number',
        label: '大小限制',
        attr: 'limit-size',
        place: '文件最大限制，单位M',
        val: 5
      }
    ]
  },
  'base-rate': {
    title: '评分',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '评分',
        place: '请选择'
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: '',
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'number',
        label: '最大分值',
        attr: 'max',
        val: 5,
        place: '请输入'
      }, {
        type: 'switch',
        label: '显示分数',
        attr: 'show-score',
        val: false,
        tips: '和显示分数互斥'
      }, {
        type: 'switch',
        label: '允许半选',
        attr: 'allow-half',
        val: false
      }, {
        type: 'switch',
        label: '显示文字',
        attr: 'show-text',
        val: false,
        tips: '开启后，星级文字生效'
      }, {
        type: 'text',
        label: '一星文字',
        attr: 'level-1-text',
        val: '极差'
      }, {
        type: 'text',
        label: '二星文字',
        attr: 'level-2-text',
        val: '失望'
      }, {
        type: 'text',
        label: '三星文字',
        attr: 'level-3-text',
        val: '一般'
      }, {
        type: 'text',
        label: '四星文字',
        attr: 'level-4-text',
        val: '满意'
      }, {
        type: 'text',
        label: '五星文字',
        attr: 'level-5-text',
        val: '惊喜'
      }, {
        type: 'number',
        label: '默认值',
        attr: 'default-value',
        val: 0
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: [
      {
        type: 'switch',
        label: '必填',
        attr: 'isNecessary',
        tips: '请输入',
        val: true
      }
    ]
  },
  'china-area': {
    title: '省市区',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '省市区',
        place: '请输入'
      }, {
        type: 'text',
        label: '占位提示',
        attr: 'placeholder',
        val: '',
        place: '请输入'
      }, {
        type: 'switch',
        label: '清除按钮',
        attr: 'clear',
        val: true
      }, {
        type: 'switch',
        label: '可搜索',
        attr: 'filterable',
        val: false
      }, {
        type: 'switch',
        label: '完整路径',
        attr: 'show-all-levels',
        val: true
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: '',
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '禁用',
            value: 'disabled'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'china-area',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请选择'
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: [
      {
        type: 'switch',
        label: '必填',
        attr: 'isNecessary',
        tips: '请输入',
        val: true
      }
    ]
  },
  'rich-text': {
    title: '富文本',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '富文本',
        place: '请输入'
      }, {
        type: 'text',
        label: '占位提示',
        attr: 'placeholder',
        val: '',
        place: '请输入'
      }, {
        type: 'number',
        label: '最小高度',
        attr: 'min-height',
        val: 200
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: '',
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '只读',
            value: 'readonly'
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'rich-text',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请输入'
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: [
      {
        type: 'switch',
        label: '必填',
        attr: 'isNecessary',
        tips: '请输入',
        val: true
      }
    ]
  },
  'rich-content': {
    title: '图文展示',
    domId: '',
    domName: '',
    device: ['pc', 'phone'],
    base: [
      {
        type: 'text',
        label: '标题',
        attr: 'label',
        val: '图文展示',
        place: '请输入'
      }, {
        type: 'text',
        label: '占位提示',
        attr: 'placeholder',
        val: '',
        place: '请输入'
      }, {
        type: 'number',
        label: '最小高度',
        attr: 'min-height',
        val: 100
      }, {
        type: 'radio-group',
        label: '状态',
        attr: 'state',
        val: '',
        options: [
          {
            label: '普通',
            value: ''
          }, {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      }, {
        type: 'rich-text',
        label: '默认值',
        attr: 'default-value',
        val: '',
        place: '请输入'
      }, {
        type: 'text-area',
        label: '帮助提示',
        attr: 'helper-text',
        val: '',
        place: '可输入html代码'
      }
    ],
    rules: []
  }
}
