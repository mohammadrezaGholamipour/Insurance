<template>
  <div id="InsuranceList">
    <img
      v-for="items in InsurancesList"
      class="shadow-5 q-ma-sm"
      :src="items"
      :key="items"
      height="68"
      alt="بیمه"
      width="68"
    />
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
  width: 368px;
}
#InsuranceList img{
border-radius: 5px;
}
#InsuranceItems p {
  margin: 0;
}
</style>
