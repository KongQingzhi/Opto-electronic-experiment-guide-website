<template>
    <div id="Login">
        <div class="title-box px-2 title-2 font-weight">登 录</div>
        <ElForm ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top" size="large">
            <ElFormItem label="Account" prop="UserNo">
                <ElInput v-model="ruleForm.UserNo" placeholder="账号" />
            </ElFormItem>
            <ElFormItem label="Password" prop="UserPassword">
                <ElInput type="password" v-model="ruleForm.UserPassword" placeholder="密码" />
            </ElFormItem>
            <div class="options">
                <ElCheckbox v-model="ruleForm.Role" label="我是教师" name="type" />
                <ElLink @click="toFindPassword">忘记密码？</ElLink>
            </div>
        </ElForm>
        <div class="bottom-btn">
            <ButtonVue @btn-fn="onLogin(ruleFormRef)" btn-content="登 录" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonVue from '../../../components/button.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import { login } from '../../../api/user';
import { ElMessage, ElButton, ElLink, ElInput, ElFormItem, ElForm, ElCheckbox } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
const router = useRouter();
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    UserNo: '',
    UserPassword: '',
    Role: false
})
const rules = reactive<FormRules>({
    UserNo: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    UserPassword: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
const onLogin = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            login(ruleForm).then(res => {
                const { status, msg, data } = res.data;
                if (status) {
                    ElMessage({
                        message: msg,
                        type: 'success',
                    })
                    router.push({
                        name: 'home',
                        query: data[0]
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
function toFindPassword() {
    router.push({
        path: '/findPassword'
    })
}



</script>

<style lang="scss" scoped>
#Login {
    width: 100%;

    .title-box {
        text-align: center;
        margin-bottom: 2rem;
    }

    .options {
        display: flex;
        justify-content: space-between;
    }

    .bottom-btn {
        margin-top: 2rem;
        text-align: center;
    }
}
</style>