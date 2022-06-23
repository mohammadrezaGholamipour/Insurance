import { supabase } from "../boot/supabase";
import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function () {
  const Store = createStore({
    state: {
      MenuMobile: false,
      HideAndShowForm: false,
      SigninOrSingupForm: false,
      InsuranceMenu: "",
      InsuranceSocial: "",
      InsuranceAccounts: "",
      InsuranceBanner: "",
      InsuranceList: "",
      InsuranceStep: "",
      InsuranceStepNumber: 1,
      InsuranceStepButton: [
        {
          Id: 1,
          Name: "مرحله بعد",
          Disable: false,
          Icon: "fa-solid fa-caret-left",
          Show: true,
          Disable: true,
        },
        {
          Id: 2,
          Name: "مرحله قبل",
          Disable: false,
          IconRight: "fa-solid fa-caret-right",
          Show: false,
          Disable: false,
        },
      ],
      InsuranceInfo: "",
      InsuranceQuestion: "",
      InsuranceCompany: [[], []],
      insurancesInput: [
        {
          Step: 1,
          Label: "نوع وسیله نقلیه",
          Options: ["سواری", "بارکش"],
          Value: "",
        },
        {
          Step: 1,
          Label: "برند",
          Options: [
            "پراید",
            "تیبا",
            "ساینا",
            "کوئیک",
            "پژو",
            "دنا",
            "رانا",
            "سمند",
          ],
          Value: "",
          Disable: true,
        },
        {
          Step: 1,
          Label: "مدل",
          Options: ["صندوق دار", "هاچبک"],
          Value: "",
          Disable: true,
        },
        {
          Step: 1,
          Label: "سال ساخت",
          Options: [
            "1385",
            "1386",
            "1387",
            "1388",
            "1389",
            "1390",
            "1391",
            "1392",
            "1393",
            "1394",
            "1395",
            "1396",
            "1397",
            "1398",
            "1399",
            "1400",
            "1401",
          ],
          Value: "",
          Disable: true,
        },
        {
          Step: 2,
          Label: "پلاک به نام خودتان است؟",
          Options: ["بله", "خیر"],
          Value: "",
        },
        {
          Step: 2,
          Label: "تخفیف ثالث",
          Options: [
            "0%",
            "5%",
            "10%",
            "15%",
            "20%",
            "25%",
            "30%",
            "35%",
            "40%",
            "45%",
            "50%",
            "55%",
            "60%",
            "65%",
            "70%",
          ],
          Value: "",
          Disable: true,
        },
        {
          Step: 2,
          Label: "تخفیف حوادث راننده",
          Options: [
            "0%",
            "5%",
            "10%",
            "15%",
            "20%",
            "25%",
            "30%",
            "35%",
            "40%",
            "45%",
            "50%",
            "55%",
            "60%",
            "65%",
            "70%",
          ],
          Value: "",
          Disable: true,
        },
        {
          Step: 3,
          Label: "سابقه خسارت داشته اید؟",
          Options: ["بله", "خیر"],
          Value: "",
        },
        {
          Step: 3,
          Label: "خسارت مالی",
          Options: ["بدون خسارت", "یکبار", "دوبار", "سه بار"],
          Value: "",
          Disable: true,
        },
        {
          Step: 3,
          Label: "خسارت جانی",
          Options: ["بدون خسارت", "یکبار", "دوبار", "سه بار"],
          Value: "",
          Disable: true,
        },
        {
          Step: 3,
          Label: "خسارت حوادث راننده",
          Options: ["بدون خسارت", "یکبار", "دوبار", "سه بار"],
          Value: "",
          Disable: true,
        },
      ],
      CarModels: [
        {
          Name: "پراید",
          Models: ["پراید 111", "پراید 131", "پراید 132", "پراید 141"],
        },
        {
          Name: "پژو",
          Models: [
            "LX TU5 پژو پارس",
            "پژو پارس معمولی",
            "پژو پارس سال",
            "ELX پژو پارس",
            "405 SLX پژو",
            "405 GLX پژو",
            "207 SD پژو",
            "SD 206 پژو",
            "207I پژو",
            "پژو 2008",
            "پژو 206",
          ],
        },
        {
          Name: "تیبا",
          Models: ["هاچبک", "صندوق دار"],
        },
        {
          Name: "ساینا",
          Models: ["ساینا اتوماتیک", "SX ساینا", "EX ساینا", "S ساینا"],
        },
        {
          Name: "کوئیک",
          Models: [
            "کوئیک پلاس اتوماتیک",
            "کوئیک دنده ای",
            "G کوئیک",
            "R کوئیک",
            "S کوئیک",
          ],
        },
        {
          Name: "دنا",
          Models: [
            "دنا پلاس توربو اتوماتیک",
            "دنا پلاس توربو دنده ای",
            "دنا پلاس ساده",
            "دنا معمولی",
          ],
        },
        {
          Name: "رانا",
          Models: ["EL رانا", "LX رانا"],
        },
        {
          Name: "سمند",
          Models: ["XU7 سمند سورن", "LX EF7 سمند", "سمند"],
        },
      ],
      TarikhOption: [
        {
          day: "numeric",
        },
        {
          month: "long",
        },
        {
          weekday: "long",
        },
        {
          year: "numeric",
        },
      ],
    },
    mutations: {
      InsuranceMenu(state, data) {
        state.InsuranceMenu = data;
      },
      InsuranceSocial(state, data) {
        state.InsuranceSocial = data;
      },
      InsuranceAccounts(state, data) {
        state.InsuranceAccounts = data;
      },
      HandelHideAndShowForm(state, Name) {
        state.HideAndShowForm = !state.HideAndShowForm;
        if (Name === "ثبت نام") {
          state.SigninOrSingupForm = true;
        } else {
          state.SigninOrSingupForm = false;
        }
      },
      HandelSigninOrSingupForm(state) {
        state.SigninOrSingupForm = !state.SigninOrSingupForm;
      },
      MenuMobileBtn(state) {
        state.MenuMobile = !state.MenuMobile;
      },
      InsuranceBanner(state, data) {
        state.InsuranceBanner = data;
      },
      InsuranceList(state, data) {
        state.InsuranceList = data;
      },
      InsuranceStep(state, data) {
        state.InsuranceStep = data;
      },
      InsuranceCompany(state, data) {
        const SlideOne = [];
        const SlideTow = [];
        data.forEach((items) => {
          if (items.Name === "SlideOne") {
            SlideOne.push(items);
          } else {
            SlideTow.push(items);
          }
          state.InsuranceCompany[0] = SlideOne;
          state.InsuranceCompany[1] = SlideTow;
        });
      },
      InsuranceInfo(state, data) {
        state.InsuranceInfo = data;
      },
      InsuranceQuestion(state, data) {
        state.InsuranceQuestion = data;
      },
      HandelStepInsurance(state, Value) {
        const insurancesInput = state.insurancesInput;
        const Step1 = insurancesInput.filter((items) => items.Step === 1);
        const Step2 = insurancesInput.filter((items) => items.Step === 2);
        const Step3 = insurancesInput.filter((items) => items.Step === 3);
        const StepOneInputValue = Step1.every((items) => {
          return items.Value !== null && items.Value !== "";
        });
        const StepTowInputValue = Step2.every((items) => {
          return items.Value !== null && items.Value !== "";
        });
        const StepThreeInputValue = Step3.every((items) => {
          return items.Value !== null && items.Value !== "";
        });
        ////////////////////////////////////////////////////////////////////
        if (state.InsuranceStepNumber === 1) {
          if (StepOneInputValue) {
            state.InsuranceStepButton[0].Disable = false;
          } else {
            state.InsuranceStepButton[0].Disable = true;
          }
        }
        ////////////////////////////////////////////////////////////////////
        if (state.InsuranceStepNumber === 2) {
          if (Step2[0].Value === "خیر") {
            state.InsuranceStepButton[0].Disable = false;
          } else if (StepTowInputValue) {
            state.InsuranceStepButton[0].Disable = false;
          } else {
            state.InsuranceStepButton[0].Disable = true;
          }
        }
        ////////////////////////////////////////////////////////////////////
        if (state.InsuranceStepNumber === 3) {
          if (Step3[0].Value === "خیر") {
            state.InsuranceStepButton[0].Disable = false;
          } else if (StepThreeInputValue) {
            state.InsuranceStepButton[0].Disable = false;
          } else {
            state.InsuranceStepButton[0].Disable = true;
          }
        }
        //////////////////////////////////////////////////////////////////

        if (state.InsuranceStepNumber === 4) {
          let BimehPride = 3483000;
          let BimehBejozPride = 4014000;
          let Price;
          let PrideOrPejho = state.insurancesInput[1].Value;
          let Takhfif = state.insurancesInput[4].Value;
          let TakhfifSales = state.insurancesInput[5].Value;
          let Khesarat = state.insurancesInput[7].Value;
          let KhesaratMali = state.insurancesInput[8].Value;
          let KhesaratJani = state.insurancesInput[9].Value;
          if (PrideOrPejho === "پراید") {
            Price = BimehPride;
          } else {
            Price = BimehBejozPride;
          }
          if (Takhfif === "بله") {
            Price -= (Price / 100) * parseInt(TakhfifSales);
          }
          if (Khesarat === "بله") {
            if (KhesaratMali === "یکبار") {
              Price += (Price / 100) * 20;
            }
            if (KhesaratMali === "دوبار") {
              Price += (Price / 100) * 30;
            }
            if (KhesaratMali === "سه بار") {
              Price += (Price / 100) * 40;
            }
            if (KhesaratJani === "یکبار") {
              Price += (Price / 100) * 30;
            }
            if (KhesaratJani === "دوبار") {
              Price += (Price / 100) * 70;
            }
            if (KhesaratJani === "سه بار") {
              Price += (Price / 100) * 100;
            }
          }
          console.log(Price.toLocaleString());
        }
        //////////////////////////////////////////////////////////////////
        if (Value > 1) {
          state.InsuranceStepButton[1].Show = true;
        } else {
          state.InsuranceStepButton[1].Show = false;
        }
        if (Value === 4) {
          state.InsuranceStepButton[0].Show = false;
        } else {
          state.InsuranceStepButton[0].Show = true;
        }
        ////////////////////////////////////////////////////////////////////
      },
      HandelButtonInsurence(state, Name) {
        if (Name === "مرحله بعد") {
          state.InsuranceStepNumber++;
        } else {
          state.InsuranceStepNumber--;
        }
      },
      HandelInputInsurence(state, { Data, index }) {
        ////////////////////////////////////////////////////////////////////
        const CarModels = state.CarModels;
        const insurancesInput = state.insurancesInput;
        const Step1 = insurancesInput.filter((items) => items.Step === 1);
        const Step2 = insurancesInput.filter((items) => items.Step === 2);
        const Step3 = insurancesInput.filter((items) => items.Step === 3);
        ////////////////////////////////////////////////////////////////////
        if (index === 0) {
          if (Data) {
            Step1.forEach((items) => (items.Disable = false));
            Step1[2].Disable = true;
            if (Step1[0].Value !== Data) {
              insurancesInput.forEach((items) => {
                items.Value = "";
              });
              Step2.forEach((items) => {
                items.Disable = true;
              });
              Step3.forEach((items) => {
                items.Disable = true;
              });
              Step2[0].Disable = false;
              Step3[0].Disable = false;
            }
          } else {
            insurancesInput.forEach((items) => {
              items.Disable = true;
              items.Value = "";
            });
            Step1[0].Disable = false;
            Step2[0].Disable = false;
            Step3[0].Disable = false;
          }
        }
        ////////////////////////////////////////////////////////////////////
        if (index === 1) {
          if (Data) {
            Step1[2].Disable = false;
            if (Step1[1].Value !== Data) {
              Step1[2].Value = "";
            }
            CarModels.filter((items) => {
              if (items.Name === Data) {
                Step1[2].Options = items.Models;
              }
            });
          } else {
            Step1[2].Value = "";
            Step1[2].Disable = true;
          }
        }
        ////////////////////////////////////////////////////////////////////
        if (index === 4) {
          if (Data) {
            Step2.forEach((items) => (items.Disable = false));
            if (Step2[0].Value !== Data) {
              if (Data === "خیر") {
                Step2.forEach((items) => {
                  items.Disable = true;
                  items.Value = "";
                  Step2[0].Disable = false;
                });
              } else {
                Step2.forEach((items) => {
                  items.Value = "";
                });
              }
            }
          } else {
            Step2.forEach((items) => {
              items.Disable = true;
              items.Value = "";
              Step2[0].Disable = false;
            });
          }
        }
        ////////////////////////////////////////////////////////////////////
        if (index === 7) {
          if (Data) {
            Step3.forEach((items) => (items.Disable = false));
            if (Step3[0].Value !== Data) {
              if (Data === "خیر") {
                Step3.forEach((items) => {
                  items.Disable = true;
                  items.Value = "";
                  Step3[0].Disable = false;
                });
              } else {
                Step3.forEach((items) => {
                  items.Value = "";
                });
              }
            }
          } else {
            Step3.forEach((items) => {
              items.Disable = true;
              items.Value = "";
              Step3[0].Disable = false;
            });
          }
        }
        ////////////////////////////////////////////////////////////////////
        insurancesInput[index].Value = Data;
        ////////////////////////////////////////////////////////////////////
        const StepOneInputValue = Step1.every((items) => {
          return items.Value !== null && items.Value !== "";
        });
        const StepTowInputValue = Step2.every((items) => {
          return items.Value !== null && items.Value !== "";
        });
        const StepThreeInputValue = Step3.every((items) => {
          return items.Value !== null && items.Value !== "";
        });
        ////////////////////////////////////////////////////////////////////
        if (state.InsuranceStepNumber === 1) {
          if (StepOneInputValue) {
            state.InsuranceStepButton[0].Disable = false;
            state.InsuranceStepNumber++;
          } else {
            state.InsuranceStepButton[0].Disable = true;
          }
        }
        ////////////////////////////////////////////////////////////////////
        if (state.InsuranceStepNumber === 2) {
          if (Step2[0].Value === "خیر") {
            state.InsuranceStepButton[0].Disable = false;
            state.InsuranceStepNumber++;
          } else if (StepTowInputValue) {
            state.InsuranceStepButton[0].Disable = false;
            state.InsuranceStepNumber++;
          } else {
            state.InsuranceStepButton[0].Disable = true;
          }
        }
        ////////////////////////////////////////////////////////////////////
        if (state.InsuranceStepNumber === 3) {
          if (Step3[0].Value === "خیر") {
            state.InsuranceStepNumber++;
            state.InsuranceStepButton[0].Disable = false;
          } else if (StepThreeInputValue) {
            state.InsuranceStepButton[0].Disable = false;
            state.InsuranceStepNumber++;
          } else {
            state.InsuranceStepButton[0].Disable = true;
          }
        }
        ////////////////////////////////////////////////////////////////////
      },
    },
    actions: {
      async SupabaseMenu({ commit }) {
        try {
          const { data } = await supabase.from("InsuranceMenu").select("*");
          commit("InsuranceMenu", data);
        } catch (error) {
          console.log(error.message);
          console.log("لیست منو دریافت نشد");
        }
      },
      async SupabaseSocial({ commit }) {
        try {
          const { data } = await supabase.from("InsuranceSocial").select("*");
          commit("InsuranceSocial", data);
        } catch (error) {
          console.log(error.message);
          console.log("لیست شبکه های اجتماعی دریافت نشد");
        }
      },
      async SupabaseAccounts({ commit }) {
        try {
          const { data } = await supabase.from("InsuranceAccounts").select("*");
          commit("InsuranceAccounts", data);
        } catch (error) {
          console.log(error.message);
          console.log("لیست دکمه های منو دریافت نشد");
        }
      },
      async SupabaseBanner({ commit }) {
        try {
          const { data } = await supabase.from("InsuranceBanner");
          commit("InsuranceBanner", data);
        } catch (error) {
          console.log(error.message);
          console.log("اطلاعات بنر های قرمز ابی و سبز دریافت نشد");
        }
      },
      async SupabaseInsuranceList({ commit }) {
        try {
          const { data } = await supabase.from("InsuranceList").select("*");
          commit("InsuranceList", data);
        } catch (error) {
          console.log(error.message);
          console.log("عکس های انواع بیمه دریافت نشد");
        }
      },
      async SupabaseInsuranceStep({ commit }) {
        try {
          const { data } = await supabase.from("InsuranceCar").select("*");
          commit("InsuranceStep", data);
        } catch (error) {
          console.log(error.message);
          console.log("اطلاعات،فرم دریافت نشد");
        }
      },
      async SupabaseInsuranceCompany({ commit }) {
        try {
          const { data } = await supabase.from("InsuranceCompany").select("*");
          commit("InsuranceCompany", data);
        } catch (error) {
          console.log(error.message);
          console.log("اطلاعات،شرکت های بیمه دریافت نشد");
        }
      },
      async SupabaseInsuranceInfo({ commit }) {
        try {
          const { data } = await supabase.from("InsuranceInfo").select("*");
          commit("InsuranceInfo", data);
        } catch (error) {
          console.log(error.message);
          console.log("اطلاعات،لیست دریافت نشد");
        }
      },
      async SupabaseInsuranceQuestion({ commit }) {
        try {
          const { data } = await supabase.from("InsuranceQuestion").select("*");
          commit("InsuranceQuestion", data);
        } catch (error) {
          console.log(error.message);
          console.log("اطلاعات،لیست دریافت نشد");
        }
      },
    },
    getters: {
      StateGetter: (state) => (name) => {
        return state[name];
      },
    },
    modules: {},
    strict: process.env.DEBUGGING,
  });
  return Store;
});
