<template>
  <FirstLoading v-if="Loading" class="non-selectable" />
  <q-layout v-show="!Loading" view="hHh lpr fFf" class="layout non-selectable">
    <!-- Header -->
    <FullHeader>
      <!-- MenuMobileBtn -->
      <q-btn
        :icon="MenuMobile ? 'close' : ' menu'"
        @click="MenuMobileBtn"
        id="MenuMobileBtn"
        text-color="white"
        size="lg"
      >
        <q-tooltip class="bg-info mobile-hide desktop-only">منو</q-tooltip>
      </q-btn>
    </FullHeader>

    <!-- MenuMobile -->
    <q-drawer
      v-model="MenuMobile"
      behavior="mobile"
      :width="200"
      side="right"
      elevated
      overlay
    >
      <MenuMobile :Menu="InsuranceMenu" />
    </q-drawer>
    <!-- MainPage -->
    <q-inner-loading dark class="Loading" :showing="InnerLoading">
      <q-spinner-gears size="70px" color="primary" />
    </q-inner-loading>
    <transition
      appear
      leave-active-class="animated fadeOut"
      enter-active-class="animated fadeIn"
    >
      <q-page-container class="Page shadow-5 q-mx-auto">
        <router-view />
        <q-page-scroller
          id="PageScroller"
          position="bottom-right"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
        <FullFooter />
      </q-page-container>
    </transition>
  </q-layout>
</template>

<script>
import { computed, onMounted, ref, watch } from "@vue/runtime-core";
import MenuMobile from "../components/Header/sections/MenuMobile";
import FullFooter from "src/components/Footer/FullFooter.vue";
import FullHeader from "src/components/Header/FullHeader.vue";
import FirstLoading from "../components/FirstLoading.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "MainLayout",
  components: {
    FirstLoading,
    FullHeader,
    MenuMobile,
    FullFooter,
  },

  setup() {
    const InnerLoading = ref(true);
    const Loading = ref(true);
    const store = useStore();
    const Rout = useRoute();
    // InnerLoading

    watch(Rout, () => {
      InnerLoading.value = true;
      setTimeout(() => {
        InnerLoading.value = false;
      }, 1500);
    });
    // SupaBase Request
    store.dispatch("SupabaseMenu");
    store.dispatch("SupabaseSocial");
    store.dispatch("SupabaseAccounts");

    // Loading
    onMounted(() => {
      InnerLoading.value = false;
      setTimeout(() => {
        Loading.value = false;
      }, 5000);
    });
    //  MenuMobile
    const MenuMobileBtn = () => {
      store.commit("MenuMobileBtn");
    };
    const MenuMobile = computed({
      get() {
        return store.state.MenuMobile;
      },
      set() {
        store.commit("MenuMobileBtn");
      },
    });
    const InsuranceMenu = computed(() => {
      return store.state.InsuranceMenu;
    });
    // finish
    return {
      store,
      Loading,
      MenuMobile,
      InnerLoading,
      MenuMobileBtn,
      InsuranceMenu,
    };
  },
};
</script>

<style scoped>
#MenuMobileBtn {
  border: 2.5px solid white;
  border-radius: 17%;
  display: none;
}
@media only screen and (max-width: 845px) {
  #MenuMobileBtn {
    display: inline;
    margin: 0 5px;
    min-height: 0;
    padding: 0;
  }
}
.layout {
  background-color: #f2f2f2;
}
.Page {
  background-image: url(../assets/Image/back-base.png);
  max-width: 1338px;
  overflow: hidden;
  padding: 5px;
}
.Loading {
  z-index: 2;
}
#PageScroller {
  position: relative;
  z-index: 100;
}
</style>
