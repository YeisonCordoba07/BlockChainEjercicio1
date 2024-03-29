export async function calcularSHA256(mensaje) {

  // Convertir el mensaje a un ArrayBuffer
  const mensajeBuffer = new TextEncoder().encode(mensaje);

  // Calcular el hash SHA-256 del mensaje
  const hashBuffer = await crypto.subtle.digest("SHA-256", mensajeBuffer);

  // Convertir el ArrayBuffer a una representación hexadecimal
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  console.log("Haash SHA-256:", hashHex);
  return hashHex;

}
