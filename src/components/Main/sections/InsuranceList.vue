<template>
  <div id="InsuranceList">
    <q-img
      v-for="items in InsurancesList"
      v-show="!!InsurancesList"
      class="shadow-5"
      :src="items"
      :key="items"
      height="68px"
      alt="بیمه"
      width="68px"
      id="img"
    />
    <template v-for="items in 12" :key="items">
      <q-skeleton
        class="shadow-5"
        v-if="!InsurancesList"
        height="68px"
        width="68px"
        id="SkeltonImg"
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  width: 336px;
}
#img {
  border: 2px solid orange;
  background-color: white;
  border-radius: 17px;
  margin: 8px 0;
}
#SkeltonImg {
  border: 2px solid orange;
  border-radius: 17px;
  margin: 8px 0;
}
</style>
