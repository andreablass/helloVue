import { ref,onBeforeUpdate, onUpdated } from "vue";

export function  useColor() {
    const  color = ref('black');

    onBeforeUpdate(()  =>{
        console.log("Antes de actualizar color");
        
    })

    onUpdated(() => {
        console.log("Color actualizado");
    })

    return {
        color
    };

}

