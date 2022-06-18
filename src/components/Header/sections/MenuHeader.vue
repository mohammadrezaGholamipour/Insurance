<template>
  <q-skeleton v-if="!InsuranceMenu" width="650.334px" height="48px" bordered />
  <q-tabs v-show="!!InsuranceMenu" inline-label narrow-indicator>
    <q-route-tab
      :disable="items.Label === 'خانه' ? false : true"
      v-for="(items, index) in InsuranceMenu"
      class="text-white q-mx-xs"
      :label="items.Label"
      :name="items.Name"
      :icon="items.Icon"
      :to="items.Link"
      :key="index"
      exact
    />
  </q-tabs>
</template>

<script>
export default {
  name: "MenuHeader",
  props: ["InsuranceMenu"],
};
</script>

<style>
.q-tab__label {
  font-size: 17px;
}
</style>
