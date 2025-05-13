<script setup>
import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";
import About from "@/components/views/About.vue";
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
import { usePrueba } from "@/composables/usePrueba";
import { usePedido } from "@/composables/usePedido";
import { useColor } from "@/composables/useColor";
import { useNombre } from "@/composables/useNombre";
import Modal from "@/components/Modal.vue";
import Form from "@/components/Form.vue";
import Flor from "@/components/Flor.vue";
import Sol from "@/components/Sol.vue";
import { useName } from "@/composables/useName.js";
import Container from "@/components/container/Index.vue";
import CheckboxPersonalizado from './components/CheckboxPersonalizado.vue'

const aceptaTerminos = ref(false)
const mostrarModal = ref(false);
const message = ref("");
const { pedido, actualizarPedido } = usePedido();
const { color } = useColor();
const { title } = useTitle("Home");
const { nombre } = useNombre();
const showFlor = ref(true);
const mostrarSol = ref(true);
const named = ref("Andy");
const tittle = ref("Andrea Blass Website");

usePrueba();

const mensaje = ref("Hola mundo");
const logs = ref([]); //

const name = ref("Andrea");
const description = ref("Web developer and community lead.");
const showHeader = ref(true);

const count = ref(0);
const titulo = ref(null);

// Función para aumentar el contador
const incrementar = () => {
  count.value++;
};

const cambiarColor = () => {
  color.value = color.value === "black" ? "red" : "black";
};
</script>

<template>
  <Header v-if="showHeader" :title="name" />

  <Container>
    <div class="grid gap-4 bg-gray-100 rounded px-4 py-2 mb-4">
      <div>
        <input
          class="border rounded-md px-1.5 py-1 border-gray-400"
          type="text"
          v-model="named"
        />
      </div>
      <div>Nombre: <span v-text="named" /></div>
    </div>

    <div class="grid gap-4 bg-gray-100 rounded px-4 py-2">
      <div>
        <input
          v-model="tittle"
          class="border rounded-md px-1.5 py-1 border-gray-400"
        />
      </div>
      <div>Titulo: <span v-text="tittle" /></div>
    </div>
  </Container>

  <div class="p-4 space-y-4">
    <CheckboxPersonalizado v-model="aceptaTerminos" />
    <p>¿Aceptó? {{ aceptaTerminos ? "Sí" : "No" }}</p>
  </div>

  <main class="min-h-56">
    <About :name="name" :description="description" @updateName="updateName" />

    <div>
      <h2 ref="titulo">Has hecho clic {{ count }} veces</h2>
      <button @click="incrementar">Haz clic</button>
    </div>
  </main>

  <div class="p-4">
    <h1 class="text-xl font-bold">Mi Pedido</h1>
    <p>{{ pedido }}</p>
    <button
      @click="actualizarPedido"
      class="mt-2 px-4 py-2 bg-green-500 text-white rounded"
    >
      Cambiar pedido
    </button>
  </div>

  <div>
    <p :style="{ color }">Este texto cambia de color</p>
    <button
      @click="cambiarColor"
      class="mt-2 px-4 py-2 bg-green-500 text-white rounded"
    >
      Cambiar color
    </button>
  </div>

  <div class="p-8">
    <button
      @click="mostrarModal = true"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Abrir Modal
    </button>
    <Modal v-model="mostrarModal" />
  </div>

  <div>
    <h1>Componente padre Principal</h1>
    <Form v-model="message" />
    <p>Mensaje recibido en componente padre: {{ message }}</p>
  </div>

  <div class="p-10">
    <input
      v-model="nombre"
      class="border p-2 rounded"
      placeholder="Escribe tu nombre"
    />
    <p class="mt-2 p-10">Tu nombre es: {{ nombre }}</p>
  </div>

  <button
    @click="showFlor = !showFlor"
    class="p-2 bg-blue-500 text-white rounded"
  >
    {{ showFlor ? "Ocultar Flor" : "Mostrar Flor" }}
  </button>

  <Flor v-if="showFlor" />

  <button
    @click="mostrarSol = !mostrarSol"
    class="mb-4 p-2 bg-blue-500 text-white rounded"
  >
    {{ mostrarSol ? "Ocultar Sol" : "Mostrar Sol" }}
  </button>

  <Sol v-if="mostrarSol" />

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
