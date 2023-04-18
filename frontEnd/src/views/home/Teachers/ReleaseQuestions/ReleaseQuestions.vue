<template>
    <div class="p-2 ">
        <PageHeader :button="false" button-text="" title="发布试题" />
        <Loading v-if="!experimentsList" />
        <div v-else class="grid mt-10 px-20 grid-cols-1 mx-auto gap-x-8 gap-y-8 md:grid-cols-3">
            <div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-3">
                <div class="px-4 py-6 sm:p-8">
                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                        <div class="sm:col-span-2">
                            <label for="website" class="block text-sm font-medium leading-6 text-gray-900">实验名称</label>
                            <div class="mt-2">
                                <select class="border py-1 px-6 rounded-md outline-none" v-model="experimentName">
                                    <option value="" disabled selected>请选择实验</option>
                                    <option v-for="item in experimentsList" :value="item.e_id"
                                        :label="item.e_name" />
                                </select>
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">试题内容</label>
                            <div class="mt-2">
                                <textarea id="about" name="about" rows="3" v-model="questionsContent"
                                    class="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            <p class="mt-3 text-sm leading-6 text-gray-600">描述一下吧</p>
                        </div>
                        <div class="col-span-full">
                            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">上传文件</label>
                            <div
                                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div class="text-center">
                                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="file-upload"
                                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>点击上传</span>
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                        </label>
                                        <p class="pl-1">或者拖动文件到此处</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 2MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">取消</button>
                    <button type="submit" @click="handleRelease"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">发
                        布</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PageHeader from '../../../../components/PageHeader.vue';
import { selectAllExperiments } from '../../../../api/public';
import { releaseQuestion } from '../../../../api/teachers';
import { ElMessage } from 'element-plus';
import Loading from '../../../../components/Loading.vue';
import { ref, onMounted } from 'vue';
const experimentsList = ref();
const experimentName = ref('');
const questionsContent = ref('');
const refetch = () => {
    selectAllExperiments().then(res => {
        experimentsList.value = res.data.data;
    })
}
const handleRelease = () => {
    const e_id = experimentName.value;
    const q_content = questionsContent.value;
    const user = JSON.parse(sessionStorage.getItem('user') as string);
    if (!(e_id && q_content)) {
        ElMessage({
            message: '请检查试题内容、实验名称是否填写完成',
            type: 'error',
        })
        return;
    }
    releaseQuestion({ q_content, e_id, t_no: user.t_no }).then(res => {
        const { msg, data, status } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            experimentName.value = '';
            questionsContent.value = '';
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
            experimentName.value = '';
            experimentName.value = '';
            questionsContent.value = '';
        }
    })
}
onMounted(() => {
    refetch();
})
</script>