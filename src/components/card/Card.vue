<template>
    <div class="card center mb-2 column is-6-tablet is-4-widescreen">
        <div class="card-header">
            <p class="card-header-title">{{ item.title }}</p>
        </div>

        <div class="card-content">
            <div class="content">{{ item.description }}</div>
        </div>

        <div class="card-footer p-2 is-flex is-justify-content-space-between is-align-items-center">
            <span>{{ datetime(item.createdAt) }}</span>

            <div>
                <b-button
                    @click="clap(item.id)"
                    v-if="checkRole('reader')"
                >
                    <span class="icon"><i class="fas fa-sign-language"></i></span>
                    <span>{{ item.claps }}</span>
                </b-button>

                <EditButton 
                    v-if="checkRole('writer') && checkUserId(item.userId)"
                    :id="item.id"
                />

                <DeleteButton
                    v-if="checkRole('writer') && checkUserId(item.userId)"
                    :id="item.id"
                    class="ml-3"
                />
            </div>
        </div>
    </div>
</template>

<script>
import DeleteButton from '@/components/card/DeleteButton'
import EditButton from '@/components/card/EditButton'

export default {
    props: ['item'],
    components: {
        DeleteButton, EditButton
    },

    methods: {
        clap(id) {
            this.$store.dispatch('posts/clapped', id)
        },

        checkRole(role) {
            return role == this.roles
        },

        checkUserId(postUserId) {
            return postUserId == this.userId
        },

        datetime(timestamps) {
            let date = new Date(timestamps).toLocaleDateString("en-US")
            return date
        }
    },

    computed: {
        roles() {
            return this.$store.getters['user/getRole']
        },

        userId() {
            return this.$store.getters['user/getUserId']
        },
    }
}
</script>

<style scoped>
    .center {
        margin: 0 auto;
    }
</style>