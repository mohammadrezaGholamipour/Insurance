<template>
  <q-scroll-area class="fit MenuMobile text-white">
    <q-list class="List">
      <template v-for="(items, index) in Menu" :key="index">
        <q-separator class="ListLine" />
        <q-item
          active-class="text-white"
          class="ListItems"
          :to="items.Link"
          clickable
          v-ripple
          exact
        >
          <q-item-section class="ListIcon" avatar>
            <q-icon :name="items.Icon" />
          </q-item-section>
          <q-item-section class="test">
            {{ items.Label }}
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-scroll-area>
</template>

<script>
export default {
  name: "MenuMobile",
  props: ["Menu"],
};
</script>

<style scoped>
.MenuMobile {
  background-color: #a63ec5;
}
.List {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}
.ListIcon {
  padding-right: 10px;
  min-width: 0;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.ListLine {
  width: 100%;
  background-color: rgb(255, 221, 27);
}
.ListItems {
  padding: 0 10px;
}
</style>
