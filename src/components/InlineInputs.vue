<template>
  <div :class="inlineInputs()">
    <span :class="inlineInputs('label')">{{ label }}</span>
    <div :class="inlineInputs('row')">
      <div :class="inlineInputs('holder')">
        <input type="text" />
      </div>
      <div :class="inlineInputs('holder')">
        <input type="text" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import bem from "bem-ts";

const inlineInputs = bem("inline-inputs", { strict: false });

defineProps<{
  label?: string;
  first_input: {
    type: string | "text";
    placeholder?: string;
  };
}>();
</script>
<style lang="scss">
.inline-inputs {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__label {
    margin-bottom: 1rem;
  }

  &__row {
    display: flex;
    flex: 1;
  }

  &__holder {
    flex: 1;

    &:first-child {
      padding-right: 0.5rem;
    }

    &:last-child {
      padding-left: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 0.4rem;
      border: 0.5px solid #444444;
      outline: none;
      background-color: white;
      color: #444444;
    }
  }
}
</style>
