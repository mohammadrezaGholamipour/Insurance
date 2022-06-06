<template>
  <div id="InsuranceList">
    <img
      v-for="items in InsurancesList"
      v-show="!!InsurancesList"
      class="shadow-5 q-ma-sm"
      :src="items"
      :key="items"
      height="68"
      alt="بیمه"
      width="68"
    />
    <template v-for="items in 12" :key="items">
      <q-skeleton
        v-if="!InsurancesList"
        class="shadow-5 q-ma-sm"
        width="68px"
        height="68px"
      />
    </template>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "InsuranceList",

  setup() {
    const Store = useStore();
    const InsurancesList = computed(() => {
      return Store.getters.StateGetter("InsurancesList");
    });

    return {
      Store,
      InsurancesList,
    };
  },
};
</script>

<style scoped>
#InsuranceList {
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  width: 336px;
}
#InsuranceList img {
border: 2px solid orange;
  border-radius: 17px;
}
#InsuranceItems p {
  margin: 0;
}
</style>
