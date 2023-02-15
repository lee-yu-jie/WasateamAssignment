<template>
  <div class="container" >
    <input type="color" v-model="changeColor">
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

export default{
  components:{
    ChangeTheme
  },
  data() {
      return {
          changeColor: '#00cc00'
      }
  },
  computed: {
      bgProps() {
        return {
          '--bg-color': this.changeColor
        }
      }
  },
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
