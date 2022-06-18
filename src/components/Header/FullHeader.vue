<template>
  <!-- Header -->
  <div id="Header" class="shadow-5">
    <!-- MenuDesktop -->
    <div id="Right">
      <MenuHeader :InsuranceMenu="InsuranceMenu" />
    </div>
    <!--MenuDesktop Finish -->
    <div id="Left">
      <TarikhHeader :TarikhOption="TarikhOption" />
      <SocialHeader :InsuranceSocial="InsuranceSocial" />
      <SearchHeader />
      <SettingHeader :InsuranceAccounts="InsuranceAccounts"><slot></slot></SettingHeader>
    </div>
  </div>
  <!-- Finish header -->
</template>

<script>
import SettingHeader from "./sections/SettingHeader.vue";
import TarikhHeader from "./sections/TarikhHeader.vue";
import SearchHeader from "./sections/SearchHeader.vue";
import SocialHeader from "./sections/SocialHeader.vue";
import MenuHeader from "./sections/MenuHeader";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "FullHeader",
  components: {
    MenuHeader,
    SearchHeader,
    SettingHeader,
    SocialHeader,
    TarikhHeader,
  },

  setup() {
    const store = useStore();
    const InsuranceMenu = computed(() => {
      return store.state.InsuranceMenu;
    });
    const InsuranceSocial = computed(() => {
      return store.state.InsuranceSocial;
    });
    const InsuranceAccounts = computed(() => {
      return store.state.InsuranceAccounts;
    });
    const TarikhOption = computed(() => {
      return store.state.TarikhOption;
    });
    return { store, InsuranceMenu, InsuranceSocial, InsuranceAccounts, TarikhOption };
  },
};
</script>

<style scoped>
#Header {
  background-color: #a63ec5;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  display: flex;
}
#Right {
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  display: flex;
}
#Left {
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
}

@media only screen and (max-width: 1340px) {
  #Header {
    flex-direction: column;
  }
  #Right {
    border-bottom: 2px solid rgb(255, 217, 4);
    width: 100%;
  }
  #Left {
    padding: 5px 0;
  }
}
@media only screen and (max-width: 845px) {
  #Header {
    flex-direction: column-reverse;
  }
  #Right {
    display: none;
  }
}
</style>
