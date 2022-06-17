<template>
  <div id="Text">
    <InsuranceInfo />
    <InsuranceQuestion />
  </div>
</template>

<script>
import InsuranceQuestion from "./InsuranceQuestion.vue";
import InsuranceInfo from "./InsuranceInfo.vue";

export default {
  components: {
    InsuranceQuestion,
    InsuranceInfo,
  },
};
</script>

<style scoped>
#Text {
  justify-content: space-evenly;
  flex-direction: row-reverse;
  align-items: flex-start;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
}
</style>
