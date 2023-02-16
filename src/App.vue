<template>
  <div class="container" >
    <Navigation />
    <router-view/>
  </div>

</template>

<script>
import Navigation from './components/global/Navigation.vue';
import { useHead } from 'unhead'
import { useRoute } from 'vue-router';
import { watch } from '@vue/runtime-core';
export default{
  components:{
    Navigation
  },
  setup(){
    const route = useRoute()
    watch(route , () => {
      useHead({
        title: route.meta.title,
        meta: [
          {
            name: 'description',
            content: route.meta.description,
          },
        ],
      })
    }, 
    { 
      deep: true, 
      immediate: true
    })
    return{}
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
}
.container{
  background: rgb(245, 235, 255);
  min-height: 100vh;
}
</style>
