<template>
    <ElForm :model="ruleForm" :rules="rules" label-position="left" label-width="100">
        <ElFormItem label="实验名：">
            <ElInput v-model="ruleForm.e_name"></ElInput>
        </ElFormItem>
        <ElFormItem label="实验内容：">
            <ElInput v-model="ruleForm.e_content" type="textarea"></ElInput>
        </ElFormItem>
        <ElFormItem label="实验文件：">
            <ElUpload class="upload" v-model:file-list="fileList" drag style="width: 100%;">
                <ElIcon class="el-icon--upload">
                    <UploadFilled />
                </ElIcon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </ElUpload>
        </ElFormItem>
        <div class="flex flex-wrap justify-between">
            <ElFormItem label="实验时间：">
                <ElDatePicker v-model="ruleForm.e_time" type="datetime" placeholder="请选择时间" />
            </ElFormItem>
            <ElFormItem label="实验教室：">
                <ElSelect v-model="ruleForm.r_id" placeholder="请选择班级">
                    <ElOption value="1" />
                    <ElOption value="2" />
                    <ElOption value="3" />
                </ElSelect>
            </ElFormItem>
        </div>
    </ElForm>
    <div class="my-2" style="text-align: center;">
        <ElButton type="primary">发布</ElButton>
    </div>
</template>

<script lang="ts" setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { ElForm, ElFormItem, ElInput, ElDatePicker, ElSelect, ElUpload, ElOption, ElButton, ElIcon } from 'element-plus';
import type { FormRules, FormInstance, UploadProps, UploadUserFile } from 'element-plus';
import { reactive, ref } from 'vue';
const ruleForm = reactive({
    e_name: '',
    e_content: '',
    e_files: '',
    e_time: '',
    r_id: '',
    t_no: '',
})
const rules = reactive<FormRules>({
    e_name: [{ required: true, message: '请输入实验', trigger: 'blur' }],
    e_content: [{ required: true, message: '请输入实验', trigger: 'blur' }],
    r_id: [{ required: true, message: '请输入实验', trigger: 'blur' }],
    t_no: [{ required: true, message: '请输入实验', trigger: 'blur' }],
})
const ruleFormRef = ref<FormInstance>();
const fileList = ref<UploadUserFile[]>([
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
]);
</script>
<style lang="scss"></style>