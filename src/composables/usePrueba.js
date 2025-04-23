import  { onMounted } from "vue";

export function usePrueba() {
    onMounted(() => {
        console.log("El componente esta montado!")
    }
    );
}