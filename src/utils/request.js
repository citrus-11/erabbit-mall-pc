import axios from 'axios';
import store from '@/store';
import router from '@/router';

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/';

const instance = axios.create({
  baseURL,
  timeout: 5000
});

// 判断token是否存在，如存在附带到请求头中
instance.interceptors.request.use(
  (config) => {
    const { profile } = store.state.user;

    if (profile.token) {
      config.headers.Authorization = `Bearer ${profile.token}`;
    }

    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

// 过滤无效数据
instance.interceptors.response.use(
  // 如果有数据直接返回数据
  (res) => res.data,

  (err) => {
    // 清空无用用户信息
    store.commit('user/setUser', {});

    // 如果状态码为401未授权状态则跳转到登录页并附上回路地址uri
    if (err.response && err.response.status === 401) {
      // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。%%r == ??r
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath);
      router.push('/login?redirectUrl=' + fullPath);
    }

    Promise.reject(err);
  }
);

// 请求工具
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // 如果是post请求，则把数据放到data中
    // [表达式] 可以写表达式，此语法动态决定一个 key
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  });
};
