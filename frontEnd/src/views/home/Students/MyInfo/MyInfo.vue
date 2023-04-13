<template>
    <div>
        <div>
            <img class="h-32 w-full object-cover lg:h-48"
                src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="" />
        </div>
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div class="flex">
                    <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt="" />
                </div>
                <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
                        <h1 class="truncate text-2xl font-bold text-gray-900">我的信息</h1>
                    </div>
                </div>
            </div>
            <div class="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                <h1 class="truncate text-2xl font-bold text-gray-900">我的信息</h1>
            </div>
        </div>
    </div>
    <div class="bg-white m-2 sm:rounded-xl md:col-span-2">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="grid my-10 max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">姓名</label>
                    <div class="mt-2">
                        <input v-model="ruleForm.s_name" type="text" name="first-name" id="first-name"
                            autocomplete="given-name"
                            class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">账号</label>
                    <div class="mt-2">
                        <input type="text" v-model="ruleForm.s_no" name="last-name" id="last-name"
                            autocomplete="family-name" disabled
                            class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">邮箱</label>
                    <div class="mt-2">
                        <input id="email" disabled v-model="ruleForm.s_email" name="email" type="email" autocomplete="email"
                            class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <label for="tel" class="block text-sm font-medium leading-6 text-gray-900">电话</label>
                    <div class="mt-2">
                        <input id="tel" v-model="ruleForm.s_tel" name="tel" type="tel" autocomplete="email"
                            class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">班级</label>
                    <div class="mt-2">
                        <select id="country" v-model="ruleForm.c_id" name="country" autocomplete="country-name"
                            :disabled="isBindClass"
                            class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option v-for="item in classList" :key="item.c_id" :label="item.c_name" :value="item.c_id" />
                        </select>
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">性别</label>
                    <div class="flex mt-2">
                        <input v-model="ruleForm.s_gender" type="radio" name="street-address" id="street-address"
                            autocomplete="street-address" value="1"
                            class="block rounded-md border-0  mx-2 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" />男
                        <input v-model="ruleForm.s_gender" type="radio" name="street-address" id="street-address"
                            autocomplete="street-address" value="0"
                            class="block rounded-md border-0 mx-2 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" />女
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" @click="onUpdate"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref, reactive, onMounted } from 'vue';
import { ElForm, ElFormItem, ElSelect, ElMessage, ElOption, ElButton, ElRadio, ElRadioGroup, ElInput } from 'element-plus'
import { useRouter, useRoute } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus';
import { updateUserInfo, selectAllClass } from '../../../../api/students';
const router = useRouter();
const route = useRoute();
const ruleForm = ref(JSON.parse(sessionStorage.getItem('user') as string));
// 缺少绑定班级
// 先查询是否绑定，是，禁用，否，查询班级
interface ClassItem { c_id: number, c_name: string, t_n: string };
const classList: Ref<ClassItem[] | null> = ref(null);
const isBindClass = ref(JSON.parse(sessionStorage.getItem('user') as string).c_id);
selectAllClass().then(res => {
    classList.value = res.data.data;
})
const onUpdate = async () => {
    updateUserInfo(ruleForm.value).then(res => {
        const { status, msg } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            isBindClass.value = ruleForm.value.c_id;
            sessionStorage.setItem('user', JSON.stringify(ruleForm.value));
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
        }
    })
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