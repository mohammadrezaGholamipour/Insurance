<template>
  <div id="Search">
    <form class="searchbox">
      <input type="search" placeholder="دنبال چی هستی؟" />
      <q-btn icon="search" text-color="white" class="no-shadow" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
};
</script>

<style scoped>
.searchbox {
  margin: 3px 15px;
  width: 270px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 4px;
  background-color: #fffbf8;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 2px solid #666565;
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.83),
    0 10px 15px 0 rgba(126, 126, 126, 0.12),
    0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset,
    0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;
  -moz-box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.83),
    0 10px 15px 0 rgba(126, 126, 126, 0.12),
    0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset,
    0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.83),
    0 10px 15px 0 rgba(126, 126, 126, 0.12),
    0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset,
    0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;
}
input[type="search"] {
  width: 250px;
  caret-color: #a63ec5;
  border: none;
  justify-self: center;
  text-align: center;
  color: #939393;
  font-weight: 500;
  background-color: #fffbf8;
  -webkit-box-shadow: 0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff,
    0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset,
    0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
  -moz-box-shadow: 0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff,
    0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset,
    0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
  box-shadow: 0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff,
    0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset,
    0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
}
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
input[type="search"]:focus {
  outline: 0;
}
.q-btn {
  background-color: #4e79d4;
  padding: 0 5px !important;
  min-height: 0 !important;
  margin-left: 2px;
}
.q-btn:before {
  box-shadow: 0 0 0 0 !important;
}
#Search {
  padding: 2px;
}
@media only screen and (max-width: 475px) {
  #Search {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
  }
}
</style>
