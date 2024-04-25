<style lang="less" scoped>
.content {
    position: fixed;
    bottom: 0;
    height: 5vh;
    width: 100%;
    background-color: yellow;
}
.close {

}
</style>

<template>
    <div class="content" :style="{close: close}">
        <button class="close">

        </button>
    </div>
</template>

<script>

export default {
    data() {
        return  {
            
        }
    },
    methods: {
        close() {

        }
    }
}
</script>