<template >
  <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="/dynamicInput">組件Component</router-link> |
    <router-link to="/connectAPI">串接API</router-link> |
    <router-link to="/computed">Computed應用</router-link>
  </nav>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #7d97b0;
    text-decoration: none;
    font-size: 20px;
    &.router-link-exact-active {
      color: #ffdc2b;
    }
  }
}
</style>