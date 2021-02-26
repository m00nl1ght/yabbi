<template>
    <form class="form" @submit.prevent="onSubmit">
        <FormInputs />

        <BackButton />
        <b-button class="ml-3" native-type="submit" type="is-success">Сохранить</b-button>
    </form>
</template>

<script>
import FormInputs from "@/components/post/FormInputs"
import BackButton from "@/components/post/BackButton"

export default {
    components: {
        FormInputs, BackButton
    },

    methods: {
        onSubmit() {
            this.$store.dispatch('posts/addPost')
            .then(res => {
                if(res == 'success') {
                    this.$router.go(-1)
                }
            })
        },
    }
}
</script>

<style scoped>
  .form {
    margin: 0 auto;
    max-width: 400px;
  }
</style>