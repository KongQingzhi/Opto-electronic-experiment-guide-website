<template>
    <div class="flex grow flex-col gap-y-5 overflow-y-auto border rounded-md border-gray-200 bg-white px-6">
        <a href="#"
            class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
            <img class="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
            <span class="sr-only">Your profile</span>
            <span aria-hidden="true">Tom Cook</span>
        </a>
        <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                            <a :href="item.href"
                                :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                <component :is="item.icon"
                                    :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                                    aria-hidden="true" />
                                {{ item.name }}
                                <span v-if="item.count"
                                    class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                                    aria-hidden="true">{{ item.count }}</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                    <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                            <a :href="team.href"
                                :class="[team.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                <span
                                    :class="[team.current ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{
                                        team.initial }}</span>
                                <span class="truncate">{{ team.name }}</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="-mx-6 mt-auto">

                </li>
            </ul>
        </nav>
    </div>
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

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
</script>
<!-- <template>
    <div id="Aside" class="box-shadow border-radius-lg" :class="isExpand ? 'isExpandWidth' : 'unExpandWidth'">
        <button @click="isExpand = !isExpand">click</button>
        <ul class="px-1 py-1">
            <li v-for="(item, index) in menuList" :key="index" class="" style="height: 3rem;margin: 0.2rem 0;">
                <div v-if="item.role === 0" style="display: flex;">
                    <div @click="toRoute(item)" class="iconDiv" :class="listIndex == index ? 'active' : ''"
                        style="padding:0.4rem 0.7rem;">
                        <i style="font-size:1.5rem;line-height: 2rem;" :class="item.icon"></i>
                    </div>
                    <transition name="toLeft">
                        <div v-if="isExpand" style="font-size:1rem;line-height: 3rem;" class="mx-1">{{ item.title }}</div>
                    </transition>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
const menuList = [{
    icon: 'iconfont icon-yonghuguanli',
    title: '我的信息',
    name: 'myInfo',
    role: 0
}, {
    icon: 'iconfont icon-jiangzhang',
    title: '查询实验',
    name: 'selectExperiments',
    role: 0
}, {
    icon: 'iconfont icon-daka',
    title: '查询试卷',
    name: 'selectQuestions',
    role: 0
}, {
    icon: 'iconfont icon-biaoqian',
    title: '实验成绩',
    name: 'selectExperimentsScore',
    role: 0
}, {
    icon: 'iconfont icon-yonghuguanli',
    title: '课程成绩',
    name: 'selectLessonsScore',
    role: 0
}, {
    icon: 'iconfont icon-jiangzhang',
    title: 2,
    role: 1
}, {
    icon: 'iconfont icon-daka',
    title: 3,
    role: 1
}, {
    icon: 'iconfont icon-biaoqian',
    title: 4,
    role: 1
}, {
    icon: 'iconfont icon-yonghuguanli',
    title: '绑定班级',
    role: 1
}, {
    icon: 'iconfont icon-jiangzhang',
    title: 2,
    role: 1
}, {
    icon: 'iconfont icon-daka',
    title: 3,
    role: 1
}, {
    icon: 'iconfont icon-biaoqian',
    title: 4,
    role: 1
}];
const isExpand = ref(true);
const listIndex = ref(0);
const studentsRouteList = ['/home/students/myInfo', '/home/students/selectExperiments', '/home/students/selectQuestions', '/home/students/selectExperimentsScore', '/home/students/selectLessonsScore']
const teachersRouteList = ['/home/students/myInfo', '/home/students/selectExperiments', '/home/students/selectQuestions', '/home/students/selectExperimentsScore', '/home/students/selectLessonsScore']
const toRoute = (item:any) => {
    router.push({
        path: item.name,
    })
}
</script>

<style lang="scss">

.isExpandWidth {
    width: 12rem;
}

.unExpandWidth {
    width: 6rem;
}

.toLeft-enter-active,
.toLeft-leave-active {
    transition: all 0.5s ease-out;
}

.toLeft-enter-from,
.toLeft-leave-to {
    transform: translateX(200px);
    opacity: 0;
}

.toLeft-enter-to,
.toLeft-leave-from {
    transform: translateX(0px);
    opacity: 1;
}

.active {
    background-color: blue;

    i {
        color: white !important;
    }
}

#Aside {
    transition: all 0.3s;
    background-color: #fff;

    ul {
        li {
            .iconDiv {
                border-radius: 50%;

                i {
                    color: blue;
                }
            }
        }
    }
}
</style> -->
