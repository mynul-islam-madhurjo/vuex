<template>
    <div>
        {{ counter }}
    </div>
</template>

<script>
export default{
  computed: {    
    counter() {
        return this.$store.getters.normalizedCounter;
    }
  }
};
</script>
