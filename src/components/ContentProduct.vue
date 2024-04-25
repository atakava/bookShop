<style lang="less" scoped>
.product-content {
    max-width: 1298px;
    margin: auto;

    .app-head {
        margin: 48px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .title-category {
            margin: 38px 0;
            font-size: 32px;
            font-weight: 600;
            cursor: pointer;
            text-transform: uppercase;
        }

        .title-category:hover {
            color: #26a9e0;
        }

        .btn-block {
            button {
                background-color: transparent;
                border: 2px solid #edf3f7;
                border-radius: 4px;
                width: 40px;
                height: 40px;
            }

            .left {
                margin-right: 16px;
            }
        }
    }


    .line-category {
        margin-bottom: 48px;
        overflow: hidden;

        .wrap {
            display: flex;
            align-items: center;
            transition: .5s;
        }

        .porduct-cart {
            padding: 0 8px;
            max-height: 500px;
            height: 470px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            p {
                cursor: pointer;
            }

            img {
                width: 200px;
                height: 280px;
            }

            .price {
                font-size: 20px;
                font-weight: 500;
                margin: 15px 0;
            }

            .title-product {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-word;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                padding: 0 0 6px 0;
                width: 100%;
            }

            .title-product:hover {
                color: #26a9e0;
            }

            .author-product {
                font-size: 14px;
                color: #707783;
                font-weight: 400;
            }

            .btn-block {
                display: flex;
                align-items: center;
                margin-top: 30px;

                .buy {
                    background-color: #26a9e0;
                    color: #fff;
                    width: 142.66px;
                    height: 36px;
                    border: 0;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 600;
                    margin-right: 8px;
                    cursor: pointer;
                    transition: color .2s ease, background-color .2s ease;
                }

                .buy:hover {
                    background-color: #1877a0;

                }

                .favorite {
                    background: #ecf6fe;
                    border-radius: 4px;
                    border: 0;
                    width: 36px;
                    height: 36px;
                    cursor: pointer;
                    transition: color .2s ease, background-color .2s ease;

                    svg {
                        path {
                            stroke: #26a9e0;
                        }
                    }
                }

                .favorite:hover {
                    background-color: #d0e1ef;
                }
            }
        }
    }
}
</style>

<template>
    <div class="product-content">
        <Cart :books="this.product" :genre="'Манга'"></Cart>
        <Cart :books="this.product" :genre="'История'"></Cart>
        <Comment></Comment>
        <Cart :books="this.product" :genre="'Фэнтези'"></Cart>

    </div>
</template>

<script>
import { useStore } from "../store/index.js"
import Cart from "./Cart.vue";
import Comment from "./Comment.vue";

export default {
    created() {
        this.store = useStore();
        this.product = this.store.products;
        this.splices = this.product.splice(this.product.length - 18)
    },
    data() {
        return {
            transform: 'translateX(',
            width: 1298,
            current: 0,
            genre: [],
        };
    },
    methods: {
        nextSlide: function () {
            this.current++;
            if (this.current >= this.splices.length / 6) {
                this.current = 0;
            }
        },
        prevSlider: function () {
            this.current--;
            if (this.current < 0) {
                this.current = ((this.splices.length) / 6) - 1;
            }
        },
    },
    components: { Cart, Comment }
}
</script>