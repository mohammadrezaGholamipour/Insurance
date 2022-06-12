import { supabase } from "../boot/supabase";
import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function () {
  const Store = createStore({
    state: {
      MenuMobile: false,
      Menu: "",
      Gif: "",
      Social: "",
      Accounts: "",
      InsurancesList: "",
      Banner: "",
      InsuranceStep: "",
      InsuranceInfo: "",
      InsuranceQuestion: "",
      insurancesInput: [
        {
          Step: 1,
          Label: "نوع وسیله نقلیه",
          Options: ["سواری", "بارکش"],
          Value: "",
        },
        { Step: 1, Label: "برند", Options: ["پژو", "پراید"], Value: "" },
        { Step: 1, Label: "مدل", Options: ["صندوق دار", "هاچبک"], Value: "" },
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
        },
        {
          Step: 3,
          Label: "سابقه خسارت داشته اید؟",
          Options: ["بله", "حیر"],
          Value: "",
        },
        {
          Step: 3,
          Label: "خسارت مالی",
          Options: ["یکبار", "دوبار", "سه بار"],
          Value: "",
        },
        {
          Step: 3,
          Label: "خسارت جانی",
          Options: ["یکبار", "دوبار", "سه بار"],
          Value: "",
        },
        {
          Step: 3,
          Label: "خسارت حوادث راننده",
          Options: ["یکبار", "دوبار", "سه بار"],
          Value: "",
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
      Menu(state, data) {
        state.Menu = data;
      },
      Social(state, data) {
        state.Social = data;
      },
      Accounts(state, data) {
        state.Accounts = data;
      },
      MenuMobileBtn(state) {
        state.MenuMobile = !state.MenuMobile;
      },
      Banner(state, data) {
        state.Banner = data;
      },
      Gif(state, data) {
        state.Gif = URL.createObjectURL(data);
      },
      InsurancesList(state, data) {
        state.InsurancesList = data;
      },
      InsuranceStep(state, data) {
        state.InsuranceStep = data;
      },
      InsuranceInfo(state, data) {
        state.InsuranceInfo = data;
      },
      InsuranceQuestion(state, data) {
        state.InsuranceQuestion = data;
      },
      HandelInputInsurence(state, { Data, index }) {
        state.insurancesInput[index].Value = Data;
      },
    },
    actions: {
      async SupabaseMenu({ commit }) {
        try {
          const { data } = await supabase.from("Menu").select("*");
          commit("Menu", data);
        } catch (error) {
          console.log(error.message);
          console.log("لیست منو دریافت نشد");
        }
      },
      async SupabaseSocial({ commit }) {
        try {
          const { data } = await supabase.from("Social").select("*");
          commit("Social", data);
        } catch (error) {
          console.log(error.message);
          console.log("لیست منو دریافت نشد");
        }
      },
      async SupabaseAccounts({ commit }) {
        try {
          const { data } = await supabase.from("Accounts").select("*");
          commit("Accounts", data);
        } catch (error) {
          console.log(error.message);
          console.log("لیست منو دریافت نشد");
        }
      },
      async SupabaseBanner({ commit }) {
        try {
          const { data } = await supabase.from("Banner").select("*");
          commit("Banner", data);
        } catch (error) {
          console.log(error.message);
          console.log("اطلاعات بنر های قرمز زرد و سبز دریافت نشد");
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
          const { data } = await supabase.from("InuranceQuestion").select("*");
          commit("InsuranceQuestion", data);
        } catch (error) {
          console.log(error.message);
          console.log("اطلاعات،لیست دریافت نشد");
        }
      },
      async SupabaseGif({ commit }) {
        try {
          const { data } = await supabase.storage
            .from("public")
            .download("gif/animate-care6.gif");
          commit("Gif", data);
        } catch (error) {
          console.log(error.message);
          console.log("گیف دریافت نشد");
        }
      },
      async SupabaseInsurancesList({ commit }) {
        try {
          const InsurancesList = [];
          for (let index = 1; index < 13; index++) {
            const { data } = await supabase.storage
              .from("public")
              .download(`insurances/Bimeh/${index}.png`);
            InsurancesList.push(URL.createObjectURL(data));
          }
          commit("InsurancesList", InsurancesList);
        } catch (error) {
          console.log(error.message);
          console.log("گیف دریافت نشد");
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
