<style lang="less" scoped>
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

.container-comment {
    overflow: hidden;

    .wrap {
        display: flex;
        align-items: center;

        .comment-block {
            padding: 8px;

            .content-wrap {
                transition: .5s;
                display: flex;
                justify-content: space-between;
                width: 650px;
                min-width: 650px;
                height: 352px;
                background-color: #ecf6fe;
                padding: 36px;

                .info-block {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .title {
                        font-size: 20px;
                        font-weight: 500;
                        margin-bottom: 16px;
                    }

                    .desc {
                        font-weight: 400;
                        font-size: 16px;
                        width: 348px;
                    }
                }

                img {
                    width: 186px;
                    height: 280px;
                }
            }

        }
    }
}
</style>

<template>
    <div class="app-head">
        <h1 class="title-category">ЧИТАТЕЛИ О КНИГАХ</h1>
        <div class="btn-block">
            <button class="btn left" @click="prevSlider()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="embla__button-icon">
                    <path
                        d="M14.707 6.293a1 1 0 010 1.414L10.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z">
                    </path>
                </svg>
            </button>
            <button class="btn right" @click="nextSlide()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="embla__button-icon">
                    <path
                        d="M9.293 6.293a1 1 0 000 1.414L13.586 12l-4.293 4.293a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="container-comment">
        <div class="wrap">
            <div class="comment-block" v-for="comment of this.comments">
                <div class="content-wrap" :style="{ transform: this.transform + -width * current + 'px)' }">
                    <div class="info-block">
                        <p class="title">{{ comment.title }}</p>
                        <p class="desc">{{ short(comment.description, 200) }}</p>
                        <p class="author">{{ comment.author }}</p>
                    </div>
                    <img :src="comment.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from '../store';


export default {
    created() {
        this.store = useStore();
        this.comments = this.store.comments
    },
    data() {
        return {
            transform: 'translateX(',
            width: 666,
            current: 0,
            genres: [this.genre],
        }
    },
    methods: {
        nextSlide: function () {
            this.current++;
            if (this.current >= this.comments.length - 1) {
                this.current = 0
            }
        },
        prevSlider: function () {
            this.current--;
            if (this.current < 0) {
                this.current = this.comments.length - 1;
            }
        },
        filterBook: function (genre) {
            return this.books.filter(book => {
                if (genre.indexOf(book.genre) > -1 || genre.length === 0) {
                    return true;
                }
            });
        },
        short: (str, maxlen) => str.length <= maxlen ? str : str.slice(0, maxlen) + '...',
    },
}
</script>