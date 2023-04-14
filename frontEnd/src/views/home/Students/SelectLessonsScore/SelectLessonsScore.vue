<template>
    <div v-if="!lessonsList"></div>
    <div v-else>
        <PageHeader :button="true" button-text="详细内容" @click-button="$router.push({ name: 'selectExperimentsScore' })"
            title="课程成绩" />
        <div v-for="item in lessonsList" class="py-10">
            <SectionHeader :title="item.l_name" :aside-title="item.l_name" />
            <LessonsScoreCard :content="item.l_content" :title="item.l_name" :item="item" />
        </div>

    </div>
</template>

<script lang="ts" setup>
import PageHeader from '../../../../components/PageHeader.vue';
import LessonsScoreCard from './LessonsScoreCard.vue';
import SectionHeader from '../../../../components/SectionHeader.vue';
import { selectLessonsScore } from '../../../../api/students';
import { ref } from 'vue';
const lessonsList = ref();
selectLessonsScore({ s_no: JSON.parse(sessionStorage.getItem('user') as string).s_no }).then(res => {
    lessonsList.value = res.data.data;
    console.log(lessonsList.value);

})
</script>
<style lang="scss" scoped></style>