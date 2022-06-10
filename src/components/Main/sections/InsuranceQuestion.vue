<template>
  <div id="InsuranceQuestion" class="shadow-5">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        v-for="items in ListQuestions"
        :key="items"
        expand-separator
        header-class="test"
        :label="items.Question"
       
      >
        <q-card>
          <q-card-section >
            {{ items.Answer }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "InsuranceInfo",

  setup() {
    const Store = useStore();
    const ListQuestions = computed(() => {
      return Store.getters.StateGetter("ListQuestions");
    });
    return { Store, ListQuestions };
  },
};
</script>
<style>
#InsuranceQuestion {
  width: 35%;
}
.test{
  display: flex ;
  width: 100% ;
  align-items: center ;
  flex-direction: row-reverse;
  justify-content: space-between ; 
  text-align: right;
}
.q-card__section{
  text-align: center;
}
</style>
