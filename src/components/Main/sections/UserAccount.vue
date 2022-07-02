<template>
  <q-dialog
    transition-show="slide-left"
    transition-hide="slide-left"
    v-model="HideAndShowForm"
  >
    <div id="Main">
      <form novalidate @submit.prevent v-show="SigninOrSingupForm">
        <h3>ثبت نام</h3>
        <div class="social-container">
          <a class="social bg-primary text-white"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a class="social bg-red text-white"
            ><i class="fab fa-google-plus-g"></i
          ></a>
          <a class="social bg-info text-white"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
        <span>ورود از طریق شبکه های اجتماعی</span>
        <template v-for="items in Account.UserSignUp" :key="items.Id">
          <input
            @change="InputUserSignUp($event, items.Id)"
            :placeholder="items.Placeholder"
            v-model="items.Value"
            :type="items.Type"
            autofocus
          />
          <span id="Alert">{{ items.Alert }}</span>
        </template>
        <a href="#">رمز خود را فراموش کرده اید؟</a>
        <a href="#" @click="HandelSigninOrSingupForm">قبلا اکانت ساخته اید؟</a>
        <button @click="SingupForm">تایید</button>
      </form>
      <form action="#" v-show="!SigninOrSingupForm">
        <h3>وارد شدن</h3>
        <div class="social-container">
          <a class="social bg-primary text-white"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a class="social bg-red text-white"
            ><i class="fab fa-google-plus-g"></i
          ></a>
          <a class="social bg-info text-white"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
        <span>ورود از طریق شبکه های اجتماعی</span>
        <input type="email" placeholder="ایمیل" />
        <input type="password" placeholder="رمز عبور" />
        <a href="#">رمز خود را فراموش کرده اید؟</a>
        <a href="#" @click="HandelSigninOrSingupForm">ثبت نام و ساخت اکانت؟</a>
        <button>تایید</button>
      </form>
    </div>
  </q-dialog>
</template>

<script>
import { useQuasar } from "quasar";
import { computed, reactive } from "@vue/runtime-core";
import { supabase } from "../../../boot/supabase";
import { useStore } from "vuex";

export default {
  setup() {
    const $q = useQuasar();
    const Store = useStore();
    const Account = reactive({
      UserSignUp: [
        {
          Id: 1,
          Type: "email",
          Placeholder: "ایمیل",
          Value: "",
          Alert: "",
        },
        {
          Id: 2,
          Type: "password",
          Placeholder: "رمز عبور",
          Value: "",
          Alert: "",
        },
        {
          Id: 3,
          Type: "password",
          Placeholder: "تکرار رمز عبور",
          Value: "",
          Alert: "",
        },
      ],
      UserSignIn: [
        { Id: 1, Type: "email", Placeholder: "ایمیل", Value: "" },
        { Id: 2, Type: "password", Placeholder: "رمز عبور", Value: "" },
      ],
    });
    const HideAndShowForm = computed({
      get() {
        return Store.getters.StateGetter("HideAndShowForm");
      },
      set() {
        Account.UserSignUp.forEach(
          (items) => ((items.Value = ""), (items.Alert = ""))
        );
        Store.commit("HandelHideAndShowForm");
      },
    });
    const SigninOrSingupForm = computed(() => {
      return Store.getters.StateGetter("SigninOrSingupForm");
    });
    const HandelSigninOrSingupForm = () => {
      Store.commit("HandelSigninOrSingupForm");
    };
    const InputUserSignUp = ($event, id) => {
      console.log($event);
      if (id === 1) {
        if (Account.UserSignUp[0].Value.includes("@gmail.com")) {
          Account.UserSignUp[0].Alert = "";
        } else {
          Account.UserSignUp[0].Alert = "لطفا ایمیل را به درستی وارد کنید";
        }
      } else if (id === 2) {
        if (Account.UserSignUp[1].Value.length > 5) {
          Account.UserSignUp[1].Alert = "";
        } else {
          Account.UserSignUp[1].Alert = "رمز شما باید بیشتر از پنج رقم باشد";
        }
      } else {
        if (Account.UserSignUp[2].Value === Account.UserSignUp[1].Value) {
          Account.UserSignUp[2].Alert = "";
        } else {
          Account.UserSignUp[2].Alert = "رمز خود را اشتباه وارد کرده اید";
        }
      }
    };
    const SingupForm = async () => {
      let UserSignUp = Account.UserSignUp.every(
        (items) => items.Alert === "" && items.Value !== ""
      );
      let Password =
        Account.UserSignUp[2].Value === Account.UserSignUp[1].Value;
      if (UserSignUp && Password) {
        let { user, error } = await supabase.auth.signUp({
          email: Account.UserSignUp[0].Value,
          password: Account.UserSignUp[1].Value,
        });
        if (error) {
          $q.notify({
            position: "top",
            message: "ثبت نام انجام نشد لطفا دوباره امتحان کنید",
            color: "negative",
          });
          Account.UserSignUp.forEach(
            (items) => ((items.Value = ""), (items.Alert = ""))
          );
        } else {
          $q.notify({
            position: "top",
            message: `خوش آمدید ${Account.UserSignUp[0].Value}`,
            color: "positive",
          });
          Account.UserSignUp.forEach(
            (items) => ((items.Value = ""), (items.Alert = ""))
          );
        }
        Store.commit("HandelHideAndShowForm");
      } else {
        $q.notify({
          position: "top",
          message: "اطلاعات را کامل وارد کنید",
          color: "negative",
        });
      }
    };
    return {
      Store,
      Account,
      SingupForm,
      HideAndShowForm,
      InputUserSignUp,
      SigninOrSingupForm,
      HandelSigninOrSingupForm,
    };
  },
};
</script>

<style scoped>
#Main {
  border: 3px solid orange;
  border-radius: 20px;
  overflow: hidden;
  width: 328px;
  height: auto;
}
#Alert {
  color: red;
}
.social-container {
  margin: 20px 0;
}
.social-container a {
  border: 1px solid #dddddd;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  border-radius: 50%;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

form {
  background-color: #ffffff;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  direction: rtl;
  display: flex;
  padding: 30px;
  height: 100%;
  width: 100%;
}
input {
  background-color: #eee;
  padding: 12px 15px;
  margin: 8px 0;
  border: none;
  width: 100%;
}

button {
  transition: transform 80ms ease-in;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 20px;
  color: #ffffff;
  padding: 12px 45px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

h3 {
  text-align: center;
  margin: 0;
}
p {
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  line-height: 20px;
  font-weight: 100;
  font-size: 14px;
}
span {
  font-size: 12px;
}

a {
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  margin: 10px 0;
}
</style>
