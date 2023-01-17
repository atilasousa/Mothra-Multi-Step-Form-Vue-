<template>
  <div :class="stepsClass({ active })">
    <div :class="stepsClass('number')">
      <span>{{ stepNumber }}</span>
    </div>
    <!-- <div :class="stepsClass('info')">
      <span>Your Info</span>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import bem from "bem-ts";

defineProps<{
  active?: boolean;
  stepNumber: number;
}>();

const stepsClass = bem("step");
</script>
<style lang="scss">
.step {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: black;
  padding: 0 0.5rem;
  margin-right: 1rem;
  // margin-bottom: 1rem;

  &--active {
    .step__number {
      background-color: #bde2fe;
      border: 1px solid #8dc8f5;
    }
  }

  &__number {
    width: 2rem;
    height: 2rem;
    border: 0.1px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-right: 0.7rem;
    // margin-bottom: 0.5rem;
    cursor: pointer;
  }

  &__info {
    display: none;
    flex-direction: column;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 960px) {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }

    small {
      font-size: 0.7rem;
      margin-bottom: 0.2rem;
    }

    span {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
}
</style>
