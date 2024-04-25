<style lang="less" scoped>
.container {
    padding-top: 45px;
    max-width: 1298px;
    margin: auto;

    .top-line {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title-page {
            font-size: 32px;
            font-size: 600;
            display: flex;
            align-items: center;

            span {
                font-size: 14px;
                font-weight: normal;
                color: #707783;
                margin-left: 16px;
            }
        }

        .clear-list {
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #26a9e0;
        }
    }

    .content {
        margin-top: 75px;
        display: flex;
        flex-direction: column;

        .product {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border: 2px solid #edf3f7;
            border-radius: 4px;
            margin-bottom: 40px;
            padding: 35px;

            .product-img {
                width: 150px;
                height: 150px;
            }

            .info-books {
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;

                div {
                    cursor: pointer;
                }

                .title {
                    font-size: 22px;
                    font-weight: 600;
                }

                .author {
                    font-size: 18px;
                    color: #26a9e0;
                    margin: 8px 0;
                }
            }


            .qty-block {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 20px;

                button {
                    background-color: transparent;
                    border: 0;
                    font-size: 20px;
                    margin: 0 20px;
                }

                button:hover {
                    background-color: #edf3f7;
                }
            }

            .price {
                font-size: 22px;
                font-weight: 500;
            }

            .delete {
                background-color: transparent;
                border: 0;
                font-size: 30px;
            }
        }
    }

    .not-found {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 60px;

        img {
            margin: 20px 0;
        }

        h1 {
            font-size: 20px;
        }

        p {
            font-size: 14px;
            margin-top: 10px;
            color: #707783;
            width: 299px;
            text-align: center;
        }
    }
    .check {
        font-size: 24px;
        font-weight: 500;

        button {
           width: 268px;
           height: 44px;
           background-color: #26a9e0;
           border: 0;
           border-radius: 4px;
           color: #fff;
           font-weight: 600;
           margin: 20px 0;
        }
    }
}
</style>
<template>
    <div class="container">
        <div class="top-line">
            <h1 class="title-page">ПОКУПКИ <span class="prod-count">товаров: {{ this.store.buy.length }}</span></h1>
            <div class="clear-list" @click="clear()">
                <img src="info baner item/clear.svg" alt="" class="clear">
                <p>Удалить все</p>
            </div>
        </div>
        <div class="content" v-if="this.store.buy.length > 0">
            <div class="product" v-for="(item, index) of this.store.buy" @click="consoles(item)">
                <img :src="item.img" alt="" class="product-img">
                <div class="info-books">
                    <div class="title">{{ item.title }}</div>
                    <div class="author">{{ item.author }}</div>
                    <div class="genre">{{ item.genre }}</div>
                </div>
                <div class="qty-block">
                    <button class="minus" @click="qtyMinus(item)">-</button>
                    <div class="quantity">{{ item.quantity }}</div>
                    <button class="plus" @click="qtyPlus(item)">+</button>
                </div>
                <div class="price">{{ item.price * item.quantity }}₽</div>
                <button class="delete" @click="clearItem(index)">x</button>
            </div>
        </div>
        <div class="not-found" v-else>
            <img src="info baner item/404.svg" alt="">
            <h1>У вас пока нет закладок</h1>
            <p>Воспользуйтесь поиском или перейдите в каталог, чтобы найти интересные товары</p>
        </div>
        <div class="check" v-if="this.store.buy.length > 0">
            <div class="total">Всего: {{ totalPrice() }}</div>
            <button class="buy" @click="pay()">Оплатить</button>
        </div>
    </div>
</template>

<script>
import { useStore } from '../store/index.js'
import CartBlock from './CartBlock.vue'

export default {
    created() {
        this.store = useStore();
    },
    methods: {
        clear() {
            this.store.buy = [];
        },
        consoles(item) {
            console.log(item.quantity);
        },
        qtyPlus(item) {
            item.quantity++;
        },
        qtyMinus(item) {
            item.quantity--;
            if (item.quantity < 0) {
                item.quantity = 0
            }
        },
        clearItem(index) {
            this.store.buy.splice(index, 1);
        },
        totalPrice() {
            var sum = 0;
            this.store.buy.forEach((i) => {
                sum += parseInt(i.price * i.quantity)
            });
            return sum;
        },
        pay() {
            this.store.pay = this.store.buy;
            this.store.buy = [];
        },
    },
    components: { CartBlock }
}
</script>