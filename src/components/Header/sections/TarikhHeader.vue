<template>
  <div id="Tarikh">
    <div class="Week">
      <p>{{ Tarikh[2] }}</p>
    </div>
    <div class="YearMonthDay">
      <p>{{ Tarikh[3] }}</p>
      <p>- {{ Tarikh[1] }} -</p>
      <p>{{ Tarikh[0] }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "TarikhHeader",
  props: ["TarikhOption"],
  setup(props) {
    const Tarikh = ref([]);
    props.TarikhOption.forEach((items) => {
      Tarikh.value.push(
        new Intl.DateTimeFormat("fa-IR", items).format(new Date())
      );
    });

    return {
      Tarikh,
    };
  },
};
</script>

<style scoped>
p {
  margin: 0;
  font-size: 15px;
}
#Tarikh {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  display: flex;
}
.YearMonthDay {
  color: rgb(238, 255, 0);
  justify-content: center;
  align-items: center;
  display: flex;
}
.Week {
  justify-content: center;
  align-items: center;
  color: white;
  display: flex;
}
</style>
