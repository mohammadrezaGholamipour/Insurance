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
    </div>
    <!-- /////// -->
    <hr class="Hr" />
    <!-- /////// -->
    <div id="Row3">
      <InsuranceInfo />
    </div>
    <!-- /////// -->
  </div>
</template>

<script>
import InsuranceBanner from "./sections/InsuranceBanner.vue";
import InsuranceGifCar from "./sections/InsuranceGifCar.vue";
import InsuranceCare from "./sections/InsuranceCare.vue";
import InsuranceInfo from "./sections/InsuranceInfo.vue";
import InsuranceList from "./sections/InsuranceList.vue";

export default {
  name: "FullHome",
  components: {
    InsuranceBanner,
    InsuranceGifCar,
    InsuranceCare,
    InsuranceInfo,
    InsuranceList,
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
  justify-content: space-around;
  flex-direction: row-reverse;
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
</style>
