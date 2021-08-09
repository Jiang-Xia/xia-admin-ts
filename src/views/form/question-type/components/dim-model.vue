<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-29 09:18:17
 * @LastEditTime: 2021-08-03 17:42:53
 * @Description:
 * @FilePath: \xia-admin\src\views\form\question-type\components\dim-model.vue
-->
<template>
  <div class="dim-container clearfix">

    <DimInput
      v-if="dimData.type==='input'"
      :key="String('DimInput_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <DimCheckbox
      v-if="dimData.type==='checkbox'"
      :key="String('DimCheckbox_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <DimRadio
      v-if="dimData.type==='radio'"
      :key="String('DimRadio_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <DimSelect
      v-if="dimData.type==='select'"
      :key="String('DimSelect_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <DimTextarea
      v-if="dimData.type==='textarea'"
      :key="String('DimTextarea_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
  </div>
</template>

<script>
import DimInput from './dim-input.vue'
import DimCheckbox from './dim-checkbox.vue'
import DimRadio from './dim-radio.vue'
import DimSelect from './dim-select.vue'
import DimTextarea from './dim-textarea.vue'

export default {
  components: {
    DimInput,
    DimCheckbox,
    DimRadio,
    DimSelect,
    DimTextarea
  },
  props: {
    dimData: {
      default: () => {},
      type: Object
    },
    questionIndex: {
      default: () => 0,
      type: Number
    }
  },
  data() {
    return {

    }
  },
  methods: {
    modifyHandle() {

    }
  }
}
</script>
