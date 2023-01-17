<template>
  <div :class="planCategoryClass()">
    <div :class="planCategoryClass('icon')">
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </div>
    <div :class="planCategoryClass('info')">
      <span>Arcade</span>
      <small>$9/Mo</small>
    </div>
  </div>
</template>
<script lang="ts" setup>
import bem from "bem-ts";

const planCategoryClass = bem("plan-category", { strict: false });
</script>
<style lang="scss">
.plan-category {
  padding: 1rem 1.3rem;
  border: 1px solid red;
  border-radius: 0.5rem;
  display: flex;
  width: 100% !important;
  align-items: center;

  &__icon {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background-color: red;
    margin-right: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
  }

  &__info {
    display: inline-flex;
    flex-direction: column;

    span {
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
  }

  @media screen and (min-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    width: 5rem;

    &__icon {
      margin-bottom: 5rem;
    }
  }
}
</style>
