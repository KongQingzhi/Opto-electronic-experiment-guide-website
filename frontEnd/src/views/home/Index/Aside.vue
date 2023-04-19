<template>
    <nav class="hidden shadow md:block bg-white gap-y-5 py-10 rounded-md px-6">
        <ul role="list" class="-mx-2 space-y-1">
            <li v-for="(item, index) in routeList" class="cursor-pointer" :key="item.name">
                <a v-if="item.meta.role === Role" @click="router.push({ name: item.name })"
                    :class="[Number(route.query.type) == index ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold']">
                    <component :is="item.icon"
                        :class="[Number(route.query.type) == index ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                        aria-hidden="true" />
                    {{ item.meta.title }}
                </a>
            </li>
        </ul>
    </nav>
    <nav class="block shadow md:hidden bg-white py-10 rounded-md px-3 max-w-min">
        <ul role="list" class="space-y-1">
            <li v-for="(item, index) in routeList" class="cursor-pointer" :key="item.name">
                <a v-if="item.meta.role === Role" @click="router.push({ name: item.name })"
                    :class="[Number(route.query.type) == index ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold']">
                    <component :is="item.icon"
                        :class="[Number(route.query.type) == index ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                        aria-hidden="true" />
                    {{ item.meta.title }}
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
const routeList = router.getRoutes().filter(item => Boolean(item.meta.title)).map(item => ({ ...item, icon: DocumentDuplicateIcon }));
</script>