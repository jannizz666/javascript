function calcular() {
    let elementoRespuesta1 = document.getElementById("respuesta1");
    let elementoRespuesta2 = document.getElementById("respuesta2");
    let elementoRespuesta3 = document.getElementById("respuesta3");

    let elementoEdad =document.getElementById("textoEdad");
    let edad = elementoEdad.value;

    let puedeBeber = edad >= 18;
    elementoRespuesta1.textContent = puedeBeber;

    let puedeIngresar = edad >= 18 && edad <= 30;
    elementoRespuesta2.textContent = puedeIngresar;

    let entradaGratis = edad == 20 || edad == 25;
    elementoRespuesta3.textContent = entradaGratis;
}

function comparar() {
    let elementoNumero1 = Number(document.getElementById("numero1").value);
    let elementoNumero2 = Number(document.getElementById("numero2").value);

    let elementoRespuesta = document.getElementById("resultado");

    let respuesta = elementoNumero1 > elementoNumero2;
    elementoRespuesta.textContent = respuesta;

}