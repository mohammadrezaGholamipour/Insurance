<template>
  <div>
    <q-banner
      class="text-white q-py-xs shadow-5"
      v-for="items in Banner"
      :class="items.Class"
      :key="items.id"
      inline-actions
    >
      <div class="text">
        <img
          :src="items.Src"
          alt="بیمه ماشین"
          height="64"
          width="64"
          id="Icon"
        />
        <p class="q-ma-none font">
          {{ items.Banner }}
        </p>
      </div>
    </q-banner>
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
    const Banner = computed(() => {
      return Store.getters.StateGetter("Banner");
    });
    return { Store, Banner };
  },
};
</script>

<style scoped>
.BorderStyle {
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
}
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
.font {
  text-align: center;
  font-size: 12pt;
}
</style>
