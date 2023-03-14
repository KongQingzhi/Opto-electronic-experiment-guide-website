<template>
    <div id="FindPassword">
        <div class="title-box">
            <div class="px-1 title-2 font-weight">找回密码</div>
            <div class="title-4 my-1 text-grey">RecoverThePassword</div>
        </div>
        <div class="input-box">
            <div class="position-relative ">
                <span>Account</span>
                <input type="text" class="border-radius-sm border-grey my-1" placeholder="学号">
            </div>
            <div class="position-relative ">
                <span>Email</span>
                <input type="text" class="border-radius-sm border-grey my-1" placeholder="邮箱">
            </div>
            <div class="position-relative">
                <span>Password</span>
                <input type="text" class="border-radius-sm border-grey my-1" placeholder="密码">
            </div>
            <div class="position-relative"
                style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <span>Password</span>
                <input class="border-radius-sm border-grey my-1" style="width: 60%;" type="text" maxlength="6"
                    placeholder="验证码">
                <ButtonVue @btn-fn="" btn-content="获取"></ButtonVue>
            </div>
        </div>
        <ButtonVue @btn-fn="" btn-content="找 回 密 码"></ButtonVue>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import ButtonVue from '../../../components/button.vue';
import router from '../../../router';
const second: Ref<number> = ref(60);
const str = '';;
function login() {
    console.log(111);
}




</script>

<style lang="scss" scoped>
@import '../../../assets/style/common.scss';

#FindPassword {
    @include disFlex(center, center);
    padding: 0 2rem;
    margin: 0 auto;
    width: 18rem;

    .title-box {
        @include disFlex(center, center);
    }

    .input-box {
        span {
            display: inline-block;
            background-color: #fff;
            @include posiAR(absolute, 0.5rem, 1rem);
        }

        input {
            padding-top: 1rem;
            @include fontSW(1.2rem, 700);
        }
    }
}
</style>