<template>
  <div class="flex flex-wrap">
    <ExperimentsScoreCard v-for="item in 4"></ExperimentsScoreCard>
  </div>
</template>

<script lang="ts" setup>
import ExperimentsScoreCard from './ExperimentsScoreCard.vue';
</script>

<style lang="scss">
@import '../../../../assets/style/common.scss';

</style>