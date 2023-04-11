<template>
    <div id="Home">

        <Head />
        <div class="grid grid-cols-10 gap-4 py-10">
            <div class="col-span-2">
                <Aside />
            </div>
            <div class="col-span-8">
                <div class="rounded-md overflow-hidden">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Aside from './Aside.vue';
import Head from './Head.vue';
</script>