<template>
    <div></div>
</template>
<script>
export default {
    beforeMount() {
        this.$store.dispatch('user/logout')
        this.$router.push({name: 'posts'})
    }
}
</script>