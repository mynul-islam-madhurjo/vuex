<template>
    <div>
        <Button @click="login()">Log in</Button>
        <Button @click="logout()">Log out</Button>

    </div>
</template>

<script>
    export default {
        methods: {
            login(){
                this.$store.dispatch('login');
                },
            logout(){
                this.$store.dispatch('logout');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>