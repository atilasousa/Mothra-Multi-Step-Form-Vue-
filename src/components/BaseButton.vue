<template>
  <button @click="$emit('click')" :class="baseButtonClass()">
    <slot />
  </button>
</template>
<script lang="ts" setup>
import bem from "bem-ts";

const baseButtonClass = bem("base-button", { strict: false });
</script>
<style lang="scss">
.base-button {
  padding: 0.6rem 0.5rem;
  color: white;
  margin-right: 1rem;
  border-radius: 0.4rem;
  border: none;
}
</style>
