<template>
    <div id="Button" class="border-radius-lg text-center" :class="propsClass" :style="propsStyle" @click="$emit('propsFn',index)">
        {{ content }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps([
    "content",
    "propsClass",
    "propsStyle",
])
const emit = defineEmits({
    propsFn:(n: number): void=>{
        
    }
})
const index = 0;
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