<template>
    <div id="MyInfo">
        <el-form :model="form" label-width="120px" label-position="left">
            <el-form-item label="姓名">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="账号">
                <el-input disabled v-model="form.name" />
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="班级">
                <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.type">
                    <el-radio label="男" />
                    <el-radio label="女" />
                </el-radio-group>
            </el-form-item>
            <el-form-item class="py-2">
                <el-button>取消</el-button>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElForm, ElFormItem,ElSelect,ElOption, ElButton, ElRadio, ElRadioGroup, ElInput } from 'element-plus'
// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<style lang="scss" scoped>
// @import '../../assets/style/common.scss';
#MyInfo {}
</style>