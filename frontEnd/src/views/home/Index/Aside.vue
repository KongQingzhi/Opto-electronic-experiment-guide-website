<template>
    <div id="Aside" class="box-shadow border-radius-lg" :class="isExpand ? 'isExpandWidth' : 'unExpandWidth'">
        <button @click="isExpand = !isExpand">click</button>
        <ul class="px-1 py-1">
            <li v-for="(item, index) in menuList" :key="index" class="hidden" style="height: 3rem;margin: 0.2rem 0;">
                <div v-if="item.role === 0" style="display: flex;">
                    <div @click="toRoute(index)" class="iconDiv" :class="listIndex == index ? 'active' : ''"
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
    role: 0
}, {
    icon: 'iconfont icon-jiangzhang',
    title: '创建班级',
    role: 0
}, {
    icon: 'iconfont icon-daka',
    title: '查看实验',
    role: 0
}, {
    icon: 'iconfont icon-biaoqian',
    title: '发布实验',
    role: 0
}, {
    icon: 'iconfont icon-yonghuguanli',
    title: '实验评分',
    role: 0
}, {
    icon: 'iconfont icon-jiangzhang',
    title: 2,
    role: 0
}, {
    icon: 'iconfont icon-daka',
    title: 3,
    role: 0
}, {
    icon: 'iconfont icon-biaoqian',
    title: 4,
    role: 0
}, {
    icon: 'iconfont icon-yonghuguanli',
    title: '绑定班级',
    role: 0
}, {
    icon: 'iconfont icon-jiangzhang',
    title: 2,
    role: 0
}, {
    icon: 'iconfont icon-daka',
    title: 3,
    role: 0
}, {
    icon: 'iconfont icon-biaoqian',
    title: 4,
    role: 0
}];
const isExpand = ref(true);
const listIndex = ref(0);
const routeList = ['/home/myinfo', '/home/createClass', '/home/experimentsList', '/home/experimentsRelease','/home/experimentsScore']
const toRoute = (index: number) => {
    listIndex.value = index;
    router.push({
        path: routeList[index],
    })
}
</script>

<style lang="scss">
@import '../../../assets/style/common.scss';

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
    background-color: $primaryBlue;

    i {
        color: $primaryWhite !important;
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
                    color: $primaryBlue;
                }
            }
        }
    }
}
</style>
