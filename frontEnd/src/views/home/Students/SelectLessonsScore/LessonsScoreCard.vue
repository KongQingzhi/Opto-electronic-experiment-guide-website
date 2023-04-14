<template>
    <div class="lessons-score-card flex justify-between box-shadow border-radius-sm my-1">
        <div class="lessons-left mx-1">
            <div class="text-center title-3 my-2">{{ props.title }}</div>
            <div class="my-2">
                {{ props.content }}
            </div>
        </div>
        <div id="myEcharts" ref="myChart"></div>
    </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { Ref,  onMounted, onUnmounted, ref } from 'vue';
import router from '../../../../router';
const props = defineProps<{ item: any, content: string, title: string }>();
const myChart: Ref<HTMLElement | undefined> = ref();
const list = props.item.list;
console.log(list);

onMounted(() => {
    let chart = echarts.init(myChart.value as HTMLElement);
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: list.map((items: any) => { return items.e_name }),
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '分数',
                type: 'bar',
                barWidth: '40%',
                data: list.map((items: any) => { return items.e_grade + items.q_grade }),
            }
        ]
    };
    chart.setOption(option);
})

onUnmounted(() => {
    echarts.dispose;
})

</script>
<style lang="scss" scoped>
.lessons-score-card {
    width: 100%;

    .lessons-left {
        width: 20rem;
    }

    #myEcharts {
        width: 30rem;
        height: 20rem;
        margin: 0 auto;
    }
}
</style>