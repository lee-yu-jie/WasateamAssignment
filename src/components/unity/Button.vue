<template >
  <button class="btn">{{ props.name }}</button>
</template>
<script>
export default {
  props: {
    name: String,
    color: String
  },
  setup(props){
    let color = props.color
    return{
      props
    }
  }
}
</script>
<style lang="scss" >

  .btn {
    --btnColor: v-bind(color);

    margin: .5em 1em;
    cursor: pointer;
    background: var(--btnColor);
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid rgb(215, 215, 215);
    border-style: groove;
  }
</style>