<template>
    <div class="questions-card position-relative border-radius-sm my-1 mx-1 hidden">
        <div class="content-card position-relative">
            <div class="mask"></div>
            <div class="content">
                <div class="text-center my-2 title-5">123</div>
                <div class="text-center">
                    <i class="iconfont icon-ziliao" style="font-size: 5rem;"></i>
                </div>
                <div class="text-center my-2">
                    <div class="text-center" v-if="1">45656456</div>
                    <ElButton v-if="!1" type="primary">123456</ElButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
</script>

<style lang="scss">
@import '../../../../assets/style/common.scss';

.questions-card {
    width: 13rem;
    height: 15rem;
    border: 0.1rem solid #e4e1e0;

    .content-card {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 3;

        .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(189, 221, 239, 0.8);
            clip-path: polygon(0 75%, 100% 25%, 100% 100%, 0% 100%);
            z-index: -1;
        }
    }
}
</style>