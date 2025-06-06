<script setup>
import { inject } from "vue";
const title = inject('title', 'default title');

setTimeout( () => {
    title.value = 'Nuevo titulo';
}, 2000)
</script>

<template>
    <div class="bg-gray-500 rounded px-4 py-2 my-4 grid text-gray-100 gap-4">
        <div>El titulo es</div>
    </div>
</template>
