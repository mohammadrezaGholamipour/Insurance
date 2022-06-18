<template>
  <q-carousel
    next-icon="fas fa-caret-square-right"
    prev-icon="fas fa-caret-square-left"
    control-color="primary"
    v-model="Slide"
    animated
    infinite
    arrows
  >
    <q-carousel-slide name="first">
      <div id="CarouselMain">
        <div class="q-pa-xs bg-white shadow-5 rounded-borders">
          <q-img
            src="../../../assets/Image/Arman.png"
            width="100px"
            height="100px"
          />
        </div>
        <div class="q-pa-xs bg-white shadow-5 rounded-borders">
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
    const Slide = ref("first");
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
</style>
