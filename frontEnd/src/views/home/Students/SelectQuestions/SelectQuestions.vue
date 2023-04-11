<template>
    <PageHeader title="我的试卷" />
    <div class="flex flex-wrap">
        <SectionHeader title="ahrbviabirgbvaie" aside-title="aiuhbgiuabeiuvbaei" />
        <div class="grid grid-col-3">
            <div class="col-span-1">
                <QuestionsCard v-for="item in 8" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import QuestionsCard from './QuestionsCard.vue';
import PageHeader from '../../../../components/PageHeader.vue';
import SectionHeader from '../../../../components/SectionHeader.vue';
</script>