<script setup>
import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";
import About from "@/components/views/About.vue";
import Container from "@/components/container/Index.vue";
import { useCounter } from "@/composables/useCounter";
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';
import { useTitle } from '@/composables/useTitle'

const { title } = useTitle('Home');

// ✅ variables
const mensaje = ref('Hola mundo');
const logs = ref([]); // ¡Este tiene que estar definido una sola vez!

const name = ref("Andrea");
const description = ref("Web developer and community lead.");
const showHeader = ref(true);
const { count, increment, decrement } = useCounter();

// ✅ funciones
const updateName = (newName) => {
  name.value = newName;
};

const updateMessage = () => {
  mensaje.value += ' 👋';
  logs.value.push('✏️ updateMessage: mensaje actualizado');
};

// ✅ ciclo de vida
onMounted(() => {
  console.log('✅ onMounted: El componente fue montado');
});

onUpdated(() => {
  console.log('🔄 onUpdated: El componente fue actualizado');
});


onUnmounted(() => {
  console.log('❌ Componente destruido');
});
</script>

<template>
  <Header v-if="showHeader" :title="name" />

  <main class="min-h-56">
    <About :name="name" :description="description" @updateName="updateName" />

    <div class="py-19">
      <button class="p-2 bg-pink-500 text-white rounded">Hello World</button>
    </div>

    <div>
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>

    <!-- ✅ Zona de ciclo de vida -->
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
    <button
      @click="showHeader = !showHeader"
      class="mt-4 p-2 bg-blue-500 text-white rounded"
    >
      {{ showHeader ? "Ocultar Header" : "Mostrar Header" }}
    </button>
  </Footer>
</template>
