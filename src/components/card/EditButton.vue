<template>
    <b-button
    class="is-info is-outlined"
        @click="onEdit(id)"
    >
        <span class="icon"><i class="fas fa-edit"></i></span>
        <span>Изменить</span>
    </b-button>
</template>

<script>
export default {
    props: ['id'],

    methods: {
        onEdit() {
            this.$router.push('/post/' + this.id)
        }
    }
}
</script>