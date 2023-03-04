<template>
    <div id="Button" class="border-radius-lg text-center" :class="propsClass" :style="propsStyle" @click="propsFn">
        {{ content }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps([
    "content",
    "propsClass",
    "propsStyle",
    "propsFn"
])
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';

#Button {
    width: 8rem;
    height: 2.8rem;
    background-color: $primaryBlue;
    color: $primaryWhite;
    line-height: 2.8rem;
    @include fontSW(1.2rem, 400);
    cursor: pointer;
}
</style>