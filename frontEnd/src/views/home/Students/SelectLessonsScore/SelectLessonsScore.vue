<template>
    <div id="lessons-score">
        <LessonsScoreCard :item="item"></LessonsScoreCard>
        <LessonsScoreCard :item="item"></LessonsScoreCard>
        <LessonsScoreCard :item="item"></LessonsScoreCard>
        <LessonsScoreCard :item="item"></LessonsScoreCard>
        <LessonsScoreCard :item="item"></LessonsScoreCard>
        <LessonsScoreCard :item="item"></LessonsScoreCard>
    </div>
</template>

<script lang="ts" setup>
import LessonsScoreCard from './LessonsScoreCard.vue';
const item = {
    title:'杨氏双缝干涉实验',   
}
</script>
<style lang="scss" scoped>
</style>