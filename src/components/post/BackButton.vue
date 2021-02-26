<template>
    <b-button 
        type="is-warning"
        @click="onClick"
    >Назад</b-button>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$router.go(-1)
        }
    }
}
</script>