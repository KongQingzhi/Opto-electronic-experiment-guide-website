<template>
  <div v-if="!experimentsScoreList"></div>
  <div v-else>
    <PageHeader :button="false" button-text="l" title="实验成绩" />
    <div v-for="item in experimentsScoreList" class="py-10">
      <SectionHeader :title="item.l_name" :aside-title="item.l_name" />
      <div class="flex flex-wrap">
        <ExperimentsScoreCard :item="items" v-for="items in item.list"></ExperimentsScoreCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from '../../../../components/PageHeader.vue';
import ExperimentsScoreCard from './ExperimentsScoreCard.vue';
import SectionHeader from '../../../../components/SectionHeader.vue';
import { selectExperimentsScore } from '../../../../api/students';
import { ref } from 'vue';
const experimentsScoreList = ref();
selectExperimentsScore({ s_no: JSON.parse(sessionStorage.getItem('user') as string).s_no }).then(res => {
  experimentsScoreList.value = res.data.data;
})
</script>