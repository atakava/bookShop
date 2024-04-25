<style lang="less" scoped></style>

<template>
    <section class="main">
        <BanerBlock></BanerBlock>
        <ProductCart></ProductCart>
    </section>
</template>

<script>
import BanerBlock from './BanerBlock.vue';
import Header from './Header.vue';
import ProductCart from './ContentProduct.vue';


export default {
    components: { Header, BanerBlock, ProductCart }
}
</script>