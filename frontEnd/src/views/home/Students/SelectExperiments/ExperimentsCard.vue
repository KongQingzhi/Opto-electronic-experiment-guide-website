<!-- <template>
    <div class="experiment-card border-radius-lg my-1 mx-1 hidden">
        <div class="name">{{ item.e_name }}</div>
        <div class="content">{{ item.e_content }}</div>
        <div class="teacher text-grey">任课教师：{{ item.t_name }}</div>
        <div class="room text-grey">实验教室：{{ item.r_name }}</div>
        <ElButton v-if="role" type="primary">删除</ElButton>
        <ElButton type="primary" @click="toExperimentsDetails">进入</ElButton>
    </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { useRouter } from 'vue-router';
interface Item {
    e_name: string,
    e_content: string,
    r_name: string,
    t_name: string
}
const props = defineProps<{ item: Item }>();
const router = useRouter();
const toExperimentsDetails = () => {
    router.push({
        name: 'experimentsContent',
        query: { ...props.item },
    })
}
const role = JSON.parse(sessionStorage.getItem('user') as string);
</script>
<style lang="scss" scoped>

.experiment-card {
    width: 15rem;
    padding: 1rem;
    border: 0.1rem solid #f8f5f4;

    .name {
        width: 13rem;
        height: 3rem;
        line-height: 3rem;
        overflow: hidden;
        font-size: 1.2rem;
        color: skyblue;
    }

    .content {
        height: 2.5rem;
        margin-bottom: 1rem;
        overflow: hidden;
        white-space: normal; //设置文字换行
        word-wrap: break-word; //设置数字强制换行
        font-size: 1rem;
    }

    .teacher {
        width: 14rem;
        height: 2rem;
        font-size: 0.8rem;
    }

    .room {
        width: 14rem;
        height: 2rem;
        font-size: 0.8rem;
    }
}
</style> -->
<template>
    <div class="mt-4 space-y-5 lg:mt-5 lg:space-y-10">
        <article class="relative isolate flex flex-col gap-8 lg:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img :src="item.imageUrl" alt=""
                    class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
                <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
                <div class="flex items-center gap-x-4 text-xs">
                    <time :datetime="item.datetime" class="text-gray-500">{{ item.date }}</time>
                    <a :href="item.category.href"
                        class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                            item.category.title }}</a>
                </div>
                <div class="group relative max-w-xl">
                    <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a :href="item.href">
                            <span class="absolute inset-0" />
                            {{ item.title }}
                        </a>
                    </h3>
                    <p class="mt-5 text-sm leading-6 text-gray-600">{{ item.description }}</p>
                </div>
                <div class="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div class="relative flex items-center gap-x-4">
                        <img :src="item.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-900">
                                <a :href="item.author.href">
                                    <span class="absolute inset-0" />
                                    {{ item.author.name }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ item.author.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script lang="ts" setup>
const item =
{
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
}
    // More items...

</script>