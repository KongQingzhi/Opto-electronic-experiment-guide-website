<template>
    <div class="p-4 sm:px-">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">课程列表</h1>
                <p class="mt-2 text-sm text-gray-700">获取全部课程的信息</p>
            </div>
            <div v-if="Number(user.t_super)" class="flex justify-center flex-wrap">
                <div>
                    <input class="border py-1 px-4 mr-4 rounded-md outline-none" v-model="lessonName" placeholder="请输入课程名"
                        required type="text">
                </div>
                <select class="border py-1 px-6 rounded-md outline-none" placeholder="请选择上课时间" name="" v-model="lessonTime"
                    id="">
                    <option value="" selected>请选择上课时间</option>
                    <option v-for="item in lessonsTimeList" :value="item" :label="item + ' 节'" />
                </select>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button" @click="handleCreateClass"
                        class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">创建课程</button>
                </div>
            </div>
        </div>
        <Loading v-if="!lessonsList" />
        <!-- <div v-else class="mt-8 flow-root">
            <div v-for="items in lessonsList" class="my-5">
                <div class="flex justify-between">
                    <SectionHeader :title="items.c_name" aside-title="" />
                    <div v-if="Number(user.t_super)" class="flex justify-center flex-wrap">
                        <div>
                            <input class="border py-1 px-4 rounded-md outline-none" v-model="className" placeholder="请输入课程名"
                                required type="text">
                        </div>
                        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <button type="button" @click="handleCreateClass"
                                class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">创建课程</button>
                        </div>
                    </div>
                </div>
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">课程编号
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">课程名
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">上课时间（节）
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">任课教师
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">教师电话
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">教师类型
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr v-for="item in items.list" :key="item.c_id">
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ item.l_id }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.l_name }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.l_time }}</td>
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

        </div> -->
        <div class="-mx-4 my-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                课程编号
                            </th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">课程名
                            </th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">上课时间（节）
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr v-for="item in lessonsList" :key="item.c_id">
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ item.l_id }}</td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.l_name }}</td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.l_time }}</td>
                            <td v-if="Number(user.t_super)"
                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <p href="#" class="cursor-pointer text-indigo-600 hover:text-indigo-900"
                                    @click="handleDelete(item.l_id)">删除</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { selectAllLesson } from '../../../../api/public';
import { createLesson, deleteLesson } from '../../../../api/teachers';
import { ElMessage } from 'element-plus';
import Loading from '../../../../components/Loading.vue';
import SectionHeader from '../../../../components/SectionHeader.vue';
import PageHeader from '../../../../components/PageHeader.vue';
const lessonsList = ref();
const user = JSON.parse(sessionStorage.getItem('user') as string);
const refetch = async () => {
    await selectAllLesson().then(res => {
        const { msg, data, status } = res.data;
        if (status) {
            lessonsList.value = data;
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
        }
    })
}
const handleDelete = (l_id: number) => {
    deleteLesson({ l_id }).then(res => {
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
const lessonName = ref('');
const lessonsTimeList = ['1-2', '3-4', '5-6', '7-8'];
const lessonTime = ref('')
const handleCreateClass = () => {
    const l_name = lessonName.value;
    const l_time = lessonTime.value;
    if (!l_name) {
        ElMessage({
            message: '请输入课程名',
            type: 'error',
        })
        return;
    }
    if (!l_time) {
        ElMessage({
            message: '请输入上课时间',
            type: 'error',
        })
        return;
    }
    createLesson({ l_name, l_time }).then(res => {
        const { msg, data, status } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            lessonName.value = '';
            lessonTime.value = '';
            refetch();
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
            lessonName.value = '';
            lessonTime.value = '';
        }
    })
}
onMounted(() => {
    refetch();
})
</script>