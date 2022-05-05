import {createStore, createLogger} from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    state() {
        return {
            users: [],
            error: null
        }
    },
    mutations: {
        SET_USERS(state, {users, error}) {
            state.users = users
            state.error = error
        },
        DELETE_USER(state, id) {
            let index = state.users.findIndex(user => user.id == id);
            state.users = [...state.users.slice(0, index), ...state.users.slice(index + 1)]
        }
    },
    actions: {
        async fetchUsers({commit}) {
            try {
                let response = await fetch("https://api.github.com/users")
                let data = await response.json()
                commit('SET_USERS', {'users': data.slice(0, 10), 'error': null})
            } catch (error) {
                commit('SET_USERS', {'users': [], 'error': error.message})
            }
        }
    },
    getters: {
        getUsers(state) {
            return state.users
        },

        getError(state) {
            return state.error
        }
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})