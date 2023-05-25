<template>
  <base-container title="Vuex" v-if="isAuth">
    <counter-view></counter-view>
    <read-favourite-counter></read-favourite-counter>

    <change-counter></change-counter>
    <br><br>
  <button @click="increase({ value: 10})">+10</button>
  </base-container>
    <base-container>
      <user-authenticate-vue></user-authenticate-vue>
    </base-container>
  
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import CounterView from './components/ReadCounterView.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import ReadFavouriteCounter from './components/ReadFavouriteCounter.vue';
import { mapActions } from 'vuex';
import UserAuthenticateVue from './components/UserAuthenticate.vue';



export default {
  components: {
    BaseContainer,
    CounterView,
    ChangeCounter,
    ReadFavouriteCounter,
    UserAuthenticateVue
  },
  computed: {
    isAuth(){
      return this.$store.getters.isAuth;
    }
  },
  methods: {
    ...mapActions(['increment', 'increase'])
    // addOne() {
    //   // this.$store.commit('increase',{ value: 10});
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10
    //   });
    // },
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