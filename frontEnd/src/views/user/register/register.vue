<template>
    <div id="Register">
        <div class="title-box">
            <div class="px-2 title-2 font-weight">注 册</div>
            <div class="title-4 my-1 text-grey">Register</div>
        </div>
        <div class="input-box">
            <div class="position-relative">
                <span>Account</span>
                <input type="text" class="border-radius-sm border-grey my-1" placeholder="学号">
            </div>
             <div class="position-relative">
                    <span>Name</span>
                    <input type="text" class="border-radius-sm border-grey my-1" placeholder="姓名">
                </div>
            <div class="position-relative">
                <span>Email</span>
                <input type="email" class="border-radius-sm border-grey my-1" placeholder="邮箱">
            </div>
            <div class="position-relative">
                <span>Password</span>
                <input type="text" class="border-radius-sm border-grey my-1" placeholder="密码">
            </div>
        </div>
        <ButtonVue @btn-fn="log" btn-content="注 册"></ButtonVue>
    </div>
</template>

<script setup lang="ts">
import ButtonVue from '../../../components/button.vue';
function log() {
    console.log(111);
}



</script>

<style lang="scss" scoped>
@import '../../../assets/style/common.scss';

#Register {
    @include disFlex(center, center);
    padding: 0 2rem;
    margin: 0 auto;
    width: 18rem;
    .title-box {
        @include disFlex(center, center);
    }

    .input-box {
        margin-bottom: 2rem;
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