import {diDesdeMisc} from "./MiscService";
import {ordenarArrPorKey} from "./SortService";

//export const diMisc = diDesdeMisc;
export {diDesdeMisc, ordenarArrPorKey};

export const diAlgo = () => console.log("Aqui digo algo");

export const cuadrado = numero => console.log(`El cuadrado de ${numero} es ${parseInt(numero) * parseInt(numero)}`);

export class Operaciones {
    suna = (a, b) => console.log(a + b);
};

