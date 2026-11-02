
let miArray = [25, 28, 22, 30, 18, 24, 27];

function listarTemp() {
    let lista = document.getElementById("listaTemp");
    lista.innerHTML = "";

    for (let numero of miArray) {
        lista.innerHTML += `<li>${numero}</li>`;
    }
}

function calcularPromedio() {
    let suma = 0;

    for (let numero of miArray) {
        suma = suma + numero;
    }

    let promedio = suma / 7;

    document.getElementById("resultado-promedio").innerHTML = Math.floor(promedio);
}

function temperaturaMasAlta() {
    let mayor = miArray[0];

    for (let numero of miArray) {
        if (numero > mayor) {
            mayor = numero;
        }
    }

    document.getElementById("resultado-alta").innerHTML = mayor;
}

function hayFrio() {
    let frio = false;

    for (let numero of miArray) {
        if (numero < 20) {
            frio = true;
            break;
        }
    }

    if (frio == true) {
        document.getElementById("resultado-frio").innerHTML = "Sí";
    } else {
        document.getElementById("resultado-frio").innerHTML = "No";
    }
}
