<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

// Cuando el input cambie, se dispara el evento:
const updateMessage = (e) => {
  emit('update:modelValue', e.target.value);
};
</script>

<template>
  <div>
    <input :value="modelValue" @input="updateMessage" placeholder="Escribe algo aquí" />
    <p>El mensaje del hijo es: {{ modelValue }}</p>
  </div>
</template>
