<template>
    <div class="mt-4 space-y-5 lg:mt-5 lg:space-y-10">
        <article class="w-full relative isolate flex flex-col gap-8 lg:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img :src="imgSrc" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
                <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="min-w-2/3">

                <div class="group relative">
                    <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <p>
                            <span class="absolute inset-0" />
                            {{ props.experimentsItem.e_name }}
                        </p>
                        <div class="flex items-center my-2 item-center gap-x-4 text-xs">
                            <p class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                                {{ props.experimentsItem.l_name }}
                            </p>
                            <time :datetime="props.experimentsItem.e_time" class="text-gray-500">
                                {{ props.experimentsItem.e_time }}
                            </time>
                        </div>
                    </h3>
                    <p class="mt-5 text-sm leading-6 text-gray-600" v-html="props.experimentsItem.e_content"></p>
                </div>
                <div class="mt-6 flex justify-between border-t border-gray-900/5 pt-6">
                    <div class="relative flex props.experimentsItems-center gap-x-4">
                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-900">
                                <a>
                                    <span class="absolute inset-0" />
                                    {{ props.experimentsItem.t_name }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ props.experimentsItem.e_time }}</p>
                        </div>
                    </div>
                    <div class="">
                        <ElButton type="primary" @click="handleClick()">进入实验</ElButton>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
const props = defineProps<{
    experimentsItem: any
}>();
const router = useRouter();
const handleClick = () => {
    router.push({
        name: 'experimentsContent',
        query: {
            e_id: props.experimentsItem.e_id
        }
    })
}
const imgSrc = ref('');
axios.get('/bing?n=8&format=js&idx=0').then(res => {
    imgSrc.value = 'https://www.bing.com' + res.data.images[(Math.random() * 7).toFixed(0)].url;
})
</script>