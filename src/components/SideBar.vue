<template>
  <div :class="sideBarClass()">
    <step-indicator v-for="i in 4" :key="i" :step-number="i" />
  </div>
</template>
<script setup lang="ts">
import bem from "bem-ts";
import StepIndicator from "./StepIndicator.vue";

const sideBarClass = bem("side-bar", { strict: false });
</script>
<style lang="scss">
.side-bar {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1rem 8rem;
  display: flex;
  justify-content: center;
  background-image: url("../assets/images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
