<style lang="less" scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    .popup {
        max-width: 400px;
        background: #fff;
        padding: 36px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        .title {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 24px;
        }

        .desc {
            font-size: 15px;
            line-height: 24px;
            margin-bottom: 24px;
            font-family: Inter, sans-serif;
            color: #0d0c22;
        }

        input {
            max-width: 328px;
            max-height: 52px;
            border: 1px solid #d3dadf;
            border-radius: 4px;
            margin: 0 0 24px 0;
            padding: 12px 16px;
        }

        .submit {
            width: 328px;
            height: 52px;
            background-color: #26a9e0;
            border: 0;
            border-radius: 4px;
            color: #fff;
            font-weight: 600;
        }

        .submit:hover {
            background-color: #238fbe;
        }

        .close {
            position: absolute;
            width: 40px;
            height: 40px;
            background-color: transparent;
            border: 0;
            border-radius: 4px;
            top: 5%;
            right: 5%;
            outline: none;
            z-index: 4;
        }
    }
}
</style>

<template>
    <div class="overlay" v-if="this.store.userInfo.loginActive">
        <div class="popup">
            <h1 class="title">Вход и регистрация</h1>
            <div class="desc">Чтобы войти или зарегистрироваться, укажите номер телефона.</div>
            <input type="text" class="login" placeholder="login" v-model="this.store.userInfo.login">
            <input type="text" class="mail" placeholder="mail" v-model="this.store.userInfo.password">
            <input type="text" class="password" placeholder="password" v-model="this.store.userInfo.mail">
            <button class="submit" @click="open">Войти</button>
            <button class="close" @click="show">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    class="modal__close-icon">
                    <path
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 011.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>

import { useStore } from '../store/index.js';

export default {

    created() {
        this.store = useStore();
    },
    data() {
        return {
        }
    },
    methods: {
        show() {
            this.store.userInfo.loginActive = !this.store.userInfo.loginActive;
        },
        open() {
            let user = this.store.userInfo;
            if (user.login != undefined && user.password != undefined && user.mail != undefined) {
                user.loginActive = !user.loginActive;
                user.actived = true;
                
            }
            else {
                window.alert('не зареган')
            }
           
        },
    }
}
</script>