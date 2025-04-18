import { onMounted, ref } from "vue";
 
export function useTitle(text) {
    const title = ref(`${text} | Website`)

    onMounted(() => {
        document.title =title.value;
    })

    return {
        title,
    }
}