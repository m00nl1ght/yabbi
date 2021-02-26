import {HTTP} from '@/plugins/axios'

// initial state
const state = () => ({
    posts: [],

    editForm: {
        title: "",
        description: ""
    },

    paginate: {
        total: 0,
        current: 1,
        perPage: 4,
    }
})

// getters
const getters = {
    getPosts: state => state.posts,
    getTotalPage: state => state.paginate.total,
    getCurrentPage: state => state.paginate.current,
    getPerPage: state => state.paginate.perPage
}

// actions
const actions = {
    getPosts(context) {
        HTTP.get(`/posts?_page=${context.state.paginate.current}&_limit=${context.state.paginate.perPage}`)
        .then(response => {
            context.commit('getPosts', response)
        })
    },

    paginate(context, page) {
        context.commit('paginate', page)
        context.dispatch('getPosts')
    },

    clapped(context, id) {
        let elem = context.state.posts.find(item => item.id == id)
        HTTP.patch('/posts/' + id, {
            'claps': elem.claps + 1
        })
        .then((res) => {
            if(res.status == 200) {
                context.commit('clapped', id)
            }
        })
        .catch(err => {
            console.log(err)
        })

    },

    setStartValue(context, id) {
        let item = context.state.posts.find(item => item.id == id)

        context.commit('setStartValue', item)
    },

    onChangeForm(context, credentials) {
        context.commit('onChangeForm', credentials)
    },

    addPost(context) {
        return new Promise((resolve, reject) => {
            let currentDate = new Date()

            HTTP.post('/posts', {
                ...context.state.editForm,
                'claps': 0,
                'updateAt': currentDate.toISOString(),
                'createdAt': currentDate.toISOString(),
                'id': Date.now(),
                'userId': context.rootState.user.id
            })
            .then((res) => {
                if(res.status == 201) {
                    context.dispatch('getPosts')
                    context.commit('clearFormValue')
                    resolve('success')
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

    editPost(context, id) {
        return new Promise((resolve, reject) => {
            let currentDate = new Date()

            HTTP.patch('/posts/' + id, {
                ...context.state.editForm,
                "updateAt": currentDate.toISOString()
            })
            .then((res) => {
                if(res.status == 200) {
                    context.dispatch('getPosts')
                    context.commit('clearFormValue')
                    resolve('success')
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

    onDelete(context, id) {
        HTTP.delete('/posts/' + id)
        .then(() => {
            context.dispatch('getPosts')
        })
    }
}

// mutations
const mutations = {
    getPosts(context, credentials) {
        context.posts = credentials.data
        context.paginate.total = credentials.headers['x-total-count']
    },

    paginate(context, page) {
        context.paginate.current = page
    },

    clapped(context, id) {
        context.posts.map(item => {
            if(item.id == id) {
                item.claps++
            }
        })
    },

    setStartValue(context, credentials) {
        context.editForm = credentials
    },

    onChangeForm(context, credentials) {
        context.editForm[credentials.index] = credentials.value
    },

    clearFormValue(context) {
        context.editForm = {
            title: "",
            description: "",
            id: ""
        }
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}