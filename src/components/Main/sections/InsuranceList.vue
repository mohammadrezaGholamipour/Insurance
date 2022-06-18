<template>
  <div id="InsuranceList">
    <q-img
      v-for="items in InsuranceList"
      v-show="!!InsuranceList"
      class="shadow-5"
      height="68px"
      width="68px"
      :src="items"
      :key="items"
      alt="بیمه"
      id="img"
    />
    <template v-for="items in 12" :key="items">
      <q-skeleton
        v-if="!InsuranceList"
        class="shadow-5"
        id="SkeltonImg"
        height="68px"
        width="68px"
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
    const InsuranceList = computed(() => {
      return Store.getters.StateGetter("InsuranceList");
    });

    return {
      Store,
      InsuranceList,
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
