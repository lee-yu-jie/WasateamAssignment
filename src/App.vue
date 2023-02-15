<template>
  <div class="container" >
    <nav>
      <router-link to="/">首頁</router-link> |
      <router-link to="/dynamicInput">組件Component</router-link> |
      <router-link to="/connectAPI">串接API</router-link>
    </nav>
    <router-view/>
  </div>

</template>

<script>
import ChangeTheme from './components/ChangeTheme.vue';
import { useHead } from 'unhead'
import { useRoute } from 'vue-router';
import { watch } from '@vue/runtime-core';
export default{
  components:{
    ChangeTheme
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
  // border: 0;
  margin: 0;
}
.container{
  background: var(--bg-color);
  min-height: 100vh;
}
nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #fbcb3a;
    }
  }
}
</style>
