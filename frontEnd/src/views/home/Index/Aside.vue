<template>
    <nav class="hidden shadow lg:block bg-indigo-600 gap-y-5 py-10 rounded-md px-6">
        <ul role="list" class="-mx-2 space-y-1">
            <li v-for="(item, index) in routeList" class="cursor-pointer" :key="item.name">
                <a v-if="item.meta.role === Role"
                    @click="router.push({ name: item.name, query: { ...route.query, type: index } })"
                    :class="[Number(route.query.type) == index ? 'bg-gray-100 text-indigo-600' : ' text-white hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3  justify-center rounded-md p-2 text-sm font-semibold']">
                    <component :is="item.meta.icon"
                        :class="[Number(route.query.type) == index ? 'text-indigo-600' : ' text-white group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                        aria-hidden="true" />
                    <span class="hidden xl:block">{{ item.meta.title }}</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="block shadow lg:hidden bg-white py-10 rounded-md px-3 max-w-min">
        <ul role="list" class="space-y-1">
            <li v-for="(item, index) in routeList" class="cursor-pointer" :key="item.name">
                <a v-if="item.meta.role === Role"
                    @click="router.push({ name: item.name, query: { ...route.query, type: index } })"
                    :class="[Number(route.query.type) == index ? 'bg-gray-100 text-indigo-600' : ' text-white hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm justify-center font-semibold']">
                    <component :is="item.meta.icon"
                        :class="[Number(route.query.type) == index ? 'text-indigo-600' : ' text-white group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                        aria-hidden="true" />
                    <span class="hidden lg:block">{{ item.meta.title }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/vue/24/outline'
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
const Role = JSON.parse(sessionStorage.getItem('role') as string) ? 1 : 0;
const routeList = router.getRoutes().filter(item => Boolean(item.meta.title)).map(item => ({ ...item }));
</script>