<script setup>
import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";
import About from "@/components/views/About.vue";
import Container from "@/components/container/Index.vue";
import { useCounter } from "@/composables/useCounter";
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';


const mensaje = ref('Hola');

const name = ref("Andrea");
const description = ref("Web developer and community lead.");
const showHeader = ref(true); // Para alternar visibilidad del header
const { count, increment, decrement } = useCounter(); //se declaran las variables dentro del composables

const updateName = (newName) => {
  name.value = newName;


const mensaje = ref('Hola mundo');
const logs = ref([]);

onMounted(() => {
  logs.value.push('✅ onMounted: El componente fue montado');
});

onUpdated(() => {
  logs.value.push('🔄 onUpdated: El componente fue actualizado');
});

onUnmounted(() => {
  console.log('❌ Componente destruido');
});

const updateMessage = () => {
  mensaje.value += ' 👋';
};
};
</script>

<template>
  <!-- v-if para mostrar/ocultar el header -->
  <Header v-if="showHeader" :title="name" />

<main class="min-h-56">
  <!-- Enviamos props y manejamos eventos los datos son enviados desde el componente padre -->
  <About :name="name" :description="description" @updateName="updateName" />
  
  <div class="py-19">
    <button class="p-2 bg-pink-500 text-white rounded">Hello World</button>
  </div>

  <div>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
    <div class="p-4 border rounded shadow-md">
    <h2 class="text-lg font-bold mb-2">Ciclo de vida en acción 🚀</h2>
    <p>{{ mensaje }}</p>
    <button @click="updateMessage" class="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
      Actualizar mensaje
    </button>

    <ul class="mt-4 text-sm text-gray-700">
      <li v-for="(log, index) in logs" :key="index">• {{ log }}</li>
    </ul>
  </div>
</main> 


  <Footer>
    <p>Este es el footer</p>
    <!-- Botón con v-on (@click) para alternar visibilidad del header -->
    <button
      @click="showHeader = !showHeader"
      class="mt-4 p-2 bg-blue-500 text-white rounded"
    >
      {{ showHeader ? "Ocultar Header" : "Mostrar Header" }}
    </button>
  </Footer>
</template>

