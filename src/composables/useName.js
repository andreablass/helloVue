import { onMounted } from "vue";

export function useName () {
    const name = ref (andy);

    onMounted (() => {
        console.log("Se ha montado");
    });
}