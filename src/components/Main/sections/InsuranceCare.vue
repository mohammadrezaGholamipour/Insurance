<template>
  <q-skeleton id="SkeltoninsuranceCar" v-if="!InsuranceStep" />
  <div id="Stepper" v-show="!!InsuranceStep & !!insurancesInput">
    <q-stepper
      v-show="InsuranceStep.length === 4"
      v-model="InsuranceStepNumber"
      transition-next="jump-right"
      transition-prev="jump-left"
      header-class="Mobile"
      ref="stepper"
      animated
    >
      <q-step
        :done="InsuranceStepNumber > items.Step"
        v-for="items in InsuranceStep"
        :active-icon="items.Icon"
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
                dropdown-icon="fas fa-caret-square-down text-primary"
                v-show="InsuranceStepNumber === items.Step"
                v-for="(items, index) in insurancesInput"
                popup-content-class="text-white"
                class="q-ma-sm cursor-pointer"
                :modelValue="items.Value"
                :disable="items.Disable"
                :options="items.Options"
                :label="items.Label"
                style="width: 210px"
                input-debounce="10"
                @filter="filterFn"
                :key="items.Step"
                behavior="dialog"
                color="purple-10"
                use-input
                clearable
                autofocus
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      پیدا نشد
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <div id="Price" class="shadow-5" v-show="items.Step > 3">
                <div>
                  <h6 class="q-my-none q-mx-sm">میلیون تومان</h6>
                  <h4 class="q-ma-none">{{ InsurancePrice }}</h4>
                </div>

                <p class="q-ma-none">
                  قیمت اعلامی با مالی 20 میلیون تومان میباشد
                </p>
              </div>
            </div>
            <div id="BtnSep" class="q-my-sm">
              <q-btn
                @click="HandelButtonInsurence(items.Name)"
                v-for="items in InsuranceStepButton"
                :icon-right="items.IconRight"
                :disable="items.Disable"
                v-show="items.Show"
                :label="items.Name"
                :icon="items.Icon"
                class="shadow-3"
                color="primary"
                :key="items.Id"
              />
            </div>
          </div>
          <div id="RightStep" class="shadow-5 q-pa-xs q-ma-sm">
            <q-img :src="items.Gif" width="230px" height="200px" alt="'گیف" />
          </div>
        </div>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";

const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
export default {
  name: "InsuranceCare",
  setup() {
    const Store = useStore();
    const InsuranceStep = computed(() => {
      return Store.getters.StateGetter("InsuranceStep");
    });
    ////
    const insurancesInput = computed(() => {
      return Store.getters.StateGetter("insurancesInput");
    });
    ////
    const InsuranceStepNumber = computed(() => {
      return Store.getters.StateGetter("InsuranceStepNumber");
    });
    ////
    watch(InsuranceStepNumber, (value) => {
      Store.commit("HandelStepInsurance", value);
    });
    const InsuranceStepButton = computed(() => {
      return Store.getters.StateGetter("InsuranceStepButton");
    });
    ////
    const InsurancePrice = computed(() => {
      return Store.getters.StateGetter("InsurancePrice");
    });
    ////

    const options = ref(stringOptions);
    const HandelInputInsurence = (Data, index) => {
      Store.commit("HandelInputInsurence", { Data, index });
    };
    const HandelButtonInsurence = (Name) => {
      Store.commit("HandelButtonInsurence", Name);
    };
    const test = () => {
      console.log("test");
    };
    return {
      HandelButtonInsurence,
      HandelInputInsurence,
      InsuranceStepButton,
      InsuranceStepNumber,
      insurancesInput,
      InsurancePrice,
      InsuranceStep,
      stringOptions,
      options,
      Store,
      test,

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
  padding-top: 10px;
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
  width: 452px;
}
#Price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid orange;
  background-color: rgba(255, 255, 255, 0.432);
  padding: 10px;

  border-radius: 10px;
}
.q-stepper--horizontal .q-stepper__line:before,
.q-stepper--horizontal .q-stepper__line:after {
  position: absolute;
  top: 50%;
  height: 1px;
  width: 0 !important;
  background: rgba(0, 0, 0, 0.12);
}
.q-select .q-field__input {
  min-width: 0 !important;
  cursor: pointer;
}
.ellipsis {
  text-overflow: initial !important;
  white-space: nowrap;
  overflow: hidden;
}

#Price div {
  justify-content: center;
  align-items: center;
  display: flex;
}
#Price p {
  text-align: center;
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
.Mobile {
  direction: rtl;
}
.q-stepper__dot {
  margin-right: 0 !important;
  margin-left: 8px !important;
}
@media screen and (max-width: 687px) {
  .Mobile {
    display: none;
  }
}
@media screen and (max-width: 848px) {
  #Stepper {
    width: 100%;
    padding-top: 10px;
  }
}

.q-select__dialog {
  max-width: 300px !important ;
  padding: 0 !important;
  text-align: center;
  margin: auto;
  right: 0;
  left: 0;
}
.q-virtual-scroll__content {
  background-color: rgb(55, 132, 247);
}
.q-dialog__inner {
  padding: 0 !important;
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
  direction: rtl !important;
  top: 18px;
  max-width: 100%;
  text-align: right;
  color: black !important;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0em;
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
#SkeltoninsuranceCar {
  border: 2px solid orange;
  width: 702px;
  height: 270px;
  min-width: 268px;
}
.q-field__focusable-action {
  opacity: 0.6;
  cursor: pointer;
  outline: 0 !important;
  border: 0;
  color: rgb(255, 0, 0) !important;
  background: transparent;
  padding: 0 5px;
}
.q-stepper {
  background: none !important;
  box-shadow: none !important;
}
.q-stepper__header--border {
  border-bottom: none !important;
}
.q-stepper__header--standard-labels .q-stepper__tab {
  min-height: 0 !important;
}
#RightStep img {
  border-radius: 20px;
}
#RightStep {
  border-radius: 10%;
}
</style>
