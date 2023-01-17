<script setup lang="ts">
import { ref, onBeforeUpdate } from "vue";
import TheSteps from "./components/TheSteps.vue";
import BaseButton from "./components/BaseButton.vue";
import Step from "./components/Step.vue";
import { inputs } from "./mocks/inputs";

let currentStep = ref(0);

const inputsLength = inputs.length;

const next = () => {
  if (currentStep.value < inputsLength - 1) currentStep.value++;
};

const back = () => {
  if (currentStep.value > 0) currentStep.value--;
};
</script>

<template>
  <div class="main">
    <div class="card">
      <the-steps :currentStep="currentStep" :inputsLength="inputsLength" />
      <Step
        v-for="(input, index) in inputs"
        :key="index"
        v-show="currentStep === index"
        :inputs="input"
      />
      <div class="footer">
        <base-button @click="back">Previous</base-button>
        <base-button @click="next">Next</base-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  position: relative;
  padding-top: 7rem;
  display: inline-flex;
  justify-content: center;

  .card {
    position: relative;
    z-index: 2;
    color: black;
    background-color: white;
    box-shadow: 0 0 10px rgba(59, 59, 59, 0.158);
    width: 79%;
    max-width: 95%;
    border-radius: 5px;
    padding: 2rem 1rem;
  }
}
</style>
