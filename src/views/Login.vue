<template>
      <form class="column form" @submit.prevent="onSubmit">
        <b-field label="Email">
            <b-input type="email"
                v-model="email"
                required>
            </b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password"
              v-model="password"
              required
              password-reveal>
          </b-input>
        </b-field>

        <b-button native-type="submit" type="is-success">Login</b-button>
      </form>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    onSubmit() {
      this.$store.dispatch('user/getAuth', {email: this.email, password: this.password})
      .then(response => {
        if(response.status) {
          this.$router.push({name: 'posts'})
        }
        //написать вывод сообщений об ошибках здесь
      })
    }
  },
}
</script>

<style scoped>
  .form {
    margin: 0 auto;
    max-width: 400px;
  }
</style>