<template>
  <div id="Main">
    <!-- /////// -->
    <div id="Row1">
      <InsuranceBanner />
      <InsuranceList />
      <InsuranceGifCar />
    </div>
    <!-- /////// -->
    <hr class="Hr" />
    <!-- /////// -->
    <div id="Row2">
      <InsuranceCare />
      <q-skeleton
        v-if="!InsuranceCarGif"
        height="344px"
        width="526px"
        alt="بیمه"
      />
      <q-img
        v-show="!!InsuranceCarGif"
        :src="InsuranceCarGif"
        id="InsuranceImage"
        height="344px"
        width="526px"
        alt="بیمه"
      />
    </div>
    <!-- /////// -->
    <hr class="Hr" />
    <!-- /////// -->
    <div id="Row3">
      <p id="H4Text" class="shadow-5 q-pa-md">
        سوالات و اطلاعات بیشتر درمورد بیمه شخص ثالث
      </p>
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
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
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
  width: 100%;
}
#H4Text {
  border-radius: 20px;
  border: 2px solid orange;
  font-size: 22pt;
  text-align: center;
  margin: 15px 0 20px;
}
@media screen and (max-width: 572px) {
  #H4Text {
    display: none;
  }
}
</style>
