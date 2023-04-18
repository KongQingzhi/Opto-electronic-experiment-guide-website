<template>
    <div class="p-4 sm:px- lg:px-28">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">班级列表</h1>
                <p class="mt-2 text-sm text-gray-700">获取全部班级的信息</p>
            </div>
            <div v-if="Number(user.t_super)" class="flex justify-center flex-wrap">
                <div>
                    <input class="border py-1 px-4 rounded-md outline-none" v-model="className" placeholder="请输入班级名"
                        required type="text">
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button" @click="handleCreateClass"
                        class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">创建班级</button>
                </div>
            </div>
        </div>
        <Loading v-if="!classesList" />
        <div v-else class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">班级编号</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">班级名</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">教师工号</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">教师姓名</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">教师电话</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">教师类型</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="item in classesList" :key="item.c_id">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{
                                    item.c_id }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.c_name }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.t_no }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.t_name }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.t_tel }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.t_pro }}</td>
                                <td v-if="Number(user.t_super)"
                                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <p href="#" class="cursor-pointer text-indigo-600 hover:text-indigo-900"
                                        @click="handleDelete(item.c_id)">删除</p>
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
import { selectAllClass } from '../../../../api/public';
import { createClass, deleteClass } from '../../../../api/teachers';
import { ElMessage } from 'element-plus';
import Loading from '../../../../components/Loading.vue';
const classesList = ref();
const user = JSON.parse(sessionStorage.getItem('user') as string);
const refetch = async () => {
    await selectAllClass().then(res => {
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

const handleDelete = (c_id: number) => {
    deleteClass({ c_id }).then(res => {
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
const className = ref('');
const handleCreateClass = () => {
    const c_name = className.value;
    if (!c_name) {
        ElMessage({
            message: '请输入班级名',
            type: 'error',
        })
        return;
    }
    createClass({ c_name, t_no: user.t_no }).then(res => {
        const { msg, data, status } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            className.value = '';
            refetch();
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
            className.value = '';
        }
    })
}
onMounted(() => {
    refetch();
})
</script>