import Vue from 'vue';
import Router from 'vue-router';
import Error404 from '@/views/Error404'
import Login from '@/views/Login'
import RegisterUser from '@/views/RegisterUser'
import CreateUser from '@/views/CreateUser'
import Home from '@/views/Home'
import RegisterClient from '@/views/RegisterClient'
import RegisterProduct from '@/views/RegisterProduct'
import RegisterProvider from '@/views/RegisterProvider'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '*',
            name: 'Error404',
            component: Error404
        },
        {
            path: '',
            name: 'Login',
            component: Login
        },
        {
            path: '/registeruser',
            name: 'RegisterUser',
            component: RegisterUser
        },
        {
            path: '/createuser',
            name: 'CreateUser',
            component: CreateUser
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/registerclient',
            name: 'RegisterClient',
            component: RegisterClient
        },
        {
            path: '/registerproduct',
            name: 'RegisterProduct',
            component: RegisterProduct
        },
        {
            path: '/registerprovider',
            name: 'RegisterProvider',
            component: RegisterProvider
        }
    ]
});