<template>
    <div id="Modal" class="text-center border-radius-sm" :class="modalType">
        <span class="title-sm">{{ modalContent }}</span>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps({
    modalContent: String,
    modalType: String
})
const a = 11;

</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';

#Modal {
    padding: 0 0.3rem;
}

.info{
    color: skyblue;
}

.waring {
    color: yellow;
}

.error{
    color: red;;
}
</style>