<template>
    <div class="User">
        <div class="img">
            <img src="" alt="">
        </div>
        <div class="inputBox border-radius-lg box-shadow px-2 py-2">
            <div class="text title-2 font-weight text-center">{{ inputBoxTitle[index] }}</div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
    const inputBoxTitle: String[] = ['登录', "注册", "找回密码"];
    const index: number = 0;
</script>

<style lang="scss" scoped>
.User {
    display: flex;
    align-items: center;
    height: 100vh;

}
</style>