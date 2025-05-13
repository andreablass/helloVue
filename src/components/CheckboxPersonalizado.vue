<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <div
      @click="toggle"
      class="w-5 h-5 border rounded cursor-pointer flex items-center justify-center"
      :class="{ 'bg-green-500': modelValue }"
    >
      <span v-if="modelValue" class="text-white text-sm">✔</span>
    </div>
    <span @click="toggle" class="cursor-pointer">Aceptar términos</span>
  </div>
</template>

<!-- <script setup>
const checked = defineModel() // usa 'modelValue' por defecto
</script>

<template>
  <label class="flex items-center gap-2">
    <input
      type="checkbox"
      v-model="checked"
    />
    Acepto los términos
  </label>
</template>
-->