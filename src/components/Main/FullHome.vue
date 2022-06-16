<template>
  <div id="Main">
    <!-- /////// -->
    <div id="Row2">
      <InsuranceCare />
      <q-skeleton
        v-if="!InsuranceCarGif"
        height="344px"
        width="526px"
        alt="بیمه"
      />
      <!-- <q-img
        v-show="!!InsuranceCarGif"
        :src="InsuranceCarGif"
        id="InsuranceImage"
        height="344px"
        width="526px"
        alt="بیمه"
      /> -->
      <InsuranceList />
    </div>

    <!-- /////// -->
    <hr class="Hr" />
    <!-- /////// -->
    <div id="Row1">
      <InsuranceBanner />

      <InsuranceGifCar />
    </div>
    <!-- /////// -->
    <hr class="Hr" />
    <!-- /////// -->
    <div id="Row3">
     
      <InsuranceText />
    </div>
    <!-- /////// -->
    <hr class="Hr" />
    <!-- /////// -->
  </div>
</template>

<script>
import InsuranceBanner from "./sections/InsuranceBanner.vue";
import InsuranceGifCar from "./sections/InsuranceGifCar.vue";
import InsuranceCare from "./sections/InsuranceCare.vue";
import InsuranceList from "./sections/InsuranceList.vue";
import InsuranceText from "./sections/InsuranceText.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "FullHome",
  components: {
    InsuranceBanner,
    InsuranceGifCar,
    InsuranceCare,
    InsuranceText,
    InsuranceList,
  },
  setup() {
    const Store = useStore();
    const InsuranceCarGif = computed(() => {
      return Store.getters.StateGetter("InsuranceCarGif");
    });
    return {
      InsuranceCarGif,
    };
  },
};
</script>
<style scoped>
#Main {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
}
#Row1 {
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
}
#Row2 {
  justify-content: space-evenly;
  flex-direction: row-reverse;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  padding: 11px;
  width: 100%;
}
#Row3 {
  justify-content: space-around;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
}
.Hr {
  border-top: 4px solid rgb(88, 161, 255);
  border-radius: 5px;
  margin-top: 0;
  width: 100%;
}


</style>
