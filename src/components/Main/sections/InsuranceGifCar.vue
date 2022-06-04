<template>
  <div class="shadow-5 q-pa-sm">
    <q-skeleton v-if="!Gif" width="250px" height="200px" />
    <img :src="Gif" v-show="!!Gif" alt="بیمه ماشین" width="250" height="200" />
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
