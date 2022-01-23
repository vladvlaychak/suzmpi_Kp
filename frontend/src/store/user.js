import axios from "axios";

class User {
    constructor (user) {
        this.id = user.uid
        this.Login = user.log
    }
}

export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state,payload) {
            state.user = payload
            console.log("store/user/18: "+state.user)
        },
        exit(state) {
            state.user = null
        }
    },
    actions: {
        async LoginUser({ commit }, { email, password }) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await axios.post("http://localhost:5000/", {
                    method: 'Login',
                    arguments: {
                        email: email,
                        password: password
                    }
                });
                // Login 
                const user = response.data[0]
                if(response.data=="Error")
                    throw response.data
                commit('setUser', new User(user))
                commit('setLoading', false)
            } catch (error) {
                console.log('store/user/error'+error)
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        IsUserLoggedIn(state) {
            return state.logged
        }
    }
}