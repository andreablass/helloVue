<script setup>
const props = defineProps(['visible']); //visible es igual a  v-bind para pasar props 
const emit = defineEmits(['cerrar']); // cerras es igual a v-on para escuchar eventos
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <p>Este es el modal básico</p>
      <button v-on:click="emit('cerrar')">Cerrar</button>
    </div>
  </div>
</template>
<!-- 
El padre envía el estado con visible

El hijo emite el evento cerrar

El padre recibe el evento y cambia el valor a false

-->