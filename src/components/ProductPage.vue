<style lang="less" scoped>
.product-content {
    max-width: 1298px;
    margin: auto;

    .nav-line {
        font-size: 14px;
        color: #707783;
        margin: 24px 0 36px 0;
    }

    .product-info {
        display: flex;
        justify-content: space-between;

        .img-book {
            position: relative;

            .img-product {
                width: 304px;
                height: 500px;
            }

            .slider-pages {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 22px 0;

                .page-img {
                    width: 67px;
                    height: 67px;
                    margin-right: 12px;
                    cursor: pointer;
                }

                .view-img {
                    width: 67px;
                    height: 67px;
                    border: 2px solid #edf3f7;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;
                    cursor: pointer;
                }

                .view-img:hover {
                    border: 2px solid #26a9e0;
                }
            }
        }

        .product-params {
            width: 470px;

            .title-product {
                font-size: 24px;
                font-weight: 500;
                margin-bottom: 8px;
                cursor: pointer;
            }

            .author-product {
                font-size: 16px;
                font-weight: 500;
                color: #26a9e0;
                cursor: pointer;
                margin-bottom: 24px;
            }

            .block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 16px;
                color: #707783;
                margin-bottom: 18px;
            }
        }

        .buy-block {
            width: 408px;
            height: 400px;
            padding: 36px;
            border: 2px solid #edf3f7;
            border-radius: 4px;

            .price-info {
                display: flex;
                justify-content: space-between;

                .price {
                    font-size: 30px;
                    font-weight: 500;
                }

                .bonus {
                    font-weight: 500;
                    padding: 4px 8px;
                    color: #26a9e0;
                    border: 1px #26a9e0 solid;
                    border-radius: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            .btn-block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 16px;

                .btn-buy {
                    border: 0;
                    max-width: 262px;
                    width: 100%;
                    padding: 16px;
                    background-color: #26a9e0;
                    border-radius: 4px;
                    text-transform: uppercase;
                    font-size: 14px;
                    font-weight: 600;
                    color: #fff;
                }

                .disabledBtn {
                    cursor: not-allowed;
                }

                .btn-favorite {
                    width: 52px;
                    height: 52px;
                    border-radius: 4px;
                    border: 0;
                    background-color: #edf3f7;

                    path {
                        stroke: #26a9e0;
                    }
                }

                .favorite {
                    background-color: #37ceb4;
                    
                    path {
                        stroke: #fff;
                    }
                }
            }

            .stock {
                color: #37ceb4;
                font-size: 14px;
                margin: 18px 0;

                .no-stock {
                    color: #f34a57;
                }
            }

            .block {
                margin: 0 0 16px 0;
                color: #0d0c22;

                .top {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    img {
                        margin-right: 12px;
                    }
                }

                .bot {
                    font-size: 14px;
                    margin-left: 34px;
                    color: #26a9e0;
                    cursor: pointer;
                }
            }
        }

    }

    .descriptoin-product {
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        display: flex;
        flex-direction: column;
        max-width: 852px;
        width: 100%;
        margin-top: 15px;
        margin-bottom: 12px;
        color: #0d0c22;
    }
}
</style>

<template>
    <div class="product-content">
        <div class="nav-line">{{ this.product.type }} > {{ this.product.genre }}</div>
        <div class="product-info">
            <div class="img-book">
                <img :src="this.product.img" alt="" class="img-product">
                <div class="slider-pages">
                    <img class="page-img" v-for="img of this.product.pagesImg" :src="img">
                    <div class="view-img">
                        <p>+ {{ this.product.pagesImg.length }}</p>
                    </div>
                </div>
            </div>
            <div class="product-params">
                <div class="title-product">{{ this.product.title }}</div>
                <div class="author-product">{{ this.product.author }}</div>
                <div class="id-block block">
                    <p>ID товара</p>
                    <div class="id">{{ this.product.id }}</div>
                </div>
                <div class="year-public block">
                    <p>Год издания</p>
                    <div class="year block">{{ this.product.yearOfPublishing }}</div>
                </div>
                <div class="pages block">
                    <p>Страниц</p>
                    <div class="page">{{ this.product.pages }}</div>
                </div>
                <div class="circulation block">
                    <p>Тираж</p>
                    <div class="page">{{ this.product.circulation }}</div>
                </div>
                <div class="weight block">
                    <p>Вес</p>
                    <div class="page">{{ this.product.weight }}.г</div>
                </div>
                <div class="age-limit block">
                    <p>Возрастное ограничение</p>
                    <div class="page">{{ this.product.ageLimit }}+</div>
                </div>
            </div>
            <div class="buy-block">
                <div class="price-info">
                    <p class="price">{{ this.product.price }}руб</p>
                    <div class="bonus" v-if="Math.trunc(this.product.price / 12) > 0">
                        <p>
                            + {{ Math.trunc(this.product.price / 12) }} бонусов
                        </p>
                    </div>
                </div>
                <div class="btn-block">
                    <button class="btn-buy" :class="{ disabledBtn: !this.product.stock }" :disabled="!this.product.stock"
                        @click="buy(this.product)">КУПИТЬ</button>
                    <button class="btn-favorite" :class="{ favorite: this.product.favorite }" @click="favorite(this.product)">
                        <svg data-v-415633a4="" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" alt="Избранное" class="favorite-icon">
                            <path data-v-415633a4="" clip-rule="evenodd" d="M17 5v14l-5-3.111L7 19V5h10z" stroke="#fff"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="stock">
                    <p v-if="this.product.stock">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                            alt="check" class="product-detail-offer__availability-icon">
                            <path d="M15 1L5.405 11 1 6.408" stroke="#37CEB4" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                        в наличии
                    </p>
                    <p class="no-stock" v-else>Нет в наличии</p>
                </div>
                <div class="delivery block">
                    <div class="top">
                        <img src="/info baner item/deliver.svg" alt="">
                        <p>Доставка курьером, 175 ₽</p>
                    </div>
                    <div class="bot">Варианты доставки</div>
                </div>
                <div class="pin block">
                    <div class="top">
                        <img src="/info baner item/pin.svg" alt="">
                        <p> В магазины сети, Бесплатно</p>
                    </div>
                    <div class="bot">Адреса магазинов</div>
                </div>
                <div class="desc block">
                    <div class="top">
                        <img src="/info baner item/deliver.svg" alt="">
                        <p>В пункты выдачи, 110 ₽</p>
                    </div>
                    <div class="bot">Пункты выдачи</div>
                </div>
            </div>
        </div>
        <div class="descriptoin-product">
            {{ this.product.description }}
        </div>
    </div>
</template>

<script>

import { useStore } from "../store/index.js"

export default {
    created() {
        this.store = useStore();
        this.pagesSplice();
    },
    methods: {
        pagesSplice() {
            if (this.product.pagesImg.length > 3) {
                this.product.pagesImg.splice(this.product.pagesImg.length - 4);
            }
        },
        buy(item) {
            this.store.buy.push({
                id: item.id,
                img: item.img,
                pagesImg: item.pagesImg,
                title: item.title,
                author: item.author,
                price: item.price,
                star: item.star,
                favorite: true,
                shop: item.shop,
                new: item.new,
                stock: item.stock,
                hit: item.hit,
                yearOfPublishing: item.yearOfPublishing,
                pages: item.pages,
                size: item.size,
                type: item.type,
                genre: item.genre,
                circulation: item.circulation,
                weight: item.weight,
                ageLimit: item.ageLimit,
                description: item.description,
                quantity: item.quantity,
            });
        },
        favorite(item) {
            if (item.favorite == false) {
                this.store.favorite.push({
                    id: item.id,
                    img: item.img,
                    pagesImg: item.pagesImg,
                    title: item.title,
                    author: item.author,
                    price: item.price,
                    star: item.star,
                    favorite: true,
                    shop: item.shop,
                    new: item.new,
                    stock: item.stock,
                    hit: item.hit,
                    yearOfPublishing: item.yearOfPublishing,
                    pages: item.pages,
                    size: item.size,
                    type: item.type,
                    genre: item.genre,
                    circulation: item.circulation,
                    weight: item.weight,
                    ageLimit: item.ageLimit,
                    description: item.description,
                    quantity: item.quantity,
                });
                item.favorite = true;
                console.log(this.isActive)
            }
            else {

                item.favorite = false;
                this.store.favorite.splice(index, 1);
                console.log(this.isActive)
            }
        }
    },
    computed: {
        product() {
            return this.store.products.find(i => i.id === parseInt(this.$route.params.id)) || null;
        },
    },
}
</script>