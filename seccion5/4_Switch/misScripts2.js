function evaluarParametro(){
    let elementoRespuesta = document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch (fruta)
    {
        case "Manzana":
            elementoRespuesta.textContent = alert("El precio de la fruta es $15");
            break;
        case "Naranja":
            elementoRespuesta.textContent = alert("El precio de la fruta es $20");
            break;
        case "Banana":
            elementoRespuesta.textContent = alert("El precio de la fruta es $25");
            break;
    }
}