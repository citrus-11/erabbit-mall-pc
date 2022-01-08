<template>
  <AppTopnav />
  <AppHeader />
  <main class="app-body">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script>
// 顶部菜单
import AppTopnav from '@/components/app-topnav.vue';
// 分类导航
import AppHeader from '@/components/app-header.vue';
// 底部版权信息
import AppFooter from '@/components/app-footer.vue';
import { useStore } from 'vuex';
export default {
  name: 'Layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter
  },
  setup() {
    const store = useStore();
    store.dispatch('category/getList');
  }
};
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
