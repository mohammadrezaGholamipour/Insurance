<template>
  <q-dialog
    transition-show="slide-left"
    transition-hide="slide-left"
    v-model="HideAndShowForm"
  >
    <div id="Main">
      <form v-show="SigninOrSingupForm" action="#">
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
        <input type="text" placeholder="نام کاربری" />
        <input type="email" placeholder="ایمیل" />
        <input type="password" placeholder="رمز عبور" />
        <a href="#">قبلا ثبت نام کرده اید؟</a>
        <button>تایید</button>
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
        <a href="#">ثبت نام و ساخت اکانت؟</a>
        <button>تایید</button>
      </form>
    </div>
  </q-dialog>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const Store = useStore();
    const HideAndShowForm = computed({
      get() {
        return Store.getters.StateGetter("HideAndShowForm");
      },
      set() {
        Store.commit("HandelHideAndShowForm");
      },
    });
    const SigninOrSingupForm = computed(() => {
      return Store.getters.StateGetter("SigninOrSingupForm");
    });
    return {
      Store,
      HideAndShowForm,
      SigninOrSingupForm,
    };
  },
};
</script>

<style scoped>
#Main {
  border: 3px solid orange;
  border-radius: 20px;
  width: 328px;
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
