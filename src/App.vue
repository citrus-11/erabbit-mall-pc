<template>
  <button @click="fn">请求测试</button>
</template>

<script>
import request from '@/utils/request'

export default {
  setup() {
    const fn = () => {
      request('/member/profile', 'get', { a: 10 })
    }

    return {
      fn
    }
  }
}
</script>
