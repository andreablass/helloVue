<script setup>
import { inject } from "vue";

const title = inject('title', 'default title');
</script>

<template>
  <div class="bg-gray-500 rounded px-4 py-2 my-4 grid text-gray-100 gap-4">
    <div>El título en el nieto es: <strong>{{ title }}</strong></div>
  </div>
</template>
