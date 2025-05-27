<script setup>
const visible = defineModel()
</script>

<template>
  <Transition name="fade">
    <div v-if="visible">
      <!-- Fondo -->
      <div
        class="bg-gray-950/50 fixed inset-0 backdrop-blur-xs"
        @click="visible = false"
      ></div>

      <!-- Contenedor del modal -->
      <div
        class="absolute w-4/5 md:w-1/2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
               bg-white rounded p-4 grid gap-4"
      >
        <!-- Header -->
        <header v-if="$slots.title" class="text-xl font-bold text-center">
          <slot name="title" />
        </header>

        <!-- Contenido principal -->
        <main>
          <slot />
        </main>

        <!-- Footer / Botones -->
        <footer v-if="$slots.buttons" class="flex justify-end gap-4">
          <slot name="buttons" />
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
