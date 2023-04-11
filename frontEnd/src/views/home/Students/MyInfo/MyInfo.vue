<template>
    <PageHeader title="My Info" />
    <div>
        <div>
            <img class="h-32 w-full object-cover lg:h-48" :src="profile.backgroundImage" alt="" />
        </div>
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div class="flex">
                    <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="profile.avatar" alt="" />
                </div>
                <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
                        <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
                    </div>
                    <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button type="button"
                            class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <EnvelopeIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span>Message</span>
                        </button>
                        <button type="button"
                            class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <PhoneIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span>Call</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
import PageHeader from '../../../../components/PageHeader.vue';
const profile = {
    name: 'Ricardo Cooper',
    email: 'ricardo.cooper@example.com',
    avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    backgroundImage:
        'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fields: [
        ['Phone', '(555) 123-4567'],
        ['Email', 'ricardocooper@example.com'],
        ['Title', 'Senior Front-End Developer'],
        ['Team', 'Product Development'],
        ['Location', 'San Francisco'],
        ['Sits', 'Oasis, 4th floor'],
        ['Salary', '$145,000'],
        ['Birthday', 'June 8, 1990'],
    ],
}
</script>
<!-- <template>
    <div id="MyInfo">
        <ElForm ref="ruleFormRef" :rules="rules" :model="ruleForm" label-width="80px" label-position="left">
            <ElFormItem label="姓名" prop="s_name">
                <ElInput v-model="ruleForm.s_name" />
            </ElFormItem>
            <ElFormItem label="账号" prop="s_no">
                <ElInput disabled v-model="ruleForm.s_no" />
            </ElFormItem>
            <ElFormItem label="邮箱" prop="s_email">
                <ElInput v-model="ruleForm.s_email" />
            </ElFormItem>
            <ElFormItem label="班级" prop="c_email">
                <ElInput disabled v-model="ruleForm.c_email" />
            </ElFormItem>
            <ElFormItem label="性别" prop="s_gender">
                <ElRadioGroup v-model="ruleForm.s_gender">
                    <ElRadio label="男" />
                    <ElRadio label="女" />
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem class="py-2">
                <ElButton>取消</ElButton>
                <ElButton type="primary" @click="onUpdate(ruleFormRef)">保存</ElButton>
            </ElFormItem>
        </ElForm>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { ElForm, ElFormItem, ElSelect, ElMessage, ElOption, ElButton, ElRadio, ElRadioGroup, ElInput } from 'element-plus'
import { useRouter, useRoute } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus';
import { updateUserInfo } from '../../../../api/home';
const router = useRouter();
const route = useRoute();
const ruleForm = ref(JSON.parse(sessionStorage.getItem('user') as string))
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
    s_name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    s_email: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    s_gender: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
// 缺少绑定班级
// 先查询是否绑定，是，禁用，否，查询班级
const onUpdate = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            updateUserInfo(ruleForm.value).then(res => {
                const { status, msg, data } = res.data;
                if (status) {
                    ElMessage({
                        message: msg,
                        type: 'success',
                    })
                    ruleForm.value = data[0];
                    sessionStorage.setItem('user', JSON.stringify(data[0]));
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
onMounted(() => {
    console.log(JSON.parse(sessionStorage.getItem('user') as string));
})
</script>

<style lang="scss" scoped>
// @import '../../assets/style/common.scss';
// #MyInfo {}
</style> -->