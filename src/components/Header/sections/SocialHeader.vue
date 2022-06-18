<template>
  <q-skeleton v-if="!InsuranceSocial" bordered type="circle" />
  <q-fab
    active-icon="keyboard_arrow_up"
    v-show="!!InsuranceSocial"
    icon="keyboard_arrow_down"
    text-color="white"
    direction="down"
    padding="none"
    id="Social"
  >
    <q-fab-action
      v-for="(items, index) in InsuranceSocial"
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
  props: ["InsuranceSocial"],
};
</script>

<style scoped>
#Social {
  border: 2px solid orange;
}
</style>
