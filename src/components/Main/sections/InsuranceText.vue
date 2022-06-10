<template>
  <div id="Text">
    <InsuranceQuestion />
    <InsuranceInfo />
  </div>
</template>

<script>
import InsuranceInfo from "./InsuranceInfo.vue";
import InsuranceQuestion from "./InsuranceQuestion.vue";
export default {
  components: {
    InsuranceInfo,
    InsuranceQuestion,
  },
};
</script>

<style scoped>
#Text {
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  display: flex;
  padding: 10px 0;
}
</style>
