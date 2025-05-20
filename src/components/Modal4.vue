<script setup>
const props = defineProps(['visible'])
const emit = defineEmits(['update:visible'])
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <p>Ejemplo 3: v-model:visible</p>
      <button @click="emit('update:visible', false)">Cerrar</button>
    </div>
  </div>
</template>

<!-- 
v-model:nombre	

Para múltiples bindings
Te permite tener varios v-model en un mismo componente.
-->