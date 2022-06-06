<template>
  <div id="Stepper">
    <q-stepper
      v-show="InsuranceStep.length === 4"
      header-class="Mobile"
      alternative-labels
      v-model="Step"
      ref="stepper"
      bordered
      animated
    >
      <q-step
        v-for="items in InsuranceStep"
        :active-icon="items.Icon"
        :done="Step > items.Step"
        :error-icon="items.Icon"
        active-color="primary"
        :title="items.Header"
        :color="items.Color"
        :name="items.Step"
        :icon="items.Icon"
        done-color="green"
        :key="items.Step"
        error
      >
        <div id="MainStepper">
          <div id="LeftStep">
            <div id="Input">
              <q-select
                @update:modelValue="HandelInputInsurence($event, index)"
                v-for="(items, index) in insurancesInput"
                v-show="Step === items.Step"
                :modelValue="items.Value"
                :options="items.Options"
                :label="items.Label"
                @filter="filterFn"
                :key="items.Step"
                behavior="dialog"
                class="q-ma-sm"
                use-input
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <div id="BtnSep" class="q-my-sm">
              <q-btn
                @click="$refs.stepper.previous()"
                icon="fa-solid fa-caret-left"
                v-show="1 < items.Step"
                label="مرحله قبل"
                color="primary"
                fab-mini
              />
              <q-btn
                icon-right="fa-solid fa-caret-right"
                @click="$refs.stepper.next()"
                label="مرحله بعد"
                color="primary"
                fab-mini
              />
            </div>
          </div>
          <div id="RightStep" class="shadow-5 q-pa-sm">
            <img :src="items.Gif" width="230" height="200" alt="'گیف" />
          </div>
        </div>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
export default {
  name: "InsuranceCare",
  setup() {
    const Step = ref(1);
    const Store = useStore();
    const InsuranceStep = computed(() => {
      return Store.getters.StateGetter("InsuranceStep");
    });
    ////
    const insurancesInput = computed(() => {
      return Store.getters.StateGetter("insurancesInput");
    });
    ////
    const options = ref(stringOptions);
    const HandelInputInsurence = (Data, index) => {
      Store.commit("HandelInputInsurence", { Data, index });
    };
    return {
      InsuranceStep,
      insurancesInput,
      HandelInputInsurence,
      Store,
      Step,
      stringOptions,
      options,

      filterFn(val, update) {
        if (val === "") {
          update(() => {
            options.value = stringOptions;
          });
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
};
</script>
<style>
#Stepper {
  width: 100%;
}
#MainStepper {
  justify-content: center;
  flex-wrap: wrap-reverse;
  align-items: center;
  display: flex;
}
#LeftStep {
  justify-content: center;
  flex-direction: column;
  display: flex;
}
#Input {
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
}

#BtnSep {
  justify-content: space-around;
  align-items: center;
  display: flex;
}
.q-stepper--horizontal .q-stepper__step-inner {
  padding: 0 !important;
}
.on-right {
  margin: 0 !important;
}
.on-left {
  margin: 0 !important;
}
@media screen and (max-width: 651px) {
  .Mobile {
    display: none;
  }
}
</style>
