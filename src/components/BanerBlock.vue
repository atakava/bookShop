<style lang="less" scoped>
.baner-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 36px;

    .wrap-baner {
        position: relative;

        .baner-block {
            width: 893px;
            height: 400px;
            overflow: hidden;
            display: flex;

            img {
                width: 893px;
                height: 400px;
                transition: .6s;
            }
        }

        .bullets {
            display: flex;
            position: absolute;
            bottom: 6%;
            right: 6%;

            div {
                color: #fff;
                cursor: pointer;
                margin: 0 3px;
            }
        }

        .btn-block {
            .btn {
                fill: #fff;
                width: 40px;
                height: 40px;
                position: absolute;
                cursor: pointer;
                border: 0;
                border-radius: 4px;
                background-color: rgba(225, 225, 255, .3);
            }

            .left {
                top: 46%;
                left: 4%;
            }

            .right {
                top: 46%;
                right: 4%;
            }
        }
    }



    .info-block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 400px;

        .item-info-block {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 2px solid #edf3f7;
            border-radius: 4px;
            padding: 20px 14px;
            cursor: pointer;
            transition: .2s;

            .text-block {
                width: 237px;

                .title {
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 6px;
                }

                .desc {
                    font-size: 14px;
                    font-weight: 400;
                    color: #707783;
                }
            }

            img {
                width: 72px;
                height: 72px;
            }
        }

        .item-info-block:hover {
            background-color: #26a9e0;
            color: #fff;
            border: 0;

            p.desc {
                color: #fff;
            }
        }
    }
}

.wrap {
    max-width: 1296px;
    margin: 0 auto;
}
</style>

<template>
    <div class="baner-section wrap">
        <div class="wrap-baner">
            <div class="baner-block">
                <img :src="item.img" alt="" v-for="(item, i) of banerImg"
                    :style="{ transform: this.transform + -width * current + 'px)' }">
            </div>
            <div class="btn-block">
                <button class="btn left" @click="prevSlide()">
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
            <div class="bullets">
                <div v-for="(slide, i) in this.banerImg" @click="selectSlide(i)"
                    v-html="i == current ? '&#9679;' : '&omicron;'">
                </div>
            </div>
        </div>

        <div class="info-block">
            <div class="item-info-block" v-for="item of infoBlock">
                <div class="text-block">
                    <h1 class="title">{{ item.title }}</h1>
                    <p class="desc">{{ item.text }}</p>
                </div>
                <img :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            transform: 'translateX(',
            width: 893,
            current: 0,
            timer: 0,
            banerImg: [
                {
                    img: 'baner/1.jpg',
                    src: '/',
                },
                {
                    img: 'baner/2.jpg',
                    src: '/',
                },
                {
                    img: 'baner/3.png',
                    src: '/',
                },
                {
                    img: 'baner/4.webp',
                    src: '/',
                },
                {
                    img: 'baner/5.webp',
                    src: '/',
                },
            ],
            infoBlock: [
                {
                    title: '«Всех убил  садовник...»',
                    text: 'Настоящие звёзды детектива!',
                    img: 'info baner item/1.png',
                },
                {
                    title: 'Книжный дозор',
                    text: 'Делитесь впечатлениями, получайте бонусы',
                    img: 'info baner item/2.svg',
                },
                {
                    title: 'Путеводитель по миру Толкина',
                    text: '«Хоббит», «Властелин колец» и другие книги',
                    img: 'info baner item/3.svg',
                },
            ]
        }
    },
    created() {
        this.play();
    },
    methods: {
        nextSlide: function () {
            this.current++;
            if (this.current >= this.banerImg.length) {
                this.current = 0;
            }
            this.resetPlay();
        },
        prevSlide: function () {
            this.current--;
            if (this.current < 0) {
                this.current = this.banerImg.length - 1;
            }
            this.resetPlay();
        },
        selectSlide: function (i) {
            this.current = i;
            this.resetPlay();
        },
        resetPlay: function () {
            clearInterval(this.timer);
            this.play();
        },
        play: function () {
            let app = this;
            this.timer = setInterval(function () {
                app.nextSlide();
            }, 6000)
        }
    }
}
</script>