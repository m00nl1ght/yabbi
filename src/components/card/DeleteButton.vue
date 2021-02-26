<template>
    <b-button
        class="is-danger is-outlined"
        @click="onDelete(id)"
    >
        <span class="icon"><i class="fas fa-trash-alt"></i></span>
        <span>Удалить</span>
    </b-button>
</template>

<script>
export default {
    props: ['id'],

    methods: {
        onDelete(id) {
            this.$store.dispatch('posts/onDelete', id)
        }
    }
}
</script>