<template>
    <section>
        <b-field label="Заголовок">
            <b-input
                :value="this.$store.state.posts.editForm.title"
                @input="onChange($event, 'title')"
                required
            ></b-input>
        </b-field>

        <b-field label="Описание">
            <b-input 
                :value="this.$store.state.posts.editForm.description"
                @input="onChange($event, 'description')"  
                maxlength="200" 
                type="textarea"
                required
            ></b-input>
        </b-field>
    </section>
</template>

<script>
export default {
    methods: {
        onChange(value, index) {
            this.$store.dispatch('posts/onChangeForm', {
                value, index
            })
        }
    }
}
</script>