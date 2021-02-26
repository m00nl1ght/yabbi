<template>
    <b-navbar type="is-primary">
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link v-if="!isAuth" class="button is-light" to="/login">Log in</router-link>

                    <router-link v-else class="button is-light" to="/logout">Log out</router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    computed: {
        isAuth() {
            return this.$store.getters['user/isAuth']
        }
    }
}
</script>