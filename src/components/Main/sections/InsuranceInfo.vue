<template>
  <q-skeleton id="SkeltonInsuranceInfo" v-if="!InsuranceInfo" />
  <div
    class="rounded-borders shadow-5"
    v-show="!!InsuranceInfo"
    id="InsuranceInfo"
  >
    <template v-for="items in InsuranceInfo" :key="items">
      <div id="HeaderTabInfo">
        <q-img
          :src="items.Image"
          :alt="items.Title"
          height="64px"
          width="64px"
        />
        <h5 class="q-ma-none q-pt-xs">{{ items.Title }}</h5>
      </div>
      <p>{{ items.Info }}</p>
      <hr style="width: 100%" class="q-ma-none" />
    </template>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "InsuranceInfo",

  setup() {
    const Store = useStore();
    const InsuranceInfo = computed(() => {
      return Store.getters.StateGetter("InsuranceInfo");
    });
    return {
      InsuranceInfo,
      Store,
    };
  },
};
</script>
<style scoped>
#InsuranceInfo {
  border: 2px solid orange;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  max-width: 600px;
  padding: 17.58px;
  display: flex;
}
#HeaderTabInfo {
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
}
#TabQuestions {
  flex-direction: row-reverse;
  direction: rtl;
}

.no-wrap {
  flex-wrap: wrap !important;
}
.q-tab-panel {
  padding: 0;
}
.q-expansion-item--popup.q-expansion-item--collapsed {
  padding: 0;
}
#SkeltonInsuranceInfo {
  border: 2px solid orange;
  height: 1010.7px;
  min-width: 266px;
  width: 596px;
}
</style>
