<template>
    <div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
        <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            aria-hidden="true">
            <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            aria-hidden="true">
            <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-xl text-center">
                <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">管理</h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们希望你可以在这里更轻松的工作</p>
            </div>
            <div
                class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure
                    class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                    <blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                        <p>{{ `“${featuredTestimonial.body}”` }}</p>
                    </blockquote>
                    <figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                        <img class="h-10 w-10 flex-none rounded-full bg-gray-50" :src="featuredTestimonial.author.imageUrl"
                            alt="" />
                        <div class="flex-auto">
                            <div class="font-semibold">{{ featuredTestimonial.author.name }}</div>
                            <div class="text-gray-600">{{ `@${featuredTestimonial.author.handle}` }}</div>
                        </div>
                        <img class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl" alt="" />
                    </figcaption>
                </figure>
                <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx"
                    class="space-y-8 xl:contents xl:space-y-0">
                    <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx"
                        :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
                        <figure v-for="testimonial in column" :key="testimonial.author.handle"
                            class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                            <blockquote class="text-gray-900">
                                <p>{{ `“${testimonial.body}”` }}</p>
                            </blockquote>
                            <figcaption class="mt-6 flex items-center gap-x-4">
                                <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                                <div>
                                    <div class="font-semibold">{{ testimonial.author.name }}</div>
                                    <div class="text-gray-600">{{ `@${testimonial.author.handle}` }}</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const featuredTestimonial = {
    body: '我从未想到过，工作也可以如此简单！',
    author: {
        name: 'Brenna Goyette',
        handle: 'brennagoyette',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
        logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    },
}
const testimonials = [
    [
        [
            {
                body: '我使用这个网站进行开展实验，我真的好后悔，后悔知道的太晚。',
                author: {
                    name: 'Leslie Alexander',
                    handle: 'lesliealexander',
                    imageUrl:
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
        [
            {
                body: '在网站中发布实验和试题，大大节省了我和学生们的时间，这让我有时间去做自己的事',
                author: {
                    name: 'Lindsay Walton',
                    handle: 'lindsaywalton',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
    ],
    [
        [
            {
                body: '学生们都很乐意使用这个网站学习，他们认为这才是年轻人的方式',
                author: {
                    name: 'Tom Cook',
                    handle: 'tomcook',
                    imageUrl:
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
        [
            {
                body: '学生们可以在这里更直观的看到自己的成长，总而更加努力',
                author: {
                    name: 'Leonard Krasner',
                    handle: 'leonardkrasner',
                    imageUrl:
                        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
    ],
]
</script>