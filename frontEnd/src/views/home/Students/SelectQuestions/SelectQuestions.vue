<template>
    <div class="flex flex-wrap">
        <QuestionsCard v-for="item in 6"></QuestionsCard>
    </div>
</template>

<script lang="ts" setup>
import QuestionsCard from './QuestionsCard.vue';
</script>