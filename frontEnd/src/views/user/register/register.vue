<template>
    <div id="Register" class="w-full">
        <div class="text-center mb-4 px-2 text-2xl font-bold">注 册</div>
        <ElForm ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top">
            <ElFormItem label="Account" prop="UserNo">
                <ElInput v-model="ruleForm.UserNo" placeholder="学号" />
            </ElFormItem>
            <ElFormItem label="Name" prop="s_name">
                <ElInput v-model="ruleForm.s_name" placeholder="姓名" />
            </ElFormItem>
            <ElFormItem label="性别" prop="s_gender">
                <ElRadioGroup v-model="ruleForm.s_gender">
                    <ElRadio label="男">男</ElRadio>
                    <ElRadio label="女">女</ElRadio>
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="Email" prop="s_email">
                <ElInput type="email" v-model="ruleForm.s_email" placeholder="邮箱" />
            </ElFormItem>
            <ElFormItem label="Password" prop="UserPassword">
                <ElInput type="password" v-model="ruleForm.UserPassword" placeholder="密码" />
            </ElFormItem>
        </ElForm>
        <div class="mt-2 text-center">
            <ElButton type="primary" @click="onRegister(ruleFormRef)" >注 册</ElButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonVue from '../../../components/button.vue';
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import { register } from '../../../api/user';
import { ElMessage, ElRadioGroup, ElRadio, ElInput, ElFormItem, ElForm, ElButton } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
const router = useRouter();
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    UserNo: '',
    UserPassword: '',
    s_name: '',
    s_gender: '男',
    s_email: '',
    Role: false
})
const rules = reactive<FormRules>({
    UserNo: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    UserPassword: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    s_name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    s_gender: [{ required: true, message: '请输入性别', trigger: 'change' }],
    s_email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
})
// 邮箱验证

const onRegister = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            register(ruleForm).then(res => {
                const { status, msg } = res.data;
                if (status) {
                    ElMessage({
                        message: msg,
                        type: 'success',
                    })
                    router.push({
                        name: 'login',
                    })
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
</script>
