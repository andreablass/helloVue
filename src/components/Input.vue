<script setup>
import { onMounted } from '@vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

</script>

<template>
    <input class="border rounded-md px-1.5 py-1 border-gray-400"
        type="text"
        :value="modelValue"
        v-on:input="emit ('update:modelValue', $event.target.value)">
</template>

<!-- ------------------------
<script setup>

const title = defineModel('title')
const subtitle = defineModel('subtitle')

</script>

<template>
    <input class="border rounded-md px-1.5 py-1 border-gray-400"
        type="text"
        v-model="title">
        <input class="border rounded-md px-1.5 py-1 border-gray-400"
        type="text"
        v-model="subtitle">
</template>
! >