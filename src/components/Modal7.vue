<script setup>
const visible = defineModel()
</script>

<template>
  <Transition
    enter-active-class="ease-in-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in-out duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="visible" class="absolute inset-0">
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
