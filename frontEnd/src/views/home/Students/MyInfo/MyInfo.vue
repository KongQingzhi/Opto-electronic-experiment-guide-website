<template>
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
</style>