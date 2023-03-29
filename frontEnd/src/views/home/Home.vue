<template>
    <div id="Home">
        <div class="head hidden box-shadow">
            <Heard></Heard>
        </div>
        <div class="container border-radius-lg">
            <div class="img border-radius-lg hidden">
                <el-carousel>
                    <el-carousel-item v-for="item in 8" :key="item">
                        <img src="https://cn.bing.com/th?id=OHR.OludenizTurkey_ZH-CN3467496108_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
                            alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="content">
                <Aside></Aside>
                <div class="contentItem border-radius-lg box-shadow hidden px-2 py-2">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Heard from './heard.vue';
import Aside from './aside.vue';
import { ref, Ref, onBeforeMount } from 'vue';
import { ElCarousel, ElCarouselItem } from 'element-plus';
// import { getBingImage } from '../../api/home';
const srcList: Ref<string[]> = ref(['']);
onBeforeMount(() => {

})


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
                margin-left: 2rem;
                background-color: #fff;
            }
        }
    }
}
</style>