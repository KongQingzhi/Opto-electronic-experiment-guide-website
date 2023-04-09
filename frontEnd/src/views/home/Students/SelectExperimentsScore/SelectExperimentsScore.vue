<template>
  <div class="flex flex-wrap">
    <ExperimentsScoreCard :item="item" v-for="item in card"></ExperimentsScoreCard>
  </div>
</template>

<script lang="ts" setup>
import ExperimentsScoreCard from './ExperimentsScoreCard.vue';

const card = [{
  title: '实验1',
  e_grade: 12,
  q_grade: 52,
  eq_grade: 64
}, {
  title: '实验1',
  e_grade: 52,
  q_grade: 52,
  eq_grade: 104
}, {
  title: '实验1',
  e_grade: 77,
  q_grade: 52,
  eq_grade: 129
}, {
  title: '实验1',
  e_grade: 12,
  q_grade: 25,
  eq_grade: 37
}, {
  title: '实验1',
  e_grade: 72,
  q_grade: 82,
  eq_grade: 154
}, {
  title: '实验1',
  e_grade: 72,
  q_grade: 32,
  eq_grade: 104
}]
</script>

<style lang="scss" scoped>
</style>