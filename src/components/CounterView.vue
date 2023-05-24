<template>
    <div>
        {{ counter }}
    </div>
</template>

<script>
export default{
  computed: {    
    counter() {
        console.log(this.$store)
      return this.$store.state.counter;
    }
  }
};
</script>
