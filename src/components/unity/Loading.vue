<template lang="">
  <div class="loading-container" v-if="props.isLoading">
    <svg version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
    <circle fill="none" stroke="#fff" stroke-width="4" cx="50" cy="50" r="44" style="opacity:0.5;"/>
      <circle fill="#fff" stroke="#e74c3c" stroke-width="3" cx="8" cy="54" r="6" >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 48"
          to="360 50 52"
          repeatCount="indefinite" />
        
      </circle>
    </svg>
    <p>載入中</p>
  </div>
</template>
<script>
export default {
  props: {
    isLoading: Boolean
  },
  setup(props){

    return{
      props
    }
  }
}
</script>
<style lang="scss">
  .loading-container{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #0e023e9d;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    svg{
      width: 100px;
      height: 100px;
    }
    p{
      color: white;
      font-size: 25px;
      font-weight: 700
    };
  }
</style>