<template>
  <div id="InsuranceBanner">
    <q-banner
      v-show="!!InsuranceBanner"
      class="text-white q-py-xs shadow-5"
      v-for="items in InsuranceBanner"
      :class="items.Class"
      :key="items.id"
      inline-actions
    >
      <div class="text">
        <q-img
          alt="بیمه ماشین"
          :src="items.Src"
          height="64px"
          width="64px"
          id="Icon"
        />
        <p class="q-ma-none font" v-text="items.Banner"></p>
      </div>
    </q-banner>
    <div id="skeletonBannerParent" v-if="!InsuranceBanner">
      <q-skeleton
        id="skeletonBanner"
        class="Banner1"
        width="437.531px"
        height="72px"
      />
      <q-skeleton
        id="skeletonBanner"
        class="q-my-sm"
        width="437.531px"
        height="72px"
      />
      <q-skeleton
        id="skeletonBanner"
        class="Banner3"
        width="437.531px"
        height="72px"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "InsuranceBanner",
  components: {},
  setup() {
    const Store = useStore();
    const InsuranceBanner = computed(() => {
      return Store.getters.StateGetter("InsuranceBanner");
    });
    return { Store, InsuranceBanner };
  },
};
</script>

<style scoped>
.Banner1 {
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
}
.Banner3 {
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
}
.text {
  justify-content: space-around;
  align-items: center;
  display: flex;
  padding: 0;
}
#skeletonBannerParent {
  border-radius: 30px;
  border: 2px solid orange;
}
.font {
  text-align: center;
  font-size: 12pt;
}
@media screen and (max-width: 400px) {
  #skeletonBanner {
    width: 336px !important;
  }
}
@media screen and (min-width: 1052px) {
  #InsuranceBanner {
    display: none;
  }
}
@media screen and (max-width: 810px) {
  #InsuranceBanner {
    display: none;
  }
}
</style>
