<script setup>
import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";
import About from "@/components/views/About.vue";
import Container from "@/components/container/Index.vue";
import { useCounter } from "@/composables/useCounter";
import {
  ref,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import { useTitle } from "@/composables/useTitle";
import  {usePrueba} from "@/composables/usePrueba";


const { title } = useTitle("Home");

usePrueba();

// ✅ variables
const mensaje = ref("Hola mundo");
const logs = ref([]); // ¡Este tiene que estar definido una sola vez!

const name = ref("Andrea");
const description = ref("Web developer and community lead.");
const showHeader = ref(true);

// Estado reactivo
const count = ref(0);
const titulo = ref(null);

// Función para aumentar el contador
const incrementar = () => {
  count.value++;
};

// Hook: se ejecuta después de montar el componente
onMounted(() => {
  console.log("🟢 onMounted: El componente está en el DOM");
  console.log("👉 Texto actual:", titulo.value.textContent);
});

// Hook: justo antes de que Vue actualice el DOM por un cambio reactivo
onBeforeUpdate(() => {
  console.log(
    "🟡 onBeforeUpdate: El DOM todavía muestra:",
    titulo.value.textContent
  );
});

// Hook: después de que Vue actualiza el DOM
onUpdated(() => {
  console.log("🔵 onUpdated: Ahora el DOM dice:", titulo.value.textContent);
});

// Hook: antes de desmontar el componente
onBeforeUnmount(() => {
  console.log("🟠 onBeforeUnmount: El componente está por eliminarse");
});

// Hook: después de desmontar el componente
onUnmounted(() => {
  console.log("🔴 onUnmounted: El componente fue eliminado");
});
</script>

<template>
  <Header v-if="showHeader" :title="name" />

  <main class="min-h-56">
    <About :name="name" :description="description" @updateName="updateName" />

    <div>
      <h2 ref="titulo">Has hecho clic {{ count }} veces</h2>
      <button @click="incrementar">Haz clic</button>
    </div> 
  </main>

  <div class="py-19">
    <button class="p-2 bg-pink-500 text-white rounded">Hello World</button>
  </div>

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
