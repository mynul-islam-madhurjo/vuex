<template>
    <div>
        {{ finalCounter }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // We will give here the list of getters in here
    // counter() {
    //     return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['finalCounter'])
  }
};
</script>
