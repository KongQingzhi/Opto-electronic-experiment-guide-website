<template>
    <div v-if="!questionsList">
        <Loading></Loading>
    </div>
    <div v-else>
        <PageHeader :button="false" button-text="l" title="我的试卷" />
        <div v-for="item in questionsList" class="py-10">
            <SectionHeader :title="item.l_name" :aside-title="item.l_name" />
            <div class="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8 ">
                <QuestionsCard :questions-item="items" class="col-span-1" v-for="items in item.list" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import QuestionsCard from './QuestionsCard.vue';
import PageHeader from '../../../../components/PageHeader.vue';
import SectionHeader from '../../../../components/SectionHeader.vue';
import { selectQuestions } from '../../../../api/students';
import Loading from '../../../../components/Loading.vue';
import { ref } from 'vue';
const questionsList = ref();
selectQuestions({ s_no: JSON.parse(sessionStorage.getItem('user') as string).s_no }).then(res => {
    questionsList.value = res.data.data;
})
</script>