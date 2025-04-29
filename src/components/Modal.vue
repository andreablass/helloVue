<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded shadow-lg ">
      <h2 class="text-lg font-bold mb-2">Soy una Modal!!!! </h2>
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


<!--El hijo 
// <script setup>
// import { defineProps, defineEmits } from 'vue';

// // 1. Aceptar la prop
// const props = defineProps({
//   modelValue: [String, Number, Boolean], // depende del tipo que necesites
// });

// // 2. Emitir los cambios
// const emit = defineEmits(['update:modelValue']);

// // Función que dispara el evento cuando cambia el input
// const updateValue = (event) => {
//   emit('update:modelValue', event.target.value);
// };
// </script>

// <template>
//   <input :value="modelValue" @input="updateValue" />
// </template>

// El padre

// <script setup>
// import { ref } from 'vue';
// import Form from './components/Form.vue';

// const myText = ref(''); // variable reactiva
// </script>

// <template>
//   <Form v-model="myText" />
//   <p>Valor actual: {{ myText }}</p>
// </template> -->