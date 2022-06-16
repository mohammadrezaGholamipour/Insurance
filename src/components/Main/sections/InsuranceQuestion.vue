<template>
  <q-skeleton id="SkeltonInsuranceQuestion" v-if="!InsuranceQuestion" />
  <div
    class="shadow-5 rounded-borders "
    v-show="!!InsuranceQuestion"
    id="InsuranceQuestion"
  >
    <q-list class="rounded-borders" >
      <q-expansion-item
        v-for="items in InsuranceQuestion"
        :label="items.Question"
        header-class="List"
        expand-separator
        :key="items"
   
      >
        <q-card >
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
    const InsuranceQuestion = computed(() => {
      return Store.getters.StateGetter("InsuranceQuestion");
    });
    return { Store, InsuranceQuestion };
  },
};
</script>
<style>
#InsuranceQuestion {
  border: 2px solid orange;
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
#SkeltonInsuranceQuestion {
  width: 576.41px;
  height: 1010px;
  min-width: 270px;
}
</style>
