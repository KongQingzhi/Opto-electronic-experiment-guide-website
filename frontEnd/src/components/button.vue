<template>
    <button id="Button" class="border-radius-sm box-shadow" @click="$emit('btnFn')">
        <span>{{ btnContent }}</span>
    </button>
</template>

<script setup lang="ts">
const prop = defineProps({
    btnIcon: String,
    btnContent: String
})
const emit = defineEmits(['btnFn']);
</script>

<style lang="scss" scoped>
// @import '../assets/style/common.scss';

// #Button {
//     padding: 0.5rem 1.5rem;
//     background-color: $primaryBlue;
//     color: #fff;
//     @include fontSW(1rem, 700);
//     cursor: pointer;
//     transition: all 0.3s;

//     &:active {
//         transform: translateY(0.1rem);
//     }
// }
</style>