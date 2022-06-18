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
    <q-carousel-slide name="1">
      <div id="CarouselMain">
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Arman.png"
            width="100px"
            height="100px"
          />
        </div>
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Day.png"
            width="100px"
            height="100px"
          />
        </div>
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Alborz.png"
            width="100px"
            height="100px"
          />
        </div>
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Iran.png"
            width="100px"
            height="100px"
          />
        </div>
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Ma.png"
            width="100px"
            height="100px"
          />
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="2">
      <div id="CarouselMain">
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Mellat.png"
            width="100px"
            height="100px"
          />
        </div>
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Novin.png"
            width="100px"
            height="100px"
          />
        </div>
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Moallem.png"
            width="100px"
            height="100px"
          />
        </div>
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/karafarin.png"
            width="100px"
            height="100px"
          />
        </div>
        <div class="q-pa-md bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Asmari.png"
            width="100px"
            height="100px"
          />
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const Slide = ref("1");
    return {
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
</style>
