<template>
    <div id="User">
        <div class="user-box border-radius-lg box-shadow px-2 py-2">
            <div class="img-box py-2">
                <img :src="src" alt="">
                <div class="text-box py-2">
                    <div class="title title-4 font-weight text-center">{{ buttonContent.title }}</div>
                    <div class="content text-center text-grey">{{ buttonContent.asideTitle }}</div>
                </div>
                <ButtonVue btn-icon="icon-sousuo" :btn-content="buttonContent.btnText" @btn-fn="buttonContent.btnFn">
                </ButtonVue>

            </div>
            <div class="form-box px-2">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, reactive } from 'vue';
import login from '../../assets/image/svg/login.svg';
import register from '../../assets/image/svg/register.svg';
import findPassword from '../../assets/image/svg/findPassword.svg';
import ButtonVue from '../../components/button.vue';
import router from '../../router';
const imgList: string[] = [login, register, findPassword];
const src: Ref<string> = ref(imgList[0]);
const btnText: Ref<string[]> = ref(['去 注 册', '去 登 录']);
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
function toLogin(): void {
    router.push({
        path: '/login'
    })
    showImg()
}

function toRegister(): void {
    router.push({
        path: '/register'
    })
    showImg()
}

function showImg() {
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

onMounted(() => {
    showImg()
})
</script>

<style lang="scss" scoped>
@import '../../assets/style/common.scss';

.user-enter-active,
.user-leave-active {
    transition: opacity 2s ease;
}

.user-enter-from,
.user-leave-from {
    opacity: 0;
}

#User {
    @include disFlex(center, center);
    height: 100vh;



    .user-box {
        @include disFlex(center, center);
        width: 60rem;
        background-color: #fff;

        .img-box {
            @include disFlex(center, center);
            width: 28rem;

            img {
                width: 24rem;
                height: 24rem;
            }

            .text-box {
                @include disFlex(center, center);
                width: 28rem;
            }
        }

        .form-box {
            width: 28rem;
        }
    }
}
</style>