import { createRouter, createWebHistory } from 'vue-router';

import Main from './components/Main.vue';
import ProductPage from './components/ProductPage.vue';

import Profil from './components/UserPage.vue';
import Favorite from './components/FavoritePage.vue';
import ShopingCart from './components/ShopingCart.vue';
import Pay from './components/PayPage.vue';

import Catalog from './components/Catalog.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/main', component: Main, alias: '/' },
        { path: '/books/:id', component: ProductPage },
        { path: '/profil', component: Profil },
        { path: '/shop', component: ShopingCart },
        { path: '/favorite', component: Favorite },
        { path: '/pay', component: Pay},
        { path: '/catalog', component: Catalog}
    ]
})