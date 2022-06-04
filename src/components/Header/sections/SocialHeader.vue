<template>
  <q-skeleton v-if="!Social" bordered type="circle" />
  <q-fab
    active-icon="keyboard_arrow_up"
    icon="keyboard_arrow_down"
    text-color="white"
    v-show="!!Social"
    direction="down"
    padding="none"
    id="Social"
  >
    <q-fab-action
      v-for="(items, index) in Social"
      :color="items.Color"
      :label="items.Label"
      :icon="items.Icon"
      :key="index"
    />
  </q-fab>
</template>

<script>
export default {
  name: "SocialHeader",
  props: ["Social"],
};
</script>

<style scoped>
#Social {
  border: 2px solid orange;
}
</style>
