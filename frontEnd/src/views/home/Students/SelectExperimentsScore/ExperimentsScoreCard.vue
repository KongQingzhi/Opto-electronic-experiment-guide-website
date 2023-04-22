<template>
  <div class="experiments-score-card box-shadow border-radius-sm my-1 mx-1">
    <div class="text-center h-10 title-5">{{ item.e_name }}</div>
    <div id="myEcharts" ref="myChart"></div>
    <div class="text-center">
      <div class="text-center title-5">{{ e_grade + q_grade }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { ElButton } from 'element-plus';
import { Ref, onMounted, onUnmounted, ref } from 'vue';
const props = defineProps<{ item: { e_name: string, q_grade: number, e_grade: number, eq_grade: number } }>();
const myChart: Ref<HTMLElement | undefined> = ref();
const q_grade = ref(props.item.q_grade || 0);
const e_grade = ref(props.item.e_grade || 0);
onMounted(() => {
  let chart = echarts.init(myChart.value as HTMLElement);
  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: q_grade.value, name: '试题' },
          { value: e_grade.value, name: '操作' },
          { value: 200 - q_grade.value - e_grade.value, name: '未得' },
        ],
        radius: ['40%', '70%']
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
.experiments-score-card {
  width: 13rem;
  padding: 1rem;
}

#myEcharts {
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
}
</style>