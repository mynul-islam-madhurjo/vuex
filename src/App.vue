<template>
  <base-container title="Vuex">
    <counter-view></counter-view>
    <change-counter></change-counter>
    <br><br>
  <button @click="addOne()">+1</button>
  </base-container>
  
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import CounterView from './components/CounterView.vue';
import ChangeCounter from './components/ChangeCounter.vue';




export default {
  components: {
    BaseContainer,
    CounterView,
    ChangeCounter
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    }
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