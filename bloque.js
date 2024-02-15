class Boque {

    constructor(bloque, nonce, datos, hashAnterior, hash) {
        this.bloque = bloque;
        this.nonce = nonce;
        this.datos = datos;
        this.hashAnterior = hashAnterior;
        //this.hash = generarHash();
    }

    crearHash() {
        let nuevoHash = calcularSHA256(this.bloque, this.nonce, this.datos, this.hashAnterior);

        this.hash = nuevoHash;
    }

}