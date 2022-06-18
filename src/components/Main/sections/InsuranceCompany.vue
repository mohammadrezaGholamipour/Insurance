<template>
  <q-carousel
    next-icon="fas fa-caret-square-right"
    prev-icon="fas fa-caret-square-left"
    control-color="primary"
    id="InsuranceCarousel"
    v-model="Slide"
    animated
    infinite
    arrows
  >
    <q-carousel-slide name="SlideOne">
      <div id="CarouselMain">
        <div
          v-for="items in InsuranceCompany"
          :key="items.id"
          class="q-pa-md bg-white shadow-5 radius"
        >
          <q-img :src="items.Src" width="100px" height="100px" />
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const Slide = ref("SlideOne");
    const Store = useStore();
    const InsuranceCompany = computed(() => {
      return Store.getters.StateGetter("InsuranceCompany");
    });
    setTimeout(() => {
      console.log(InsuranceCompany);
    }, 5000);
    return {
      Slide,
      InsuranceCompany,
    };
  },
};
</script>

<style scoped>
#CarouselMain {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  height: 100%;
}
.q-carousel {
  background: none !important;
  height: 250px;
  width: 100% !important;
}
.q-focus-helper {
  background: none !important;
}
.q-icon :hover {
  background: none !important;
}
@media screen and (max-width: 810px) {
  #InsuranceCarousel {
    display: none;
  }
}
.radius {
  border: 2px solid orange;
  border-radius: 30px;
}
</style>
