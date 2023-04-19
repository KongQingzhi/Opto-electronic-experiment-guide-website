<template>
    <PageHeader title="绑定课程与教师" />
    <Loading v-if="!lessonAndTeacherList" />
    <div v-else class="p-4 sm:px-">
        <div v-if="Number(user.t_super)" class="flex">
            <select class="border py-1 px-6 rounded-md outline-none" v-model="l_id">
                <option value="" disabled selected>请选择课程</option>
                <option v-for="item in lessonsList" :value="item.l_id" :label="item.l_name" />
            </select>
            <select class="border mx-4  py-1 px-6 rounded-md outline-none" v-model="t_no">
                <option value="" disabled selected>请选择教师</option>
                <option v-for="item in teacherssList" :value="item.t_no" :label="item.t_name" />
            </select>
            <button type="button" @click="handleBind"
                class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">绑
                定</button>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">课程编号</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">课程名</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">课程时间</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">任课教师</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">教师电话</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="item in lessonAndTeacherList" :key="item.el_id">
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.l_id }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.l_name }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.l_time }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.t_name }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.t_tel }}</td>
                                <td v-if="Number(user.t_super)"
                                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <p href="#" class="cursor-pointer text-indigo-600 hover:text-indigo-900"
                                        @click="handleDelete(item.lt_id)">删除</p>
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
import PageHeader from '../../../../components/PageHeader.vue';
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import Loading from '../../../../components/Loading.vue';
import { selectAllLesson, selectAllTeachers, selectLessonAndTeacher } from '../../../../api/public';
import { bindTeacherAndLesson, deleteLessonAndTeacher } from '../../../../api/teachers';
const user = JSON.parse(sessionStorage.getItem('user') as string);
const teacherssList = ref();
const lessonsList = ref();
const lessonAndTeacherList = ref();
const t_no = ref('');
const l_id = ref('');
const refetch = async () => {
    await selectLessonAndTeacher().then(res => {
        const { msg, data, status } = res.data;
        if (status) {
            lessonAndTeacherList.value = data;
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
        }
    })
}
selectAllTeachers().then(res => {
    const { msg, data, status } = res.data;
    if (status) {
        teacherssList.value = data;
    } else {
        ElMessage({
            message: msg,
            type: 'error',
        })
    }
})
selectAllLesson().then(res => {
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

const init = () => {
    t_no.value = '';
    l_id.value = '';
}

const handleBind = async () => {
    await bindTeacherAndLesson({ t_no: t_no.value, l_id: l_id.value }).then(res => {
        const { msg, status } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            refetch();
            init();
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
            refetch();
        }
    })
}

const handleDelete = async (lt_id: number) => {
    await deleteLessonAndTeacher({ lt_id }).then(res => {
        const { msg, status } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            refetch();
            init();
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
            refetch();
        }
    })
}
onMounted(() => {
    refetch();
})
</script>