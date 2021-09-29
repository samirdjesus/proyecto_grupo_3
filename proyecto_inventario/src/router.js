import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Inventory from '@/views/Inventory';
import Products from '@/views/Products';
import Sales from '@/views/Sales';
import Report from '@/views/Report';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/inventory',
            name: 'inventory',
            component: Inventory
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path:'/sales',
            name: 'sales',
            component: Sales
        },
        {
            path:'/report',
            name: 'report',
            component: Report
        },
        {
            path: '*',
            name: 'error 404',
            component: Error
        }
    ]
})