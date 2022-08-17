import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        token: null,
        isLogged: false,
    },
    getters: {
        user(state) {
            return state.user
        },
        isAuth(state) {
            return state.isLogged
        }
    },
    mutations: {
        login(state, payload) {
            state.user = payload.user
            state.token = payload.token
            state.isLogged = true
        },
        logout(state) {
            state.user = null
            state.token = null
            state.isLogged = false
        }
    },
    actions: {
        /*LOGIN
         */
        LOGIN({ commit }, payload) {
            axios.post('/login', payload).then(res => {
                console.log(res);
                commit('login', res.data)
                    //(res.data.data)
            }).catch(e => {
                console.log(e);
            })
        }
    }
})