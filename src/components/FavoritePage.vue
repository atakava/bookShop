<style lang="less" scoped>
.favorite {
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
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        row-gap: 60px;
        column-gap: 60px;
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
}
</style>

<template>
    <div class="favorite">
        <div class="top-line">
            <h1 class="title-page">ЗАКЛАДКИ <span class="prod-count">товаров: {{ this.store.favorite.length }}</span></h1>
            <div class="clear-list" @click="clear()">
                <img src="info baner item/clear.svg" alt="" class="clear">
                <p>Удалить все</p>
            </div>
        </div>
        <div class="content" v-if="this.store.favorite.length > 0">
            <CartBlock :book="item" :index="index" v-for="(item, index) of this.store.favorite.reverse()"></CartBlock>
        </div>
        <div class="not-found" v-else>
            <img src="info baner item/404.svg" alt="">
            <h1>У вас пока нет закладок</h1>
            <p>Воспользуйтесь поиском или перейдите в каталог, чтобы найти интересные товары</p>
        </div>
    </div>
</template>

<script>
import { useStore } from '../store/index.js'
import CartBlock from './CartBlock.vue';    

export default {
    created() {
        this.store = useStore();
    },
    methods: {
        clear() {
            this.store.favorite = [];
        }
    },
    components: { CartBlock }
}
</script>