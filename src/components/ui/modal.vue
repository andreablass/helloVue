<script setup>
import { computed } from 'vue'
import { useCounterStore } from "@/stores/counter"
import { useModalStore } from "@/stores/modal"

const modal = useModalStore()
const isOpen = computed(() => modal.isOpen)

const counter = useCounterStore()
</script>


<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button
          @click="modal.close"
          class="absolute top-3 right-3 text-gray-400 hover:text-black"
        >
          ✕
        </button>
        <slot />
      </div>
    </div>
  </Teleport>

  <Container>
    <h2>Contador: {{ counter.count }}</h2>
    <p>Doble: {{ counter.doubleCount }}</p>

    <button @click="counter.increment">+1</button>
    <button @click="counter.reset">Reiniciar</button>
  </Container>
</template>
