<template>
    <div v-if="!experimentsList"></div>
    <div v-else>
        <PageHeader :button="false" button-text="l" title="我的实验" />
        <div v-for="item in experimentsList" class="py-10">
            <SectionHeader :title="item.l_name" aside-title="" />
            <ExperimentsCard :experiments-item="items" v-for="items in item.list" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ExperimentsCard from './ExperimentsCard.vue';
import PageHeader from '../../../../components/PageHeader.vue';
import SectionHeader from '../../../../components/SectionHeader.vue';
import { selectExperiments } from '../../../../api/students';

import { onMounted, ref } from 'vue';
const experimentsList = ref<[{ l_name: string, list: [object] }]>();

selectExperiments({ s_no: JSON.parse(sessionStorage.getItem('user') as string).s_no }).then(res => {
    experimentsList.value = res.data.data;
})
</script>