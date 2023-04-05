<template>
    <div>
        <h3 class="text-center my-1">1111111111111111111111111111</h3>
        <div class="my-1">
            <span class="mx-2">任课教师：ggfhhfxgndfgndfndfg</span>
            <span class="mx-2">上课教师：zhgsfsfgnfsghnsfgfs</span>
        </div>
        <hr>
        <div class="content my-1">afdhsghsfghnfsgjndfndsgthsthndf</div>
        <ElInput v-model="replay" type="textarea" autosize></ElInput>
        <div class="text-center my-2">
            <ElButton v-if="1" type="primary">提交</ElButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ElInput } from 'element-plus';
import { ref } from 'vue';
const replay = ref('');
</script>