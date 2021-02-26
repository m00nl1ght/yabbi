<template>
  <div class="container py-2">
    <div
      v-if="checkRole('writer')"
      class="post-add"
    >
      <router-link 
        :to="{name: 'post-add'}"
        class="button is-info"
      >Новый</router-link>
    </div>

    <Card
      v-for="(item, index) in this.posts.posts" 
      :key="index"
      :item="item"
    />

    <Paginate />
  </div>
</template>

<script>
import Card from "@/components/card/Card"
import Paginate from "@/components/Paginate"
import {mapState} from 'vuex'

export default {
  // props: [props],

  components: {
    Card, Paginate
  },

  methods: {
    checkRole(role) {
      return role == this.roles
    }
  },

  computed: {
    ...mapState([
        'posts'
    ]),

    roles() {
      return this.$store.getters['user/getRole']
    }
  },

  mounted() {
    this.$store.dispatch('posts/getPosts')
  }
}
</script>

<style  scoped>
  .post-add {
    max-width: 440px;
    
    margin: 0 auto;
    padding: 20px;

    display: flex;
    justify-content: flex-end;
  }

</style>>

