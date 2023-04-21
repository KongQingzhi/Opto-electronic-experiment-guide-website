<template>
    <div v-if="!experiment"></div>
    <div v-else>
        <PageHeader :button="false" button-text="123" :title="experiment.e_name" />
        <div>
            <div class="my-1 mb-10 grid grid-cols-5">
                <span class="col-span-1 mx-2">任课教师：{{ experiment.t_name }}</span>
                <span class="col-span-1 mx-2">教师职称：{{ experiment.t_pro }}</span>
                <span class="col-span-1 mx-2">上课时间：{{ experiment.e_time }}</span>
                <span class="col-span-1 mx-2">教学楼：{{ experiment.r_build }}</span>
                <span class="col-span-1 mx-2">教室号：{{ experiment.r_no }}</span>
            </div>
            <div class="grid  grid-cols-5 px-5 my-1 gap-10">
                <div v-html="experiment.e_content" class="e_content leading-8 col-span-5 lg:col-span-3"></div>
                <div class="hidden lg:block py-16 col-span-2">
                    <img class="h-[35rem] rounded-xl object-cover" :src="imgSrc" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import PageHeader from '../../../../components/PageHeader.vue';
import { experimentsContent } from '../../../../api/students';
import { ref } from 'vue';
import axios from 'axios';
const router = useRouter();
const route = useRoute();
const experiment = ref();
experimentsContent({ e_id: route.query.e_id }).then(res => {
    experiment.value = res.data.data[0];
})
const imgSrc = ref('');
axios.get('/bing?n=8&format=js&idx=0').then(res => {
    imgSrc.value = 'https://www.bing.com' + res.data.images[(Math.random() * 7).toFixed(0)].url;
})
</script>
<style>
.e_content p {
    text-indent: 2em;
    margin: 0.5rem 0;
}
</style>