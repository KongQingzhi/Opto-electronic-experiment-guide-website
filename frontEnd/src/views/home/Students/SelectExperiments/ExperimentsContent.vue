<template>
    <div id="experimentsContent">
        <h3 class="text-center my-1">{{ experiment.e_name }}</h3>
        <div class="my-1">
            <span class="mx-2">任课教师：{{ experiment.t_name }}</span>
            <span class="mx-2">上课教师：{{ experiment.r_name }}</span>
        </div>
        <hr>
        <div class="content my-1">{{ experiment.e_content }}</div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const experiment = route.query;
</script>

<style lang="scss">
#experimentsContent {
    .content {
        width: 100%;
        white-space: normal; //设置文字换行
        word-wrap: break-word; //设置数字强制换行
    }
}
</style>