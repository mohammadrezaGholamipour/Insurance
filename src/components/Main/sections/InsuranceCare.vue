<template>
  <div id="Stepper">
    <q-stepper
      v-show="InsuranceStep.length === 4"
      header-class="Mobile"
      alternative-labels
      v-model="Step"
      ref="stepper"
      animated
      flat
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
                popup-content-class="text-white"
                v-show="Step === items.Step"
                :modelValue="items.Value"
                :options="items.Options"
                style="width: 210px"
                :label="items.Label"
                @filter="filterFn"
                :key="items.Step"
                behavior="dialog"
                class="q-ma-sm"
                color="grey-10"
                use-input
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      پیدا نشد
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
                v-show="4 !== items.Step"
                label="مرحله بعد"
                color="primary"
                fab-mini
              />
            </div>
          </div>
          <div id="RightStep" class="shadow-5 q-pa-sm q-ma-sm">
            <img :src="items.Gif" width="230" height="200" alt="'گیف" />
          </div>
        </div>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
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
      HandelInputInsurence,
      insurancesInput,
      InsuranceStep,
      stringOptions,
      Store,
      Step,

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
  width: 452px;
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
@media screen and (max-width: 848px) {
  #Stepper {
    width: 100%;
  }
}
.q-dialog__inner {
  max-width: 300px !important;
  padding: 0 !important;
  text-align: center;
  margin: auto;
  right: 0;
  left: 0;
}
.q-virtual-scroll__content {
  background-color: rgb(55, 132, 247);
}

.q-item {
  border-bottom: 1px solid white !important;
}
.q-field__control {
  flex-direction: row-reverse;
}
.q-field__after,
.q-field__append {
  padding: 0 !important;
}
.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input {
  color: rgb(223, 63, 63);
}

.q-field__label {
  right: 0 !important;
  top: 18px;
  max-width: 100%;
  text-align: right;
  color: rgba(0, 0, 0, 0.6) !important;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.00937em;
  text-decoration: inherit;
  text-transform: inherit;
  transform-origin: right top !important;
  transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1),
    max-width 0.324s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.q-field__native {
  flex-direction: row-reverse;
}
.q-field__input {
  text-align: right !important;
}
</style>
