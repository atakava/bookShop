<style lang="less" scoped>
.header {
    background-color: #26a9e0;
    color: #fff;

    .program-line {
        background-color: #1D96c9;
        font-size: 12px;

        .program-line-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .info-line {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .feedback-block {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
            }
        }

        p {
            cursor: pointer;
            margin: 0 20px;
        }
    }

    .sticky-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px 0;

        .logo {
            svg {
                width: 170px;
                height: 48px;
                cursor: pointer;
            }
        }

        .catalog {
            padding: 14px 16px;
            background-color: #2660ab;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;

            svg {
                margin-right: 8px;
            }
        }

        .search-logo {
            width: 625px;
            height: 52px;
            background-color: #fff;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 9px 0px 9px 15px;

            input {
                border: 0;
                background-color: transparent;
                outline: none;
                font-size: 16px;
            }

            button {
                width: 44px;
                height: 44px;
                background-color: #2660ab;
                border: 0;
                border-radius: 4px;
                margin-right: 4px;
            }
        }

        .user-panel {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .block {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                margin: 0 8px;
            }
        }

    }

    .bot-header-line {
        display: flex;
        padding: 16px 0 26px;

        .bot-item {
            font-size: 14px;
            font-weight: 500;
            padding: 0 100px 0 0;
            cursor: pointer;

        }
    }

    .wrap {
        max-width: 1296px;
        margin: 0 auto;

    }

    svg {
        fill: #fff;
    }
}
</style>

<template>
    <header class="header">
        <div class="program-line">
            <div class="wrap program-line-wrap">
                <div class="info-line">
                    <div class="city">
                        <p>Россия, Москва</p>
                    </div>
                    <p class="items" v-for="item of programs">{{ item.name }}</p>
                </div>
                <div class="feedback-block">
                    <p class="number">8 (800) 444-8-444— круглосуточно</p>
                    <p class="feedback">Обратная связь</p>
                </div>
            </div>
        </div>
        <div class="wrap sticky-header">
            <div class="logo" @click="$router.push('/')">
                <svg width="85" height="24" viewBox="0 0 85 24" xmlns="http://www.w3.org/2000/svg"
                    class="header-logo__icon">
                    <path d="M31.488 2.402l3.087 20.004 2.776-.009-3.074-19.989-2.789-.006z"></path>
                    <path d="M31.359 2.402h-4.726v19.939h4.726V2.402z"></path>
                    <path d="M17.372 2.402H0v19.939h15.64l1.732-19.939z"></path>
                    <path d="M19.828 22.34h5.277l.02-19.938h-3.567l-1.73 19.939z"></path>
                    <path
                        d="M47.457 11.631H45.82V7.852c-.657.43-1.432.65-2.22.634-1.41 0-2.83-.75-2.83-2.944v-3.11h1.633v2.655c0 1.472.719 1.891 1.636 1.891a3.19 3.19 0 001.781-.594V2.432h1.637v9.2z">
                    </path>
                    <path d="M49.234 11.631V2.432h1.637v6.544l4.88-6.544h1.434v9.2h-1.633V5.098l-4.88 6.532h-1.438z"></path>
                    <path d="M58.61 2.432h7.67v1.51h-3.017v7.69h-1.636v-7.69h-3.018v-1.51z"></path>
                    <path
                        d="M68.814 2.405h1.438l3.934 9.217h-1.741l-.972-2.352h-3.974l-.972 2.352H64.88l3.935-9.217zm-.69 5.352h2.726l-1.356-3.27-1.37 3.27z">
                    </path>
                    <path d="M75.18 11.631V2.432h1.633v6.544l4.88-6.544h1.437v9.2h-1.636V5.098l-4.88 6.532H75.18z"></path>
                    <path d="M40.703 13.16h5.252v1.51h-3.618v7.686h-1.634V13.16z"></path>
                    <path d="M81.71 0H76.94v1.52h3.661L81.71 0z"></path>
                    <path
                        d="M51.246 13.014c2.765 0 4.853 1.879 4.853 4.757 0 2.76-2.088 4.757-4.852 4.757-2.765 0-4.84-1.876-4.84-4.757 0-2.676 1.982-4.757 4.84-4.757zm0 7.974c1.953 0 3.123-1.418 3.123-3.232 0-1.906-1.369-3.232-3.123-3.232-1.753 0-3.11 1.326-3.11 3.232 0 1.844 1.369 3.232 3.11 3.232z">
                    </path>
                    <path
                        d="M57.594 22.356V13.16c.517 0 1.991-.03 2.644-.03 2.737 0 3.61 1.448 3.61 2.973 0 1.564-1.182 2.973-3.405 2.973-.28 0-.81 0-1.204-.038v3.324l-1.645-.006zm1.633-7.686v2.825c.388.038.785.065 1.158.065.969 0 1.727-.46 1.727-1.487 0-.957-.602-1.43-1.715-1.43-.33 0-.73 0-1.17.027z">
                    </path>
                    <path
                        d="M69.805 13.014c2.765 0 4.852 1.879 4.852 4.757 0 2.76-2.087 4.757-4.852 4.757s-4.84-1.876-4.84-4.757c0-2.676 1.982-4.757 4.84-4.757zm0 7.974c1.952 0 3.123-1.418 3.123-3.232 0-1.906-1.37-3.232-3.123-3.232-1.754 0-3.113 1.326-3.113 3.232 0 1.844 1.371 3.232 3.113 3.232z">
                    </path>
                    <path
                        d="M74.8 20.845h1.267c1.068-4.578 1.712-7.688 1.712-7.688h5.318v7.688h1.273V24h-1.528v-1.644h-6.51V24h-1.531v-3.155zm2.898 0h3.778V14.67h-2.46s-.581 2.973-1.318 6.175z">
                    </path>
                </svg>
            </div>
            <button class="catalog" @click="$router.push('/catalog')">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                    class="catalog__button-image">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.667 3.333C5.747 3.333 5 4.08 5 5v10.834c-.92 0-1.667-.746-1.667-1.666V5a3.333 3.333 0 013.334-3.333h7.5c.92 0 1.667.746 1.667 1.666V5h-1.667V3.333h-7.5z">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.333 5.832c0-.92.747-1.667 1.667-1.667h10c.92 0 1.667.746 1.667 1.667v10.834c0 .92-.746 1.666-1.667 1.666H5c-.92 0-1.667-.746-1.667-1.666V5.832zm11.667 0H5v10.834h10V5.832z">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.335 4.165c.46 0 .833.373.833.833v5.833a.833.833 0 01-1.667 0V4.998c0-.46.374-.833.834-.833z">
                    </path>
                </svg>
                <p class="catalog-text">Каталог</p>
            </button>
            <div class="search-logo">
                <input type="text" class="search-line" placeholder="Найти...">
                <button class="search-btn">
                    <img src="/info baner item/search.svg" alt="">
                </button>
            </div>
            <div class="user-panel">
                <div class="block" v-for="item of user" @click="() => root(item.src)">
                    <img :src="item.svg" alt="">
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
        <div class="wrap bot-header-line">
            <p class="bot-item" v-for="item of botLine">{{ item.name }}</p>
        </div>
    </header>
</template>

<script>
import { useStore } from '../store/index.js';


export default {
    created() {
        this.store = useStore();
    },
    data() {
        return {
            programs: [
                {
                    name: 'Адреса магазинов',
                    src: '/'
                },
                {
                    name: 'Доставка и оплата',
                    src: '/'
                },
                {
                    name: 'Бонусная программа',
                    src: '/'
                },
                {
                    name: 'Партнерская программа',
                    src: '/'
                },
            ],
            user: [
                {
                    svg: '/info baner item/user.svg',
                    text: 'Войти',
                    src: '/profil',
                },
                {
                    svg: '/info baner item/box.svg',
                    text: 'Заказы',
                    src: '/shop',
                },
                {
                    svg: '/info baner item/favorite.svg',
                    text: 'Закладки',
                    src: '/favorite',
                },
                {
                    svg: '/info baner item/shop.svg',
                    text: 'Корзина',
                    src: '/pay',
                },
            ],
            botLine: [
                {
                    name: 'Акции',
                    src: '/',
                },
                {
                    name: 'Подборки',
                    src: '/',
                },
                {
                    name: 'Читай-журнал',
                    src: '/',
                },
                {
                    name: 'Книжные циклы',
                    src: '/',
                },
            ]
        }
    },
    methods: {
        root(item) {
            let user = this.store.userInfo;
            if (user.actived == false) {
                user.loginActive = true;
            }
            else {
                this.$router.push(item);
                console.log(this.$router.push(item));
            }
        }
    }
}
</script>