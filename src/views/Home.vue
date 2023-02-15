<template>
  <home msg="Welcome to Your Vue.js App"/>
</template>

<script>
import home from '@/components/home.vue'
import { useHead } from 'unhead'
export default {
  components: {
    home
  },
  setup(){
//     useHead({
//   title: 'My Page',
//   meta: [
//     {
//       name: 'description',
//       content: 'My page description',
//     },
//   ],
// })

    return{}
  }
}
</script>
