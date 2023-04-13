<template>
    <div v-if="!question"></div>
    <div v-else>
        <PageHeader :button="false" button-text="123" title="123" />
        <div class="grid  grid-cols-5 px-5 my-1 gap-10">
            <div class=" leading-8 col-span-5 lg:col-span-3">
                {{ question.q_content }}
            </div>
            <div class="hidden lg:block py-16 col-span-2">
                <img class="h-[35rem] rounded-xl object-cover" :src="imgSrc" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import PageHeader from '../../../../components/PageHeader.vue';
import { questionsContent } from '../../../../api/students';
import { ref } from 'vue';
import axios from 'axios';
const router = useRouter();
const route = useRoute();
const question = ref();
questionsContent({ s_no: JSON.parse(sessionStorage.getItem('user') as string).s_no, q_finish: route.query.q_finish, q_id: route.query.q_id }).then(res => {
    console.log(res.data.data);
    question.value = res.data.data[0];
})
const imgSrc = ref('');
axios.get('/bing?n=8&format=js&idx=0').then(res => {
    imgSrc.value = 'https://www.bing.com' + res.data.images[(Math.random() * 7).toFixed(0)].url;
})
</script>