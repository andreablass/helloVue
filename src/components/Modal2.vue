<script setup>
const props = defineProps(['visible'])
const emit = defineEmits(['cerrar'])
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <p>Ejemplo 1: prop + evento</p>
      <button @click="emit('cerrar')">Cerrar</button>
    </div>
  </div>
</template>

<!-- 
prop + evento

El padre envía el estado con visible

El hijo emite el evento cerrar

CONTROL MANUAL - prop + evento
El padre recibe el evento y cambia el valor a false
pero este no usa vmodel porque lo maneja el padre
pero es la manera de entender como funciona con vmodel
-->