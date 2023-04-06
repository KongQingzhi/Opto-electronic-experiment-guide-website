<template>
  <div class="experiments-score-card box-shadow border-radius-sm my-1 mx-1">
    <div class="text-center title-5">{{ item.title }}</div>
    <div id="myEcharts" ref="myChart"></div>
    <div class="text-center">
      <ElButton v-if="1" type="primary">提交</ElButton>
      <div class="text-center title-5">{{ item.eq_grade }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { ElButton } from 'element-plus';
import { Ref, onMounted, onUnmounted, ref } from 'vue';
const props = defineProps<{ item: { title: string, q_grade: number, e_grade: number, eq_grade: number } }>();
const myChart: Ref<HTMLElement | undefined> = ref();
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
          { value: props.item.q_grade, name: '试题' },
          { value: props.item.e_grade, name: '操作' },
          { value: 200 - props.item.eq_grade, name: '未得' },
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