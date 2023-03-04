<template>
    <div class="Login px-2 py-2">
        <input class="border-gray border-radius-sm my-1" type="text" placeholder="请输入账号">
        <input class="border-gray border-radius-sm my-1" type="text" placeholder="请输入密码">
        <modalVue  modal-type="info" modal-content="123456"></modalVue>
        <buttonVue class="" style="margin:2rem auto" content="电脑" propsClass="" propsFn=""></buttonVue>
    </div>
</template>

<script setup lang="ts">
import buttonVue from '../../../components/button.vue';
import modalVue from '../../../components/modal.vue';



</script>

<style lang="scss" scoped>
@import '../../../assets/style/common.scss';

.Login {
    width: 18rem;
    height: 24rem;
}
</style>