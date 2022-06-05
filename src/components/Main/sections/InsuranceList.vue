<template>
  <div id="InsuranceList">
    <div
      v-for="items in InsurancesList"
      id="InsuranceItems"
      class="shadow-4"
      :key="items"
    >
      <img :src="items" width="64" height="64" alt="بیمه" />
      <p>بیمه</p>
    </div>
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
  width: 252px;
}
#InsuranceItems {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  display: flex;
  margin: 10px;
}
#InsuranceItems p {
  margin: 0;
}
</style>
