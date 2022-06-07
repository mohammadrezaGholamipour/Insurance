<template>
  <div id="Skelton" v-if="!Accounts">
    <q-skeleton v-for="items in 4" :key="items" bordered type="circle" />
  </div>
  <div v-show="!!Accounts" id="Setting">
    <slot></slot>
    <q-btn
      v-for="(items, index) in Accounts"
      :text-color="items.TextColor"
      class="q-mx-sm Btn"
      :icon="items.Icon"
      :to="items.Link"
      :key="index"
      dense
      round
    >
      <q-tooltip class="mobile-hide desktop-only" :class="items.BgColor">
        {{ items.Name }}
      </q-tooltip>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "SettingHeader",
  props: ["Accounts"],
};
</script>

<style scoped>
#Setting {
  justify-content: center;
  align-items: center;
  display: flex;
}
.Btn {
  padding: 5px;
  border: 2px solid orange;
}

@media only screen and (max-width: 740px) {
  #Setting {
    border-top: 2px solid rgb(255, 221, 27);
    padding-top: 5px;
    width: 100%;
  }
}
#Skelton {
  display: flex;
}
</style>
