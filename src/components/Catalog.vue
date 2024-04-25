<style lang="less" scoped>
.catalog {
    max-width: 1296px;
    margin: auto;
    display: flex;
    padding-top: 50px;
    justify-content: space-between;

    .filter-bar {
        max-width: 375px;
        width: 375px;
        border: 1px solid #000;
        height: 100vh;

        .title-page {
            width: 100%;
            text-align: center;
        }
    }
}
</style>

<template>
    <div class="catalog">
        <div class="filter-bar">
            <h1 class="title-bar">
                КНИГИ
                <ul class="list">
                    <li class="box">
                        <label for="q"> <input type="checkbox" id="q" class="checkbox"> book</label>
                    </li>
                    <li class="box">
                        <label for="q"> <input type="checkbox" id="q" class="checkbox"> book</label>
                    </li>
                    <li class="box">
                        <label for="q"> <input type="checkbox" id="q" class="checkbox"> book</label>
                    </li>
                    <li class="box">
                        <label for="q"> <input type="checkbox" id="q" class="checkbox"> book</label>
                    </li>
                    <li class="box">
                        <label for="q"> <input type="checkbox" id="q" class="checkbox"> book</label>
                    </li>
                    <li class="box">
                        <label for="q"> <input type="checkbox" id="q" class="checkbox"> book</label>
                    </li>
                    <li class="box">
                        <label for="q"> <input type="checkbox" id="q" class="checkbox"> book</label>
                    </li>
                    <li class="box">
                        <label for="q"> <input type="checkbox" id="q" class="checkbox"> book</label>
                    </li>
                </ul>
            </h1>
        </div>
        <div class="catalog-block">
            <div class="title-page">
                КАТАЛОГ ТОВАРОВ
            </div>
            <div class="content">

            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>