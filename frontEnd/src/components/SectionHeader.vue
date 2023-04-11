<template>
    <div class="border-b border-gray-200 pb-5">
        <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
            <h3 class="ml-2 mt-2 text-base font-semibold leading-6 text-gray-900">{{ props.title }}</h3>
            <p class="ml-2 mt-1 truncate text-sm text-gray-500">{{ props.asideTitle }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    title: string,
    asideTitle: string
}>()

</script>