<template>
    <div id="Modal" class="border-radius-sm text-center">
        {{ content }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({
    content: String,
    borderWidth: String,
    modalType: String
});
const { borderWidth, modalType } = props;


</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';

#Modal {
    padding: 0.3rem;

}
</style>