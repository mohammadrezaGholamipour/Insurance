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
  flex-wrap: wrap-reverse;
  align-items: flex-end;
  flex-direction: row;
  display: flex;
  width: 100%;
}
</style>
