<template>
  <div id="Gif" class="shadow-5 q-pa-sm">
    <q-skeleton v-if="!Gif" width="255px" height="255px" />
    <img :src="Gif" v-show="!!Gif" alt="بیمه ماشین" width="255" height="220" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "InsuranceGifCar",
  setup() {
    const Store = useStore();
    const Gif = computed(() => {
      return Store.getters.StateGetter("Gif");
    });
    return { Store, Gif };
  },
};
</script>
<style scoped>
@media screen and (max-width: 1068px) {
  #Gif {
    display: none;
  }
}
</style>
