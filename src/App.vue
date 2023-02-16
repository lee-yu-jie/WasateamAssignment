<template>
  <div class="app-container" >
    <Navigation />
    <div class="button-area">
      <Button name="light" @click="toggleTheme('light')" color="#00cc00"/>
      <Button name="dark" @click="toggleTheme('dark')" color="#026b04"/>
    </div>

    <router-view/>
    
  </div>

</template>

<script>
import Navigation from './components/global/Navigation.vue';
import Button from './components/unity/Button.vue';
import { useHead } from 'unhead'
import { useRoute } from 'vue-router';
import { ref, watch } from '@vue/runtime-core';
export default{
  components:{
    Navigation,
    Button
  },
  setup(){
    const route = useRoute()
    const name = ref('aa')
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
    const toggleTheme = (mode) =>  {
      window.document.documentElement.setAttribute(
        "data-theme",
        mode === 'dark' ? "dark" : "light"
      )}
    toggleTheme('dark')
    return{
      toggleTheme,
      name
    }
  }
}
</script>

<style lang="scss">
 @import "./assets/scss/_handle.scss";

*{
  margin: 0;
}
.app-container{
  @include background_color("background_color");
  min-height: 100vh;
  .button-area {
    text-align: center;
    margin-bottom: 10px;
  }
}

p, h2, .code-link, .side-project-link{
  @include primary_font_color("primary_font_color");
}

label, h1 {
  @include title_font_color("title_font_color");
  
}
</style>
