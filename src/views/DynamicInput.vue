<template>
  <div class="dynamic-input-container">

    <section class="card">
      <div class="card-body">
        <h2>文字輸入框</h2>
        <InputType type="text" v-model="inputText"/>
        <p>輸出：{{ inputText }}</p>
      </div>
    </section>
    
    <section class="card">
      <div class="card-body">
        <h2>單選框</h2>
        <InputType type="radio" v-model="radioValue" :options="radioOptions"/>
        <p>目前選中：{{ radioValue }}</p> 
      </div>
    </section>

    <section class="card">
      <div class="card-body">
        <h2>多選框</h2>
        <InputType type="select" v-model="selectedValue" :options="selectOptions"/>
        <p>目前選中：{{ selectedValue }}</p> 
      </div>

    </section>
  </div>
</template>

<script>
import InputType from '@/components/InputType.vue';
import Button from '@/components/Button.vue';
import { ref } from '@vue/reactivity';

export default {
  components: {
    InputType,
    Button 
  },
  setup(){
    const inputText = ref('')
    const radioValue = ref('')
    const selectedValue = ref('')
    const radioOptions = [
      {
        value: 'apple',
        label: '蘋果',
      },
      {
        value: 'banana',
        label: '香蕉',
      },      
      {
        value: 'grape',
        label: '葡萄',
      },
    ]
    const selectOptions = [
      {
        value: '',
        label: '請選擇',
        disabled: true,
        selected: true,
      },
      {
        value: 'rose',
        label: '玫瑰',
      },
      {
        value: 'tree',
        label: '樹木',
      },      
      {
        value: 'grass',
        label: '草地',
      },
    ]

    return{
      inputText,
      radioValue,
      radioOptions,
      selectedValue,
      selectOptions 
    }
  }
}

</script>

<style lang="scss">
.dynamic-input-container{
  .card{
    width: 30%;
    margin: auto;
    padding: 1em 0;
    margin-bottom: 3em;
    border-radius: 1em;
    box-shadow: 10px 10px 20px 10px rgb(218, 218, 218);
    .card-body{
      width: fit-content;
      margin: auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: .5em;
      p{
        text-align: left;
        word-break: break-all;
      }
    }
  }
}
</style>
