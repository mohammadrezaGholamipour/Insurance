<template>
  <FullHome />
</template>

<script>
import FullHome from "src/components/Main/FullHome.vue";
import { useStore } from "vuex";

export default {
  name: "HomePage",
  components: { FullHome },
  setup() {
    const Store = useStore();
    Store.dispatch("SupabaseInsurancesList");
    Store.dispatch("SupabaseInsuranceStep");
    Store.dispatch("SupabaseBanner");
    Store.dispatch("SupabaseInsuranceInfo");
    Store.dispatch("SupabaseInsuranceQuestion");
  },
};
</script>
