<template>
    <div class="md:flex md:items-center md:justify-between border-b p-4 mb-4">
        <div class="min-w-0 flex-1">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {{ props.title }}
            </h2>
        </div>
        <div v-if="props.button" class="mt-4 flex md:ml-4 md:mt-0">
            <ElButton @click="emit('clickButton')" type="primary"> {{ props.buttonText }}</ElButton>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus';
const props = withDefaults(defineProps<{
    title: string,
    buttonText: string,
    button: boolean
}>(), {
    button: false,
    buttonText: 'Create a new job'
});
const emit = defineEmits<{
    (e: 'clickButton'): void
}>();
</script>