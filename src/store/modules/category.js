import { topCategory } from '@/api/constants';
import { findAllCategory } from '@/api/category';
// 分类模块
export default {
  namespaced: true,
  state() {
    return {
      // 分类信息
      list: topCategory.map((item) => ({ name: item }))
    };
  },
  mutations: {
    // 修改分类数据
    setList(state, payload) {
      state.list = payload; // 数组
    },
    // 修改当前一级分类下的open数据为true
    show(state, item) {
      const category = state.list.find((category) => category.id === item.id);
      category.open = true;
    },
    // 修改当前一级分类下的open数据为false
    hide(state, item) {
      const category = state.list.find((category) => category.id === item.id);
      category.open = false;
    }
  },
  actions: {
    // 获取分类数据
    async getList({ commit }) {
      let { result } = await findAllCategory();

      result.forEach((item) => {
        item.open = false;
      });

      commit('setList', result);
    }
  }
};
