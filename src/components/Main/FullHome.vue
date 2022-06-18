<template>
  <div id="Main">
    <!-- /////// -->
    <div id="Row1">
      <InsuranceCare />
      <InsuranceBanner />
      <InsuranceList />
    </div>
    <!-- /////// -->
    <hr class="Hr" />
    <!-- /////// -->
    <div id="Row2">
      <InsuranceCarousel />
    </div>
    <!-- /////// -->
    <hr id="HrInsuranceCarousel" class="Hr" />
    <!-- /////// -->
    <div id="Row3">
      <InsuranceText />
    </div>
    <!-- /////// -->
  </div>
</template>

<script>
import InsuranceBanner from "./sections/InsuranceBanner.vue";
import InsuranceCare from "./sections/InsuranceCare.vue";
import InsuranceList from "./sections/InsuranceList.vue";
import InsuranceText from "./sections/InsuranceText.vue";
import InsuranceCarousel from "./sections/InsuranceCarousel.vue";

export default {
  name: "FullHome",
  components: {
    InsuranceBanner,
    InsuranceCare,
    InsuranceText,
    InsuranceList,
    InsuranceCarousel,
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
  justify-content: space-evenly;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  width: 100%;
}
#Row2 {
  background-color: #f2f2f2;
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
}

#Row3 {
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
}
.Hr {
  border-top: 4px solid rgb(88, 161, 255);
  border-radius: 5px;
  width: 100%;
}
@media screen and (max-width: 810px) {
  #HrInsuranceCarousel {
    display: none !important;
  }
}
</style>
