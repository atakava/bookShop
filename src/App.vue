<style lang="less" scoped></style>

<template>
    <div class="container">
        <Header></Header>
        <Login></Login>
        <router-view></router-view>
        <PopupTest></PopupTest>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Login from './components/Login.vue';
import PopupTest from './components/popupTest.vue';

export default {
    components: { Header, Footer, Login, PopupTest }
}

</script>