<template>
  <base-container title="Vuex">
    <counter-view></counter-view>
    <read-favourite-counter></read-favourite-counter>

    <change-counter></change-counter>
    <br><br>
  <button @click="addOne()">+10</button>
  </base-container>
  
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import CounterView from './components/ReadCounterView.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import ReadFavouriteCounter from './components/ReadFavouriteCounter.vue';



export default {
  components: {
    BaseContainer,
    CounterView,
    ChangeCounter,
    ReadFavouriteCounter
  },
  methods: {
    addOne() {
      // this.$store.commit('increase',{ value: 10});
      this.$store.dispatch({
        type: 'increase',
        value: 10
      });
    },
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>