<template>
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
</style>