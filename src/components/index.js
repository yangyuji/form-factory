/**
 * 注册自定义组件
 */

import SingleInput from './base/singleInput'
import MultiInput from './base/multiInput'
import NumberInput from './base/numberInput'
import BaseCheckbox from './base/baseCheckbox'
import BaseDate from './base/baseDate'
import BaseDateRange from './base/baseDateRange'
import BaseDownload from './base/baseDownload'
import BaseRadio from './base/baseRadio'
import BaseSelect from './base/baseSelect'
import BaseRate from './base/baseRate'
import BaseSwitch from './base/baseSwitch'
import BaseUpload from './base/baseUpload'

import ChinaArea from './senior/chinaArea'
import FingerWrite from './senior/fingerWrite'
import JoinForm from './senior/joinForm'
import LocalPoint from './senior/localPoint'
import RichContent from './senior/richContent'
import RichText from './senior/richText'

export default {
  install(Vue) {
    Vue.component(SingleInput.name, SingleInput)
    Vue.component(MultiInput.name, MultiInput)
    Vue.component(NumberInput.name, NumberInput)
    Vue.component(BaseCheckbox.name, BaseCheckbox)
    Vue.component(BaseDate.name, BaseDate)
    Vue.component(BaseDateRange.name, BaseDateRange)
    Vue.component(BaseDownload.name, BaseDownload)
    Vue.component(BaseRadio.name, BaseRadio)
    Vue.component(BaseSelect.name, BaseSelect)
    Vue.component(BaseRate.name, BaseRate)
    Vue.component(BaseSwitch.name, BaseSwitch)
    Vue.component(BaseUpload.name, BaseUpload)

    Vue.component(ChinaArea.name, ChinaArea)
    Vue.component(FingerWrite.name, FingerWrite)
    Vue.component(JoinForm.name, JoinForm)
    Vue.component(LocalPoint.name, LocalPoint)
    Vue.component(RichContent.name, RichContent)
    Vue.component(RichText.name, RichText)
  }
}
