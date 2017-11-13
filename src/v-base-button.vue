<template>
    <div class=".base-button">
    </div>
</template>

<script>
    export default {
        data:function() {
        },
        methods: {
            clickAction:function () {
                console.log("====被点击了")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .base-button {
        display: block;
        background: red;
        width: 100px;
        height: 100px;
    }
</style>
