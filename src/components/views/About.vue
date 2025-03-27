<script setup>
import { defineProps, defineEmits, ref } from 'vue';

// Recibiendo props
const props = defineProps({
  name: String,
  description: String
});

// Emitiendo eventos
const emit = defineEmits(['updateName']);
const localName = ref(props.name);

// Cuando se cambie el nombre, emitimos el evento para actualizarlo en el componente padre
const changeName = () => {
  emit('updateName', localName.value);
};
</script>

<template>
  <div class="w-full max-w-4xl mx-auto p-4 text-center">
    <h1 class="text-4xl font-bold mb-4">{{ name }}</h1>
    <h2 class="text-xl mb-6">{{ description }}</h2>
    <div class="flex justify-center items-center mt-8">
      <img
        src="/images/profile.jpg"
        alt="Profile Picture"
        class="w-48 h-48 rounded-full object-cover border-4 border-gray-300 shadow-lg"
      />
    </div>
    <div class="flex justify-center space-x-4 mt-8">
      <a href="https://www.linkedin.com" class="social-icon">
        <img
          src="/images/linkedin.png"
          alt="LinkedIn Icon"
          class="w-8 h-8 object-cover rounded shadow-lg"
        />
      </a>
      <a href="https://twitter.com" class="social-icon">
        <img
          src="/images/x.png"
          alt="Twitter Icon"
          class="w-8 h-8 object-cover rounded shadow-lg"
        />
      </a>
    </div>
    
    <!-- Input de nombre con v-model -->
    <div>
      <input 
        type="text" 
        v-model="localName" 
        class="mt-4 p-2 border border-gray-300 rounded"
        @input="changeName"
      />
      <p>Nombre actual: {{ localName }}</p>
    </div>
  </div>
</template>

