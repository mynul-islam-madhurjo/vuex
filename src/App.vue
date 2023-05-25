<template>
  <base-container title="Vuex">
    <counter-view></counter-view>
    <change-counter></change-counter>
    <br><br>
  <button @click="addOne()">+10</button>
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
      // this.$store.commit('increase',{ value: 10});
      this.$store.commit({
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