<template>
  <q-carousel
    next-icon="fas fa-caret-square-right"
    prev-icon="fas fa-caret-square-left"
    control-color="primary"
    id="InsuranceCarousel"
    v-model="Slide"
    height="200px"
    autoplay="1"
    animated
    infinite
    arrows
  >
    <q-carousel-slide name="SlideOne">
      <div id="CarouselMain">
        <div
          class="q-pa-md bg-white shadow-5 radius"
          v-for="items in InsuranceCompany[0]"
          :key="items.id"
        >
          <a :href="items.Link" target="_blank"
            ><q-img :src="items.Src" width="100px" height="100px"
          /></a>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="SlideTow">
      <div id="CarouselMain">
        <div
          class="q-pa-md bg-white shadow-5 radius"
          v-for="items in InsuranceCompany[1]"
          :key="items.id"
        >
          <a :href="items.Link" target="_blank"
            ><q-img :src="items.Src" width="100px" height="100px"
          /></a>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const Slide = ref("SlideOne");
    const Store = useStore();
    const InsuranceCompany = computed(() => {
      return Store.getters.StateGetter("InsuranceCompany");
    });
    return {
      InsuranceCompany,
      Slide,
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
.radius:hover {
  box-shadow: rgb(241, 137, 137) 1px 5px 10px 1px;
}
</style>
