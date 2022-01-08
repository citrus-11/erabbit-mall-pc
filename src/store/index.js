import { createStore } from 'vuex';
import createPersistedstate from 'vuex-persistedstate';

// 购物车/用户持久化模块
import cart from './modules/cart';
import user from './modules/user';

// 分类模块不需要缓存
import category from './modules/category';

export default createStore({
  modules: { cart, user, category },
  plugins: [
    createPersistedstate({
      key: 'erabbit-mall-pc-store',
      paths: ['cart', 'user']
    })
  ]
});
