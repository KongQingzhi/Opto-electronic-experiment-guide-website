<template>
    <div class="lessons-score-card flex justify-between box-shadow border-radius-sm my-1">
        <div class="lessons-left mx-1">
            <div class="text-center title-3 my-2">{{ item.title }}</div>
            <div class="my-2">
                若光束是由经典粒子组成，将光束照射于一条狭缝，通过狭缝后，冲击于探测屏，则在探射屏应该会观察到对应于狭缝尺寸与形状的图样。可是，实际进行这单缝实验时，探测屏会显示出衍射图样，光束会被展开，狭缝越狭窄，则展开角度越大。
            </div>
            <div class="text-center">
                <ElButton v-if="1" type="primary">提交</ElButton>
                <div class="text-center title-5"></div>
            </div>
        </div>
        <div id="myEcharts" ref="myChart"></div>
    </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { ElButton } from 'element-plus';
import { Ref, onMounted, onUnmounted, ref } from 'vue';
const props = defineProps<{ item: { title: string } }>();
const myChart: Ref<HTMLElement | undefined> = ref();
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
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                name: 'Direct',
                type: 'bar',
                barWidth: '40%',
                data: [80, 52, 66, 80, 95, 50, 31]
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