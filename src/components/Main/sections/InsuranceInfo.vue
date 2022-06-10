<template>
  <div id="TabInfo" class="rounded-borders shadow-5" >
    <template v-for="items in TabInfo" :key="items">
      <div id="HeaderTabInfo">
        <img src="" alt="" />
        <h5 class="q-ma-none">{{ items.Title }}</h5>
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
    const TabInfo = computed(() => {
      return Store.getters.StateGetter("TabInfo");
    });
    return {
      Store,
      TabInfo,
    };
  },
};
</script>
<style scoped>
#TabInfo {
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  padding: 20px;
  display: flex;
  width: 60%;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
#HeaderTabInfo {
  justify-content: center;
  align-items: flex-end;
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
</style>
