<template>
  <PageHeader :button="false" button-text="" title="试卷评分" />
  <Loading v-if="!questionAndStudentsScoreList" />
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
            <tr v-for="item in questionAndStudentsScoreList" :key="item.c_id">
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.l_name }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.e_name }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.s_no }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.s_name }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.q_grade }}</td>
              <td v-if="item.q_finish == 1" class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <RouterLink :to="{ name: 'QuestionsScoreContent', query: item }">
                  <ElButton type="primary">打分</ElButton>
                </RouterLink>
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
import { selectStudentsQuestionGradeByTeacher } from '../../../../api/teachers';
import { questionScoring } from '../../../../api/teachers';
import { ElMessage, ElButton } from 'element-plus';
const qs_id = ref(0);
const q_grade = ref(0);
const user = JSON.parse(sessionStorage.getItem('user') as string);
const questionAndStudentsScoreList = ref();
const refetch = async () => {
  await selectStudentsQuestionGradeByTeacher({ t_no: user.t_no }).then(res => {
    const { msg, data, status } = res.data;
    if (status) {
      questionAndStudentsScoreList.value = data;
    } else {
      ElMessage({
        message: msg,
        type: 'error',
      })
    }
  })
}
onMounted(() => {
  refetch();
})
</script>
