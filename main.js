import { calcularSHA256 } from './sha256.js';
import bloque from "./bloque.js";


const bloque1 = new bloque(1, 0, "", "", "");
const bloque2 = new bloque(2, 0, "", "", "");
const bloque3 = new bloque(3, 0, "", "", "");
const bloque4 = new bloque(4, 0, "", "", "");
const bloque5 = new bloque(5, 0, "", "", "");
const bloque6 = new bloque(6, 0, "", "", "");

// Ejemplo de uso
const mensaje = "hola";
const hash = await calcularSHA256(mensaje);
console.log(hash)




