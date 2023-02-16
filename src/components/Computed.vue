<template>
  <div class="computed-container">

    <h2>{{ mergeText2 }}</h2>
    <div class="input-area">
      <label for="firstText">第一個文字</label>
      <input id="firstText" v-model="firstText">
    </div>
    <div class="input-area">
      <label for="lastText">第二個文字</label>
      <input id="lastText" v-model="lastText">
    </div>
    <div class="input-area">
      <label for="onlyRead">Computed: only getter</label>
      <input id="onlyRead" v-model="mergeText1" disabled>
    </div>
    <div class="input-area">
      <label for="readWrite">Computed: getter and setter</label>
      <input id="readWrite" v-model="mergeText2">
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  setup(){
    const firstText = ref('Wonderful')
    const lastText = ref('world')

    let  mergeText1 = computed(() => {
      return firstText.value + ' ' + lastText.value;
    })

    let mergeText2 = computed({ 
      get:()=>{ 
        return `${firstText.value} ${lastText.value}`;
      }, 
      set:(val)=>{ 
        const textArr = val.split(' ');
        console.log(textArr);
        firstText.value = textArr[0];
        lastText.value = textArr[textArr.length - 1];
      } 
    })
    return {
      firstText,
      lastText,
      mergeText1,
      mergeText2
    }
  }
};
</script>

<style lang="scss">
@mixin flex-layout ($gap-size: 1em) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $gap-size;
}

.computed-container{
  margin: auto;
  @include flex-layout;

  h2{
    border-width:3px; border-color:#f4d804;
    border-style: ridge;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 20px 10px rgb(255, 255, 138);
    background: rgb(0, 0, 0);
    color: white;
  }
  .input-area{
    width: 30%;    
    border-bottom: 1px dotted #ce3232;
    padding: 1em;
    @include flex-layout($gap-size: .5em);
    label {
      font-size: 20px;
    }
    input {
      width: 200px;
      border: 1px solid rgb(131, 25, 131);
      border-radius: 5px
    }
  }
}
</style>