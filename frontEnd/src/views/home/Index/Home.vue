<template>
    <div class="min-h-screen">
        <Head />
        <div class="grid grid-cols-12 gap-4 relative py-10">
            <div class="col-span-2 pr-10">
                <Aside />
            </div>
            <div class="col-span-10">
                <div class="rounded-md px-10 py-5 shadow-lg overflow-hidden">
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