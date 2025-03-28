<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  name: String,
  description: String
});

const emit = defineEmits(['updateName']);
const localName = ref(props.name);
const skills = ref(['Vue', 'JavaScript', 'CSS', 'Tailwind']); // Lista con v-for

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

    <!-- v-for para mostrar lista de habilidades -->
    <ul class="mt-4">
      <li v-for="(skill, index) in skills" :key="index" class="text-blue-500">
        {{ skill }}
      </li>
    </ul>

    <!-- Input de nombre con v-model y evento @input -->
    <div class="mt-4">
      <input 
        type="text" 
        v-model="localName" 
        class="p-2 border border-gray-300 rounded"
        @input="changeName"
      />
      <p>Nombre actual: {{ localName }}</p>
    </div>
  </div>
</template>

