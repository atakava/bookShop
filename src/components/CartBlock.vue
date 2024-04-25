<style lang="less" scoped>
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

        .active {
            background: #37ceb4;
            transition: .3s;

            svg {
                path {
                    stroke: #fff;
                }
            }

        }

        .active:hover {
            background: #44e0c6;

        }
    }
}
</style>
<template>
    <div class="porduct-cart">
        <img :src="book.img" @click="() => $router.push('/books/' + book.id)" alt="" class="img">
        <p class="price">{{ book.price }}₽</p>
        <p class="title-product">{{ book.title }}</p>
        <p class="author-product">{{ book.author }}</p>
        <div class="btn-block">
            <button class="buy" @click="buyProd(book)">КУПИТЬ</button>
            <button class="favorite" @click="favoriteAdd(book, index)" :class="{ active: book.favorite }">
                <svg data-v-415633a4="" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" alt="Избранное" class="favorite-icon">
                    <path data-v-415633a4="" clip-rule="evenodd" d="M17 5v14l-5-3.111L7 19V5h10z" stroke="#fff"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { useStore } from '../store';

export default {
    created() {
        this.store = useStore();
    },
    data() {
        return {
        }
    },
    methods: {
        favoriteAdd: function (item, index) {
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
        },
        buyProd: function (item) {
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
        }

    },
    props: {
        book: Object,
        index: Number,
    }
}
</script>