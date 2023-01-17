<template>
  <div :class="theStepsClass()">
    <step-indicator
      v-for="(i, index) in inputsLength"
      :key="i"
      :step-number="i"
      :active="currentStep == index"
    />
  </div>
</template>
<script lang="ts" setup>
import bem from "bem-ts";
import StepIndicator from "./StepIndicator.vue";

const theStepsClass = bem("the-steps", { strict: false });

defineProps<{
  currentStep: number;
  inputsLength: number;
}>();
</script>
<style lang="scss">
.the-steps {
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
