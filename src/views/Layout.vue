<template>
  <AppTopnav />
  <header>header</header>
  <main>
    <RouterView />
  </main>
  <footer>footer</footer>
  <button @click="login">login</button>
  <button @click="exit">exit</button>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
export default {
  name: 'Layout',
  components: {
    AppTopnav
  }
}
</script>
