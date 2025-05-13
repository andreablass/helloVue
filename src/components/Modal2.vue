<script setup>
const props = defineProps(['visible']);
const emit = defineEmits(['cerrar']);
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <p>Este es el modal básico</p>
      <button v-on:click="emit('cerrar')">Cerrar</button>
    </div>
  </div>
</template>

