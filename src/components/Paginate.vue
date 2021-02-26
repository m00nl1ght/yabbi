<template>
    <b-pagination
        class="paginate"
        :total="total"
        :per-page="perPage"
        v-model="current"

        range-before="2"
        range-after="2"
        order="is-centered"
        size="is-small"

        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">

        <template #previous="props">
            <b-pagination-button
                :page="props.page"
                :to="`/documentation/pagination#page${props.page.number}`">
                <i class="fas fa-arrow-left"></i>
            </b-pagination-button>
        </template>

        <template #next="props">
            <b-pagination-button
                :page="props.page"
                :to="`/documentation/pagination#page${props.page.number}`">
                <i class="fas fa-arrow-right"></i>
            </b-pagination-button>
        </template>
    </b-pagination>
</template>

<script>
    export default {
        computed: {
            current: {
                get() {
                    return this.$store.getters['posts/getCurrentPage']
                },
                set(value) {
                    this.$store.dispatch('posts/paginate', value)
                }
            },

            total() {
                return this.$store.getters['posts/getTotalPage']
            },

            perPage() {
                return this.$store.getters['posts/getPerPage']
            }
        }
    }
</script>

<style scoped>
    .paginate {
        max-width: 450px;
        margin: 0 auto;
    }
</style>