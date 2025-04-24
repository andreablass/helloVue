<!-- components/Modal.vue -->
<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded shadow-lg w-1/2">
      <h2 class="text-lg font-bold mb-2">Soy una Modal!!!! ✨</h2>
      <p>Este es el contenido de la modal.</p>
      <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded" @click="$emit('update:modelValue', false)">
        Cerrar
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(['modelValue']) // Permite que la modal reciba el estado de abierto/cerrado
</script>
