<style lang="less" scoped>
.content-user {
    max-width: 1100px;
    margin: auto;
    padding-top: 35px;

    .title-page {
        font-size: 32px;
        font-weight: 600;
        line-height: 40px;
        margin-bottom: 36px;
    }

    .block-user-data {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .block {
            p {
                font-size: 14px;
                margin-bottom: 8px;
                color: #707783;
                cursor: pointer;
            }

            input {
                width: 464px;
                height: 47px;
                padding: 0 25px;
                margin-bottom: 24px;
                border-radius: 4px;
                border: 1.5px solid #d3dadf;
                outline: none;
            }
        }
    }

    .edit {
        background-color: #26a9e0;
        width: 160px;
        height: 28px;
        font-size: 12px;
        font-weight: 600;
        color: #fff;
        border: 0;
        border-radius: 2px;
    }

    .delete {
        margin-top: 45px;

        .title-delete {
            color: #0d0c22;
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 8px;
        }

        p {
            color: #0d0c22;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            width: 450px;

        }
    }
}
</style>

<template>
    <div class="content-user">
        <div class="title-page">ЛИЧНЫЕ ДАННЫЕ</div>
        <div class="block-user-data">
            <div class="block">
                <p>Фамилия</p>
                <input class="lastname" v-model="this.store.userInfo.lastname" :disabled="disable">
            </div>
            <div class="block">
                <p>Имя</p>
                <input class="name" v-model="this.store.userInfo.login" :disabled="disable">
            </div>
            <div class="block">
                <p>Отчество</p>
                <input class="surname" v-model="this.store.userInfo.surname" :disabled="disable">
            </div>
            <div class="block">
                <p>Дата рождения</p>
                <input class="date" type="date" v-model="this.store.userInfo.date" :disabled="disable">
            </div>
            <div class="block">
                <p>Телефон</p>
                <input class="phone" v-model="this.store.userInfo.phone" :disabled="disable">
            </div>
            <div class="block">
                <p>E-mail</p>
                <input class="mail" v-model="this.store.userInfo.mail" :disabled="disable">
            </div>
        </div>
        <button class="edit" @click="edit()">{{ editText }}</button>
        <div class="delete">
            <h1 class="title-delete">Удаление профиля</h1>
            <p>
                Чтобы удалить ваш профиль, свяжитесь с нами через обратную связь.
                Пожалуйста, укажите в обращении свой номер телефона «79092178803». <br> <br>
                Мы удалим ваш профиль в течение 5 рабочих дней после обращения.
            </p>
        </div>
        <input type="text" v-model="texts">
        <button class="met" @click="qwe()">метод</button>
    </div>
</template>

<script>
import { useStore } from '../store';


export default {
    created() {
        this.store = useStore();
        fetch('https://localhost:44396/WeatherForecast.Get').then(i => i.json()).then(i => {
            this.store.pizda = i;
            console.log(this.store)
        });
        fetch('https://localhost:44396/WeatherForecast.Test').then(i => i.json()).then(i => {
            console.log(i)
        });
    },
    data() {
        return {
            disable: true,
            editText: "Изменить",
            texts: ''
        }
    },
    methods: {
        edit() {
            this.disable = !this.disable;
            if (this.disable == true) {
                this.editText = "Изменить";
            }
            else {
                this.editText = "Сохранить";
            }
        },
        qwe() {
            console.log(1);
            fetch('https://localhost:44396/WeatherForecast.Omg', {
                method: 'POST',
                body: JSON.stringify({
                    test: this.texts,
                    
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        },
    }
}
</script>