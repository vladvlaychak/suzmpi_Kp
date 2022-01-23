// import { createApp } from 'vue'
// import router from './router'
import './assets/layouts/index.scss'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainApp from '@/components/MainApp'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
// import AdminApp from '@/components/AdminApp'
import store from './store'
import Axios from 'axios'
import routerIndex from './router/index.js'
// import routerAdministrator from './router/administrator.js'
import vuetify from './plugins/vuetify.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSession from 'vue-session'
import VueI18n from "vue-i18n"
import localize from "./localize.ts"

Vue.prototype.serverPath = "http://localhost:5000/"; // Хост сервера bakcend

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.use(VueSession)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: "/",
        component: MainApp,
        children: routerIndex
        },
        {
            path: "/Login",
            component: Login
        },
        {
            path: "/Register",
            component: Register
        },
        
    ]
})

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'ru', // set locale
    messages: localize, // set locale messages
})

new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
