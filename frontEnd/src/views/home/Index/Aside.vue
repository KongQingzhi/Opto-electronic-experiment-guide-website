<template>
    <nav class="hidden shadow md:block bg-white gap-y-5 py-10 rounded-md px-6">
        <ul role="list" class="-mx-2 space-y-1">
            <li v-for="(item, index) in routeList" :key="item.name">
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
            <li v-for="(item, index) in routeList" :key="item.name">
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


// const handleClick = (index: number) => {
//     router.push({
//         name: '',
//         query: {
//             ...route.query,
//             type: index,
//         }
//     })
// }
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
