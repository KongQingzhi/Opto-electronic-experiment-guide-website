<template>
    <div id="Home">
        <div class="my-10 text-right">12346556465</div>

        <Head class="head box-shadow"></Head>
        <div class="container border-radius-lg">
            <div class="img border-radius-lg">
                <el-carousel>
                    <el-carousel-item v-for="item in 8" :key="item">
                        <img src="https://cn.bing.com/th?id=OHR.OludenizTurkey_ZH-CN3467496108_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
                            alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="content">
                <Aside></Aside>
                <ElScrollbar class="contentItem border-radius-lg box-shadow px-2 py-1">
                    <router-view></router-view>
                </ElScrollbar>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Aside from './Aside.vue';
import Head from './Head.vue';
import { ref, Ref, onBeforeMount } from 'vue';
import { ElCarousel, ElScrollbar, ElCarouselItem } from 'element-plus';
const srcList: Ref<string[]> = ref(['']);
onBeforeMount(() => {

})
</script>

<style lang="scss" scoped>
#Home {
    width: 100%;
    height: 100vh;

    .head {
        margin-bottom: 2rem;
        border-radius: 0 0 1rem 1rem;
    }

    .container {
        height: calc(100vh - 20rem);

        .img {
            width: 100%;
            height: 15rem;
            margin-bottom: 2rem;

            img {
                width: 100%;
                height: 15rem;
                object-fit: cover;
            }
        }

        .content {
            display: flex;

            // @include disFlex(space-between,center);
            .contentItem {
                flex: 1;
                height: calc(100vh - 40rem);
                margin-left: 2rem;
                background-color: #fff;
            }
        }
    }
}
</style>