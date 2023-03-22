<template>
    <div id="Home">
        <div class="head hidden box-shadow">
            <Heard></Heard>
        </div>
        <div class="container box-shadow border-radius-lg py-2 px-2">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import Heard from './heard.vue';
</script>

<style lang="scss" scoped>
@import '../../assets/style/common.scss';

#Home {
    width: 100%;
    height: 100vh;

    .head {
        margin-bottom: 2rem;
        border-radius: 0 0 1rem 1rem;
    }

    .container {
        height: calc(100vh - 10rem);
        background-color: #fff;
        @include disFlex(space-between, center)
    }
}
</style>