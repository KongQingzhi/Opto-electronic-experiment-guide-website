<!-- <template>
    <div id="CreateClass">
        <ElTable v-if="classData" v-loading="!classData" :data="classData">
            <ElTableColumn prop="c_id" label="班级号"></ElTableColumn>
            <ElTableColumn prop="c_name" label="班级名"></ElTableColumn>
            <ElTableColumn prop="c_id" label="操作">
                <template #default="scope">
                    <ElPopconfirm title="确定删除班级吗?" @confirm="onDeleteClass(scope.row)">
                        <template #reference>
                            <ElButton type="danger">删除</ElButton>
                        </template>
                    </ElPopconfirm>
                </template>
            </ElTableColumn>
        </ElTable>
        <div class="my-2"></div>
        <ElForm ref="ruleFormRef" :rules="rules" :model="ruleForm" label-width="80px" label-position="left">
            <ElRow>
                <ElCol :span="12">
                    <ElFormItem label="年级" prop="grade">
                        <ElSelect v-model="ruleForm.grade">
                            <ElOption v-for="item in gradeList" :key="item" :label="item" :value="item" />
                        </ElSelect>
                    </ElFormItem>
                </ElCol>
                <ElCol :span="12">
                    <ElFormItem label="班级" prop="c_name">
                        <ElInput v-model="ruleForm.c_name" />
                    </ElFormItem>
                </ElCol>
            </ElRow>
            <div class="py-2" style="text-align: center;">
                <ElButton type="primary" @click="clearForm">取消</ElButton>
                <ElButton type="primary" @click="onCreate(ruleFormRef)">创建</ElButton>
            </div>
        </ElForm>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref, reactive, onBeforeMount } from 'vue'
import { ElRow, ElCol, ElForm, ElTable, ElTableColumn, ElFormItem, ElSelect, ElPopconfirm, ElMessage, ElOption, ElButton, ElRadio, ElRadioGroup, ElInput, ElResult } from 'element-plus'
import { useRouter, useRoute } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus';
import { getAllClass, createClass, deleteClass } from '../../../api/home';
interface ClassItem {
    c_id: number;
    c_name: string;
}
const router = useRouter();
const route = useRoute();
const classData: Ref<ClassItem[]> = ref([{
    c_id: 0,
    c_name: ''
}]);
const ruleForm = ref({
    grade: '',
    c_name: ''
});
const ruleFormRef = ref<FormInstance>();
const clearForm = () => { ruleFormRef.value?.resetFields() };
const gradeList: string[] = [];
const date = new Date();
const yaer = date.getFullYear();
for (let i = 0; i < 5; i++) {
    gradeList.push(yaer - i + '级');
}
const rules = reactive<FormRules>({
    grade: [{ required: true, message: '请输入年级名', trigger: 'blur' }],
    c_name: [{ required: true, message: '请输入班级名', trigger: 'blur' }],
})
const getClassDate = async () => {
    await getAllClass(null).then(res => {
        const { status, msg, data } = res.data;
        if (status) {
            classData.value = data;
        }
    })
}
const onCreate = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            createClass({ c_name: ruleForm.value.grade + ' ' + ruleForm.value.c_name }).then(res => {
                const { status, msg, data } = res.data;
                if (status) {
                    ElMessage({
                        message: msg,
                        type: 'success',
                    })
                    clearForm();
                    getClassDate();
                } else {
                    ElMessage({
                        message: msg,
                        type: 'error',
                    })
                }
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}

const onDeleteClass = async (row: ClassItem) => {
    await deleteClass(row).then(res => {
        const { status, msg, data } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            getClassDate();
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
        }
    })
}

onBeforeMount(() => {
    getClassDate();
})
</script>

<style lang="scss" scoped>
// @import '../../assets/style/common.scss';
</style> -->
<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
                <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title,
                    email and role.</p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button type="button"
                    class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                    user</button>
            </div>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role
                                    </th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="person in people" :key="person.email">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {{ person.name }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.title }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.email }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span
                                                class="sr-only">, {{ person.name }}</span></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]
</script>