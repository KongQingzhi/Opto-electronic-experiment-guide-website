<template>
    <div class="p-4 sm:px- lg:px-28">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">实验列表</h1>
                <p class="mt-2 text-sm text-gray-700">获取全部实验的信息</p>
            </div>
        </div>
        <Loading v-if="!classesList" />
        <div v-else class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">实验编号</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">实验名</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">实验时间</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">任课教师</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">教师电话</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">上课教室</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="item in classesList" :key="item.c_id">
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.e_id }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.e_name }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.e_time }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.t_name }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.t_tel }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.r_build + item.r_no }}
                                </td>
                                <td v-if="Number(user.t_super)"
                                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <p href="#" class="cursor-pointer text-indigo-600 hover:text-indigo-900"
                                        @click="handleDelete(item.e_id)">删除</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { selectAllExperiments } from '../../../../api/public';
import { deleteExperiment } from '../../../../api/teachers';
import { ElMessage } from 'element-plus';
import Loading from '../../../../components/Loading.vue';
const classesList = ref();
const user = JSON.parse(sessionStorage.getItem('user') as string);
const refetch = async () => {
    await selectAllExperiments().then(res => {
        const { msg, data, status } = res.data;
        if (status) {
            classesList.value = data;
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
        }
    })
}

const handleDelete = (e_id: number) => {
    deleteExperiment({ e_id }).then(res => {
        const { msg, data, status } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            refetch();
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