
<template>
  <div class="theme1" :style="bgProps">
      <div class="btn">
          <input type="color" v-model="changeColor">
      </div>
  </div>
</template>
<script>
export default {
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
.theme1{
  background: var(--bg-color);
  min-height: 100vh;
  // background-color: var(--bg-color);
  .btn > input{
      width: 30px;
      height: 30px;
  }
}
</style>