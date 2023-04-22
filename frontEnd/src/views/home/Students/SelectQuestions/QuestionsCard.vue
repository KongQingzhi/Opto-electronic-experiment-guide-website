<template>
    <div class="mx-auto mt-8 w-full" @click="handleClick">
        <article
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img src="../../../../assets/image/png/1.png" alt=""
                class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <div
                class="flex flex-wrap items-center justify-between gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div class="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div class="flex gap-x-2.5">
                        <img src="../../../../assets/image/png/1.png" alt=""
                            class="h-6 w-6 flex-none rounded-full bg-white/10" />
                        {{ questionsItem.t_name }}
                    </div>
                </div>
                <p class="text-5xl font-bold">{{ questionsItem.q_grade }}</p>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <p>
                    <span class="absolute inset-0" />
                    {{ questionsItem.e_name }}
                </p>
            </h3>
        </article>
    </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { ref, toRefs } from 'vue';
const props = defineProps<{
    questionsItem: any
}>();
const num = (Math.random() * 6).toFixed(0);
const { questionsItem: item } = toRefs(props)
const router = useRouter();
const route = useRoute();
const handleClick = () => {
    router.push({
        name: 'questionsContent',
        query: {
            ...route.query,
            q_id: props.questionsItem.q_id,
            q_finish: props.questionsItem.q_finish || 0,
        }
    })
}
const imgSrc = ref('');
axios.get('/bing?n=8&format=js&idx=0').then(res => {
    imgSrc.value = 'https://www.bing.com' + res.data.images[(Math.random() * 7).toFixed(0)].url;
})
</script>