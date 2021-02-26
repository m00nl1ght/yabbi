import {HTTP} from '@/plugins/axios'
// initial state
const state = () => ({
  isAuth: false,
  role: '',
  id: ''
})

// getters
const getters = {
  getRole: state => state.role,
  getUserId: state => state.id,
  isAuth: state => state.isAuth
}

// actions
const actions = {
  getAuth(context, credentials) {
    return new Promise((resolve, reject) => {
      HTTP.get('/users?login=' + credentials.email)
      .then((response) => {
        console.log(response.data)
        if(response.data.length == 0) {
          resolve({
            status: false,
            message: 'Имя пользователя не найдено'
          })
        } else if(response.data[0].password == credentials.password) {
          context.commit('login', {
            role: response.data[0].role,
            id: response.data[0].id
          })

          resolve({
            status: true,
            message: 'login'
          })
        } else {
          resolve({
            status: false,
            message: 'Password incorrect'
          })
        }

      })
      .catch(err => {
        console.log(err)
        reject({
          status: false,
          message: err
        })
      })
    })
  },

  logout(context) {
    context.commit('logout')
  },

}

// mutations
const mutations = {
  login(state, props) {
    state.isAuth = true
    state.role = props.role
    state.id = props.id
  },

  logout(state) {
    state.isAuth = false
    state.role = ''
    state.id = ''
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}