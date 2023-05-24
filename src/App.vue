<template>
  <base-container title="Vuex">
   {{ counter }} <br><br>
  <button @click="addOne()">+1</button>
  </base-container>
  
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter(){
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne() {
      this.$store.state.counter++;
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