<template>
  <PageHeader title="实验评分" />
  <Loading v-if="!experimentAndStudentsScoreList" />
  <div v-else class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">课程名</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">实验名</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">学号</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">姓名</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">分数</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="item in experimentAndStudentsScoreList" :key="item.c_id">
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.l_name }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.e_name }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.s_no }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.s_name }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.e_grade }}</td>
              <td class="flex  whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <div v-if="es_id === item.es_id" class="max-w-2xl mr-2">
                  <ElInput v-model="e_grade"></ElInput>
                </div>
                <ElButton type="primary" @click="handleScore(item.es_id)">{{ es_id === item.es_id ? '确定' : '打分' }}
                </ElButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from '../../../../components/PageHeader.vue';
import { ref, onMounted } from 'vue';
import { selectStudentsExperimentGradeByTeacher } from '../../../../api/teachers';
import { experimentScoring } from '../../../../api/teachers';
import { ElMessage, ElInput, ElButton } from 'element-plus';
const es_id = ref(0);
const e_grade = ref(0);
const user = JSON.parse(sessionStorage.getItem('user') as string);
const experimentAndStudentsScoreList = ref();
const refetch = async () => {
  await selectStudentsExperimentGradeByTeacher({ t_no: user.t_no }).then(res => {
    const { msg, data, status } = res.data;
    if (status) {
      experimentAndStudentsScoreList.value = data;
    } else {
      ElMessage({
        message: msg,
        type: 'error',
      })
    }
  })
}
const handleScore = async (id: number) => {
  if (es_id.value !== id) {
    es_id.value = id;

  } else {
    experimentScoring({ es_id: es_id.value, e_grade: e_grade.value }).then(res => {
      const { msg, data, status } = res.data;
      if (status) {
        ElMessage({
          message: msg,
          type: 'success',
        })
        es_id.value = 0;
        e_grade.value = 0;
        refetch();
      } else {
        ElMessage({
          message: msg,
          type: 'error',
        })
      }
    })
  }
}
onMounted(() => {
  refetch();
})
</script>
