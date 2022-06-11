<template>
  <div id="InsuranceQuestion" class="shadow-5 rounded-borders">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        v-for="items in ListQuestions"
        :label="items.Question"
        header-class="List"
        expand-separator
        :key="items"
      >
        <q-card>
          <q-card-section>
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
  max-width: 577px;
}
.List {
  border-bottom: 1px solid rgb(126, 126, 126) !important;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  display: flex;
  width: 100%;

  text-align: right;
}
.q-card__section {
  text-align: center;
}
@media screen and (max-width: 1186px) {
  #InsuranceQuestion {
    margin-top: 10px;
  }
}
</style>
