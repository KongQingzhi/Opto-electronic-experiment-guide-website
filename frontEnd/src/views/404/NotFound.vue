<template>
    <div class="h-screen w-full">
        <main class="h-full w-full relative isolate rounded-lg overflow-hidden">
            <img :src="imgSrc" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-top" />
            <div class="h-full w-full  flex flex-wrap justify-center items-center ">
                <div class="mx-auto px-6 py-32 text-center sm:py-40 lg:px-8">
                    <h1 class="w-full text-2xl font-semibold leading-8 text-white">404</h1>
                    <h1 class="w-full mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                    <p class="w-full mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking
                        for.</p>
                    <div class="w-full mt-10 flex justify-center">
                        <a @click="$router.push({ name: 'show' })" class="text-sm font-semibold leading-7 text-white">
                            <span aria-hidden="true">&larr;</span>
                            Back to home</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script lang="ts" setup>
import axios from 'axios';
import { ref, Ref } from 'vue';
const imgSrc = ref('');
axios.get('/bing?n=8&format=js&idx=0').then(res => {
    imgSrc.value = 'https://www.bing.com' + res.data.images[(Math.random() * 7).toFixed(0)].url;
})
</script>