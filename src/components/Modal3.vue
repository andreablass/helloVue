<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <p>Ejemplo 2: v-model</p>
      <button @click="emit('update:modelValue', false)">Cerrar</button>
    </div>
  </div>
</template>

<!-- 
v-model	

Azúcar sintáctico(ya es mas fácil de usar on vmodel)
Es lo mismo que el anterior modal1, pero más limpio 
-->