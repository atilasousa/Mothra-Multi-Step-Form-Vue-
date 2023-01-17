<template>
  <div :class="stepClass()">
    <div
      v-for="(el, index) in inputs"
      :key="index"
      :class="stepClass(`${el.type}`)"
    >
      <label>{{ el.label }}</label>

      <div v-if="el.type === 'single-input'" :class="stepClass('single-input')">
        <input
          v-model="form.data[`${el.vModelName}`]"
          :name="el.name"
          :type="el.inputType"
          class="base-input"
          :placeholder="el.placeHolder"
        />
      </div>
      <div
        v-if="el.type === 'inline-inputs'"
        :class="stepClass('inputs-holder')"
      >
        <div
          v-for="inlineInput in el.inputs"
          :class="stepClass('input-holder')"
        >
          <input
            v-model="form.data[`${inlineInput.vModelName}`]"
            :name="inlineInput.name"
            :type="inlineInput.inputType"
            :placeholder="inlineInput.placeHolder"
            class="base-input"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import bem from "bem-ts";

const stepClass = bem("step", { strict: false });

defineProps<{
  inputs: any[];
  focusBorderColor?: "red";
}>();

const form: any = ref({
  data: {},
});
</script>
<style lang="scss">
.step {
  display: flex;
  flex-direction: column;

  &__single-input {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin-bottom: 0.75rem;
    }
  }

  &__inline-inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5rem;

    label {
      margin-bottom: 0.75rem;
    }
  }

  &__inputs-holder {
    display: flex;

    @media screen and (max-width: 960px) {
      flex-direction: column;
    }
  }

  &__input-holder {
    flex: 1;

    &:first-child {
      padding-right: 0.5rem;

      @media screen and (max-width: 960px) {
        padding-right: 0;
      }
    }

    &:last-child {
      padding-left: 0.5rem;

      @media screen and (max-width: 960px) {
        padding-left: 0;
      }
    }
  }
}
</style>
