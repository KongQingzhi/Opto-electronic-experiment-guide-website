<template>
    <main class="relative isolate min-h-screen">
        <img :src="imgSrc" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-top" />
        <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <h1 class="text-2xl font-semibold leading-8 text-white">404</h1>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
            <p class="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
            <div class="mt-10 flex justify-center">
                <a href="" class="text-sm font-semibold leading-7 text-white">
                    <span aria-hidden="true">&larr;</span> 
                    Back to home</a>
            </div>
        </div>
    </main>
</template>
<script lang="ts" setup>
import axios from 'axios';
import { ref, Ref } from 'vue';
const imgSrc = ref('');
axios.get('/bing?n=1&format=js&idx=0').then(res => {
    imgSrc.value = 'https://www.bing.com' + res.data.images[0].url;
})
</script>