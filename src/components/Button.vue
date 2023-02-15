<template >
  <button class="btn">{{ props.name }}</button>
</template>
<script>
export default {
  props: {
    name: String,
  },
  setup(props){
    // console.log(props.name);
    return{
      props
    }
  }
}
</script>
<style lang="scss" scoped>
  .btn {
    margin: .5em 1em;
    cursor: pointer;
    background: rgb(255, 72, 72);
    color: white;
  }
</style>