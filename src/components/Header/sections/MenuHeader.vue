<template>
  <q-skeleton v-if="!Menu" width="650.334px" height="48px" bordered />
  <q-tabs v-show="!!Menu" inline-label narrow-indicator>
    <q-route-tab
      :disable="items.Label === 'خانه' ? false : true"
      v-for="(items, index) in Menu"
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
  props: ["Menu"],
};
</script>

<style>
.q-tab__label {
  font-size: 17px;
}
</style>
