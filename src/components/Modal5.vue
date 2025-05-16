<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div v-if="modelValue" class="bg-white p-4 rounded shadow">
    <p>Este es el modal</p>
    <button @click="emit('update:modelValue', false)">
      Cerrar
    </button>
  </div>
</template>

<!-- 
v-model="x"  

es lo mismo que recibir 

:modelValue="x"
@update:modelValue="x = $event"
-->