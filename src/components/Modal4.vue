<script setup>
const visible = defineModel();     // ← AUTOMÁTICO
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <p>Este es el modal</p>
      <button @click="visible = false">Cerrar</button>
    </div>
  </div>
</template>
