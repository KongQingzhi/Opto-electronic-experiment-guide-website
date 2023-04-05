<template>
  <ElTable>
    <ElTableColumn prop="c_id" label="姓名"></ElTableColumn>
    <ElTableColumn prop="c_name" label="学号"></ElTableColumn>
      <ElTableColumn prop="c_name" label="实验名"></ElTableColumn>
    <ElTableColumn prop="c_name" label="成绩">
      <ElInput></ElInput>
    </ElTableColumn>
    <ElTableColumn prop="c_id" label="操作">
      <template #default="scope">
        <ElPopconfirm title="确定删除班级吗?">
          <template #reference>
            <ElButton type="danger">删除</ElButton>
          </template>
        </ElPopconfirm>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<script lang="ts" setup>
import { ElRow, ElCol, ElForm, ElTable, ElTableColumn, ElFormItem, ElSelect, ElPopconfirm, ElMessage, ElOption, ElButton, ElRadio, ElRadioGroup, ElInput, ElResult } from 'element-plus'

</script>