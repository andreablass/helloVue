<script setup>
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
import CheckboxPersonalizado from "@/components/CheckboxPersonalizado.vue";
import Modal2 from "@/components/Modal2.vue";
import Modal3 from "@/components/Modal3.vue";
import Modal4 from "@/components/Modal4.vue";
import Modal5 from "@/components/Modal5.vue";
import Modal7 from "@/components/Modal7.vue";
import Modal8 from "@/components/Modal8.vue";

const mostrarModal2 = ref(false);
const cerrarModal = () => {
  mostrarModal2.value = false;
};
const mostrarModal3 = ref(false);
const mostrarModal4 = ref(false);
const mostrarModal5 = ref(false);

const open = ref(false); // Puedes eliminar si no usas
const openModal7 = ref(false);
const openModal8 = ref(false);

const aceptaTerminos = ref(false);
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
const props = defineProps(['message'])
const emit = defineEmits(['enviar'])
</script>

<template>
<div>HomePage</div>
  <Container>
    <div class="bg-gray-100 rounded px-4 py-2 my-4">
      <RouterLink :to="{ name: 'my-profile' }"> Mi perfil </RouterLink>
      <RouterLink :to="{ name: 'profile', params: { username: 'andy' } }"> Perfil </RouterLink>
    </div>
  </Container>

  <Container>
    <div class="bg-gray-100 rounded px-4 py-2 my-4">
      <!-- Botones separados para abrir cada modal -->
      <button
        class="bg-gray-200 text-gray-800 px-2 py-1 rounded border-gray-300 mr-2"
        @click="openModal7 = true"
      >
        Open Modal 7
      </button>
      <button
        class="bg-gray-200 text-gray-800 px-2 py-1 rounded border-gray-300"
        @click="openModal8 = true"
      >
        Open Modal 8
      </button>

      <Modal7 v-model="openModal7">
        <template #title> Este es el titulo </template>

        <div class="grid gap-4">
          <p>
            Vue offers two built-in components that can help work with
            transitions and animations in response to changing state:
          </p>
          <p>
            for applying animations when an element or component is entering and
            leaving the DOM. This is covered
          </p>
          <p>on this page.</p>
        </div>
        <template #buttons>
          <Button @click="openModal7 = false"> Close </Button>
        </template>
      </Modal7>

      <Modal8 v-model="openModal8">
        <template #title> Modal 8 tutulo </template>

        <div class="grid gap-4">
          <p>
            Vue offers two built-in components that can help work with
            transitions and animations in response to changing state:
          </p>
          <p>
            for applying animations when an element or component is entering and
            leaving the DOM. This is covered
          </p>
          <p>on this page.</p>
        </div>

        <template #buttons>
          <Button @click="openModal8 = false"> Close </Button>
        </template>
      </Modal8>
    </div>
  </Container>

  <!-- Modal2 forma 1 -->
  <button
    v-on:click="mostrarModal2 = true"
    class="p-2 bg-blue-500 text-white rounded"
  >
    Abrir Modal 2
  </button>

  <Modal2 v-bind:visible="mostrarModal2" v-on:cerrar="cerrarModal" />

  <!-- Modal3 forma 2 -->
  <button
    @click="mostrarModal3 = true"
    class="p-2 bg-pink-500 text-white rounded"
  >
    Abrir Modal 3
  </button>
  <!-- Aquí ya se usa v-model directamente -->
  <Modal3
    :modelValue="mostrarModal3"
    @update:modelValue="mostrarModal3 = $event"
  />

  <!-- Modal4 forma 3 -->
  <button
    @click="mostrarModal4 = true"
    class="p-2 bg-green-500 text-white rounded"
  >
    Abrir Modal 4
  </button>
  <Modal4 v-model:visible="mostrarModal4" />

  <!--Modal5 forma 4-->
  <button @click="mostrarModal5 = true">Abrir Modal 5</button>

  <Modal5 v-model="mostrarModal5" />

    <About :name="name" :description="description" @updateName="updateName" />

    <div>
      <h2 ref="titulo">Has hecho clic {{ count }} veces</h2>
      <button @click="incrementar">Haz clic</button>
    </div>

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
      Abrir Modal general
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
</template>
