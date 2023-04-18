<template>
    <div class="p-2 ">
        <PageHeader :button="false" button-text="" title="发布实验" />
        <Loading v-if="!roomsList" />
        <div v-else class="grid mt-10 px-20 grid-cols-1 mx-auto gap-x-8 gap-y-8 md:grid-cols-3">
            <div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-3">
                <div class="px-4 py-6 sm:p-8">
                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                        <div class="sm:col-span-3">
                            <label for="website" class="block text-sm font-medium leading-6 text-gray-900">实验名称</label>
                            <div class="mt-2">
                                <div
                                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm">
                                    <input type="text" name="website" id="website" v-model="experimentName"
                                        class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="请填写实验名称" />
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="website" class="block text-sm font-medium leading-6 text-gray-900">实验教室</label>
                            <div class="mt-2">
                                <select class="border py-1 px-6 rounded-md outline-none" v-model="roomsName">
                                    <option value="" disabled selected>请选择上课教室</option>
                                    <option v-for="item in roomsList" :value="item.r_id"
                                        :label="item.r_build + ' ' + item.r_no" />
                                </select>
                            </div>
                        </div>
                        <div class="sm:col-span-1">
                            <label for="website" class="block text-sm font-medium leading-6 text-gray-900">实验时间</label>
                            <div class="mt-2">
                                <select class="border py-1 px-6 rounded-md outline-none" v-model="experimentTime">
                                    <option value="" disabled selected>请选择实验时间</option>
                                    <option v-for="item in experimentTimeList" :value="item" :label="item" />
                                </select>
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">实验简介</label>
                            <div class="mt-2">
                                <textarea id="about" name="about" rows="3" v-model="experimentContent"
                                    class="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            <p class="mt-3 text-sm leading-6 text-gray-600">描述一下本次实验吧</p>
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
import SectionHeader from '../../../../components/SectionHeader.vue';
import PageHeader from '../../../../components/PageHeader.vue';
import { selectAllRooms } from '../../../../api/public';
import { releaseExperiment } from '../../../../api/teachers';
import { ElMessage } from 'element-plus';
import Loading from '../../../../components/Loading.vue';
import { ref, onMounted } from 'vue';
const roomsList = ref();
const roomsName = ref('');
const experimentName = ref('');
const experimentTime = ref('');
const experimentContent = ref('');
const experimentTimeList = ['8:30-10:30', '10:50-12:10', '14:00-15:30', '15:40-17:30', '19:00-20:30']
const refetch = () => {
    selectAllRooms().then(res => {
        roomsList.value = res.data.data;
    })
}
const handleRelease = () => {
    const e_name = experimentName.value;
    const e_content = experimentContent.value;
    const r_id = roomsName.value;
    const e_time = experimentTime.value;
    const user = JSON.parse(sessionStorage.getItem('user') as string);
    console.log(e_name, e_content, r_id, e_time);

    if (!(e_name && e_content && r_id && e_time)) {
        ElMessage({
            message: '请检查实验名、教室、实验简介是否填写完成',
            type: 'error',
        })
        return;
    }
    releaseExperiment({ e_name, e_content, r_id, e_time, t_no: user.t_no }).then(res => {
        const { msg, data, status } = res.data;
        if (status) {
            ElMessage({
                message: msg,
                type: 'success',
            })
            experimentName.value = '';
            experimentContent.value = '';
            roomsName.value = '';
            experimentTime.value = '';
            refetch();
        } else {
            ElMessage({
                message: msg,
                type: 'error',
            })
            experimentName.value = '';
            experimentContent.value = '';
            roomsName.value = '';
            experimentTime.value = '';
        }
    })
}
onMounted(() => {
    refetch();
})
</script>