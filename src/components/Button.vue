<script setup>
import { ref, watch } from "vue";

const props = defineProps({});
const loading = ref(false);

watch(loading, () => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<template>
  <button
    class="bg-gray-200 px-2 py-1 rounded border border-gray-300"
    @click="loading = true"
  >
    <span v-if="loading">Loading</span>
    <span v-else><slot /></span>
  </button>
</template>