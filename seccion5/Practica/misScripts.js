function recomendar() {
    var presupuesto = document.getElementById("presupuesto").value;
    var personas = document.getElementById("personas").value;

    var actividad = document.getElementById("actividad").value

    let recomendacion = document.getElementById("resultado");
    let descuento = document.getElementById("total");

    if (presupuesto <= 0 || personas <= 0 ||
            personas % 1 != 0 || actividad == "") {
            document.getElementById("resultado").innerHTML =
                "Ingrese todos los datos correctamente.";
            return;
        }

    let total = 0;


        if (personas >= 5 && personas <= 8) {
            descuento = 10;
        } else if (personas >= 9) {
            descuento = 15;
        }
        else {
            descuento = 0
        }

        var monto = presupuesto * descuento / 100;
        var final = presupuesto - monto;

        let mensaje =  "Cantidad de personas: \n" +  personas +
            "Descuento grupal: "+ "<br>" + descuento +
            "Monto del descuento: ₡" + monto +
            "Presupuesto final: ₡" + final;

        document.getElementById("total").textContent= mensaje




    switch (actividad){
        case "deportes":
            if (presupuesto < 8000){
                recomendacion.textContent = "Caminata recreativa"
            }
            else if (presupuesto <= 15000)
                recomendacion.textContent = "Alquiler de Cancha"
            else {
                recomendacion.textContent = "Actividad deportiva especializada"
            }
        break;

        case "entretenimiento":
            if (presupuesto < 8000){
                recomendacion.textContent = "Actividad económica"
            }
            else if (presupuesto <= 15000)
                recomendacion.textContent = "Entrada al cine"
            else {
                recomendacion.textContent = "Concierto o espectáculo"
            }
        break;

        case "turismo":
            if (presupuesto < 8000){
                recomendacion.textContent = "Visita a parque público"
            }
            else if (presupuesto <= 15000)
                recomendacion.textContent = "Tour local"
            else {
                recomendacion.textContent = "Excursión de día completo"
            }
        break;

                case "familiares":
            if (presupuesto < 8000){
                recomendacion.textContent = "Picnic familiar"
            }
            else if (presupuesto <= 15000)
                recomendacion.textContent = "Salida recreativa"
            else {
                recomendacion.textContent = "Parque temático o actividad especial"
            }
        break;
    }
}

function reiniciar() {
    document.getElementById("presupuesto").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("actividad").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    }
