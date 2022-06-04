<template>
  <q-card id="InsuranceInfo">
    <q-tabs
      active-bg-color="positive"
      indicator-color="white"
      active-color="white"
      class="bg-grey-4"
      narrow-indicator
      mobile-arrows
      v-model="Tab"
      inline-label
    >
      <q-tab icon="info" name="alarms" label="سوالات متداول" />
      <q-tab icon="book" name="mails" label="بیمه شخص ثالث" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="Tab" animated>
      <q-tab-panel name="mails">
        <div id="TabInfo" v-for="items in TabInfo" :key="items">
          <div id="HeaderTabInfo">
            <img src="" alt="" />
            <h5 class="q-ma-none">{{ items.Title }}</h5>
          </div>

          <p>{{ items.Info }}</p>
          <hr style="width: 100%" class="q-ma-none" />
        </div>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <q-list bordered separator padding>
          <q-expansion-item
            v-for="items in ListQuestions"
            :label="items.Question"
            group="somegroup"
            id="TabQuestions"
            :key="items"
            popup
          >
            <q-card>
              <q-card-section>
                {{ items.Answer }}
              </q-card-section>
            </q-card>
            <q-separator />
          </q-expansion-item>
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "InsuranceInfo",

  setup() {
    const Store = useStore();
    const ListQuestions = computed(() => {
      return Store.getters.StateGetter("ListQuestions");
    });

    const TabInfo = computed(() => {
      return Store.getters.StateGetter("TabInfo");
    });
    return {
      Store,
      ListQuestions,
      TabInfo,
      Tab: ref("mails"),
    };
  },
};
</script>
<style scoped>
#TabInfo {
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  padding: 20px;
  display: flex;
}
#HeaderTabInfo {
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  display: flex;
}
#TabQuestions {
  flex-direction: row-reverse;
  direction: rtl;
}

.no-wrap {
  flex-wrap: wrap !important;
}
.q-tab-panel {
  padding: 0;
}
.q-expansion-item--popup.q-expansion-item--collapsed {
  padding: 0;
}

#TabQuestions :hover {
  background-color: rgb(255, 251, 0);
}
</style>
