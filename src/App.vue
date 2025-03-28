<script setup>
import Header from '@/components/navigation/Header.vue';
import Footer from '@/components/navigation/Footer.vue';
import { ref } from 'vue';
import About from '@/components/views/About.vue';

const name = ref('Andrea');
const description = ref('Web developer and community lead.');
const showHeader = ref(true); // Para alternar visibilidad del header

const updateName = (newName) => {
  name.value = newName;
};
</script>

<template>
  <!-- v-if para mostrar/ocultar el header -->
  <Header v-if="showHeader" :title="name" />

  <main>
    <!-- Enviamos props y manejamos eventos -->
    <About :name="name" :description="description" @updateName="updateName" />
  </main>

  <Footer>
    <p>Este es el footer</p>
    <!-- Botón con v-on (@click) para alternar visibilidad del header -->
    <button @click="showHeader = !showHeader" class="mt-4 p-2 bg-blue-500 text-white rounded">
      {{ showHeader ? 'Ocultar Header' : 'Mostrar Header' }}
    </button>
  </Footer>
</template>

