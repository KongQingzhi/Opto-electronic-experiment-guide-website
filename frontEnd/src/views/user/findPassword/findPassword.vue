<template>
    <div id="FindPassword" class="w-full">
        <div class="text-center mb-4 px-2 text-2xl font-bold">找回密码</div>
        <ElForm ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top">
            <ElFormItem label="Account" prop="UserNo">
                <ElInput v-model="ruleForm.UserNo" placeholder="账号" />
            </ElFormItem>
            <ElFormItem label="Password" prop="UserPassword">
                <ElInput type="password" v-model="ruleForm.UserPassword" placeholder="密码" />
            </ElFormItem>
            <ElFormItem label="Email" prop="s_email">
                <ElInput type="email" v-model="ruleForm.s_email" placeholder="邮箱" />
            </ElFormItem>
            <ElFormItem label="VerifyCode" prop="verifyCode">
                <div class="grid grid-cols-7 w-full">
                    <ElInput class="col-span-4" v-model="ruleForm.verifyCode" maxlength="6" placeholder="验证码" />
                    <div class="col-span-1"></div>
                    <ElButton class="col-span-2" :disabled="btnDisabled" type="primary" @click="onVerify">
                        {{ btnContent }}
                    </ElButton>
                </div>
            </ElFormItem>
        </ElForm>
        <div class="mt-2 text-center">
            <ElButton type="primary" @click="onRetrievePassword(ruleFormRef)">找回密码</ElButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, reactive, computed, Ref } from 'vue';
import { ElMessage, ElRadioGroup, ElButton, ElRadio, ElInput, ElFormItem, ElForm, ElCheckbox } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { verify, retrievePassword } from '../../../api/user';
const router = useRouter();
const second: Ref<number> = ref(60);
const verifyCode = ref('');
const btnDisabled = ref(false);
let time: null | number = null;
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    UserNo: '',
    UserPassword: '',
    s_email: '',
    verifyCode: '',
    Role: false
})
const rules = reactive<FormRules>({
    UserNo: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    UserPassword: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    s_email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    verifyCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
})
const btnContent = computed(() => {
    if (second.value == 60 || second.value == 0) {
        btnDisabled.value = false;
        return '获取';
    } else {
        return second.value + 's';
    }
})
const onVerify = async () => {
    if (ruleForm.s_email && ruleForm.s_email) {
        btnDisabled.value = true;
        time = setInterval(() => {
            if (second.value == 0) {
                clearInterval(time as number);
                second.value = 60;
            } else {
                second.value = second.value - 1;
            }
        }, 1000);
        await verify({ s_email: ruleForm.s_email }).then(res => {
            verifyCode.value = res.data;
        })
    } else {
        ElMessage({
            message: '请输入邮箱',
            type: 'error',
        })
    }
}
const onRetrievePassword = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (verifyCode.value == ruleForm.verifyCode) {
                retrievePassword(ruleForm).then(res => {
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
                ElMessage({
                    message: '输入的验证码有误，请重新输入',
                    type: 'error',
                })
            }

        } else {
            console.log('error submit!', fields)
        }
    })
}




</script>
