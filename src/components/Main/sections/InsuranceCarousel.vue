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
      <div class="absolute-center">
        <p>سلام</p>
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
