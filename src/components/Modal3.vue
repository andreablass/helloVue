<script setup>
const visible = defineModel();    
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <p>Este es el modal</p>
      <button @click="visible = false">Cerrar</button>
    </div>
  </div>
</template>
<!-- -
Vue interpreta automáticamente v-model="mostrarModal3" como:

:modelValue="mostrarModal3"

@update:modelValue="mostrarModal3 = $event"

El hijo sólo tiene que emitir update:modelValue y Vue se encarga del resto.

No necesitas cerrarModal(), ni v-bind, ni v-on.
->