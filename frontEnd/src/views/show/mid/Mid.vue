<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl sm:text-center">
                <h2 class="text-base font-semibold leading-7 text-indigo-600">每个学生都需要</h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">没时间？没问题！</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">使用光电实验指导网站大大节省你的时间</p>
            </div>
        </div>
        <div class="relative overflow-hidden pt-16">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <img src="../../../assets/image/png/index1.png" alt="App screenshot"
                    class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10" width="2432" height="1442" />
                <div class="relative" aria-hidden="true">
                    <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                </div>
            </div>
        </div>
        <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                    <dt class="inline font-semibold text-gray-900">
                        <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            aria-hidden="true" />
                        {{ feature.name }}
                    </dt>
                    {{ ' ' }}
                    <dd class="inline">{{ feature.description }}</dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/vue/20/solid'

const features = [
    {
        name: '查看课程',
        description: '进入页面，你可以看到所以课程',
        icon: CloudArrowUpIcon,
    },
    {
        name: '查看实验',
        description: '点击实验，你可以看到实验分布',
        icon: LockClosedIcon,
    },
    {
        name: '学习实验',
        description: '进入实验，你可以看到实验细节',
        icon: ArrowPathIcon,
    },
    {
        name: '回答试题',
        description: '通过试题，你可以了解你的不足',
        icon: FingerPrintIcon,
    },
    {
        name: '管理实验',
        description: '管理实验，你可以更加轻松',
        icon: Cog6ToothIcon,
    },
    {
        name: '管理试题',
        description: '管理试题，你可以更加方便',
        icon: ServerIcon,
    },
]
</script>