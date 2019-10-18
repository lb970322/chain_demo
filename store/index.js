import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: true,
        hasLogin: false,
        UserName: ""
    },
    mutations: {
        login(state, UserName) {
            state.UserName = UserName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.UserName = "";
            state.hasLogin = false;
        }
    }
})

export default store
