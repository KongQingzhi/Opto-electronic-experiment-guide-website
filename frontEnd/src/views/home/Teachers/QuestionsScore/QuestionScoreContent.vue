<template>
    <div v-if="!question"></div>
    <div v-else>
        <PageHeader :button="false" button-text="123" title="实验评分" />
        <div v-if="question.q_grade"
            :class="[question.q_grade >= 60 ? 'text-sky-700' : 'text-red-500', 'text-right text-3xl font-bold']">{{
                question.q_grade }}</div>
        <div class="grid  grid-cols-5 px-5 my-1 gap-10">
            <div class=" leading-8 col-span-5 lg:col-span-3">
                <div class="leading-6">
                    {{ question.q_content }}
                </div>
                <p v-if="question.q_reply"
                    class=" mt-5 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">{{ question.q_reply }}</p>
                <div v-if="Number(route.query.q_finish)" class="flex mt-6">
                    <input rows="4" name="comment" id="comment" v-model="q_grade"
                        class="block mr-5 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <ElButton type="primary" @click="submit">打分</ElButton>
                </div>
            </div>
            <div class="hidden lg:block py-16 col-span-2">
                <img class="h-[35rem] rounded-xl object-cover" :src="imgSrc" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { ElButton, ElMessage } from 'element-plus';
import PageHeader from '../../../../components/PageHeader.vue';
import { questionsContent } from '../../../../api/students';
import { questionScoring } from '../../../../api/teachers';

import { ref } from 'vue';
import axios from 'axios';
const router = useRouter();
const route = useRoute();
const question = ref();
const q_grade = ref(route.query.q_grade);
questionsContent({ s_no: route.query.s_no, q_finish: route.query.q_finish, q_id: route.query.q_id }).then(res => {
    question.value = res.data.data[0];
})
const imgSrc = ref('');
axios.get('/bing?n=8&format=js&idx=0').then(res => {
    imgSrc.value = 'https://www.bing.com' + res.data.images[(Math.random() * 7).toFixed(0)].url;
})
const submit = async () => {
    questionScoring({ qs_id: route.query.qs_id, q_grade: q_grade.value }).then(res => {
        const { msg, status } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            router.push({
                name: 'QuestionsScore'
            })
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
        }
    })
}
</script>