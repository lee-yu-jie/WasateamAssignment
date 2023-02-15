<template >
    <template v-if="props.type === 'text'">
      <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </template>

    <template v-else-if="props.type === 'radio'">
      <span v-for="option in props.options" :key="option.value" class="radio-container">
        <input type="radio" :id="option.value" :value="option.value" :name="modelValue" @change="$emit('update:modelValue', $event.target.value)">
        <label :for="option.value">{{ option.label }}</label>
      </span>
    </template>

    <template v-else-if="props.type === 'select'">
      <select :name="modelValue" @change="$emit('update:modelValue', $event.target.value)">
        <option 
          v-for="item in props.options" 
          :value="item.value" 
          :key="item.value" 
          :disabled="item.disabled"
          :selected="item.selected"
        >
          {{ item.label }}
        </option>
      </select>
    </template> 
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    type: String,
    options: Array,
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props){
    return {
      props,
    }
  }
}
</script>

<style lang="scss">
  input, label, select{
    cursor: pointer;
  }
  // .radio-container:not(:last-of-type){
  //   margin-right: 10px;
  // }
</style>