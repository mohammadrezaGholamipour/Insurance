<template>
  <q-skeleton id="SkeltonInsuranceQuestion" v-if="!InsuranceQuestion" />
  <div
    class="shadow-5 rounded-borders"
    v-show="!!InsuranceQuestion"
    id="InsuranceQuestion"
  >
    <p id="H4Text" class="shadow-5 q-pa-md">
      سوالات و اطلاعات بیشتر درمورد بیمه شخص ثالث
    </p>
    <q-list class="rounded-borders">
      <q-expansion-item
        v-for="items in InsuranceQuestion"
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
  #SkeltonInsuranceQuestion {
    margin-top: 10px;
  }
}
#SkeltonInsuranceQuestion {
  border: 2px solid orange;
  width: 572.41px;
  height: 1006px;
  min-width: 266px;
}
#H4Text {
  border-bottom: 2px solid orange;
  text-align: center;
  font-size: 22pt;
}
@media screen and (max-width: 572px) {
  #H4Text {
    display: none;
  }
}
</style>
