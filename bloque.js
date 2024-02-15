class Boque {

    constructor(bloque, nonce, datos, hashAnterior, hash) {
        this.bloque = bloque;
        this.nonce = nonce;
        this.datos = datos;
        this.hashAnterior = hashAnterior;
        //this.hash = generarHash();
    }

    crearHash() {
        let nuevoHash = calcularSHA256(this.bloque.toString() + this.nonce.toString() + 
        this.datos + this.hashAnterior);

        this.hash = nuevoHash;
    }

    //-------------------------------------------
    set setBloque(nuevoBloque){
        this.bloque = nuevoBloque.toString();
        crearHash();
    }

    set setNonce(nuevoBNonce){
        this.nonce = nuevoNonce.toString();
        crearHash();
    }

    set setDatos(nuevosDatos){
        this.datos = nuevosDatos;
        crearHash();
    }
    set setHashAnterior(nuevoHashAnterior){
        this.bloque = nuevoHashAnterior;
        crearHash();
    }

    //-------------------------------------------
    get getBloque() {
        return this.bloque;
    }

    get getNonce() {
        return this.nonce;
    }

    get getDatos() {
        return this.datos;
    }

    get getHashAnterior() {
        return this.hashAnterior;
    }

    get getHash() {
        return this.hash;
    }

    

}