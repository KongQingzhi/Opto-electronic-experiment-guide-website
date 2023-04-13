<template>
    <div id="User" class="flex justify-center items-center h-screen">
        <div class="w-full px-2 py-60 grid md:grid-cols-2 grid-cols-1">
            <div class="col-span-1 text-center my-2">
                <div class="flex justify-center mb-4">
                    <img :src="src" class="w-full" />
                </div>
                <div class="my-4">
                    <div class="text-lg font-bold text-center">{{ buttonContent.title }}</div>
                    <div class="text-center text-grey-500">{{ buttonContent.asideTitle }}</div>
                </div>
                <ElButton type="primary" @click="buttonContent.btnFn">
                    {{ buttonContent.btnText }}
                </ElButton>
            </div>
            <div class="col-span-1 px-28 flex items-center">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import { ref, Ref, onMounted, reactive } from 'vue';
import login from '../../assets/image/svg/login.svg';
import register from '../../assets/image/svg/register.svg';
import findPassword from '../../assets/image/svg/findPassword.svg';
import router from '../../router';
const imgList: string[] = [login, register, findPassword];
const src: Ref<string> = ref(imgList[0]);
const btnText: Ref<string[]> = ref(['去 注 册', '去 登 录']);
const toLogin = (): void => {
    router.push({
        path: '/login'
    })
    showImg()
}

const toRegister = (): void => {
    router.push({
        path: '/register'
    })
    showImg()
}

const showImg = () => {
    router.afterEach((to, from) => {
        if (to.path == '/login') {
            buttonContent.value = buttonContentList[0];
            src.value = imgList[0];
        } else if (to.path == '/register') {
            buttonContent.value = buttonContentList[1];
            src.value = imgList[1];
        } else if (to.path == '/findPassword') {
            buttonContent.value = buttonContentList[1];
            src.value = imgList[2];
        }
    })
    const { fullPath } = router.currentRoute.value;
    if (fullPath == '/login') {
        src.value = imgList[0];
        buttonContent.value = buttonContentList[0];
    } else if (fullPath == '/register') {
        src.value = imgList[1];
        buttonContent.value = buttonContentList[1];
    } else if (fullPath == '/findPassword') {
        buttonContent.value = buttonContentList[1];
        src.value = imgList[2];
    }
}
const buttonContentList = [{
    btnText: btnText.value[0],
    btnFn: toRegister,
    title: '新 用 户 ？',
    asideTitle: '快点击下方按钮加入我们吧！'
}, {
    btnText: btnText.value[1],
    btnFn: toLogin,
    title: '已 有 帐 号？',
    asideTitle: '快点击下方按钮登录吧！'
}]
const buttonContent = ref({
    btnText: btnText.value[0],
    btnFn: toRegister,
    title: '新 用 户 ？',
    asideTitle: '快点击下方按钮加入我们吧！'
});
onMounted(() => {
    showImg()
})
</script>
