import { ref, onMounted, onUnmounted } from "vue";

export function useFlor() {
  const flor = ref();

  onMounted(() => {
    console.log("🌸 La flor está viva");
  });

  onUnmounted(() => {
    console.log("🥀 La flor está muerta");
  });

  return {
    flor,
  };
}
