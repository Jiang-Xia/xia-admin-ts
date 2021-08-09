/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-03-24 09:43:12
 * @LastEditTime: 2021-08-09 16:53:11
 * @Description:
 * @FilePath: \xia-admin\src\store\modules\demo.ts
 */
export default {
  namespaced: true,
  state: {
    stepData: {
      input_list: [
        {
          input: 'input1'
        },
        {
          input: 'input2'
        }
      ],
      select: '1',
      checkbox: true
    }
  },
  mutations: {
    stepData: (state, stepData) => {
      state.stepData = Object.assign(state.stepData, stepData)
    }
  },
  actions: {

  }
}

