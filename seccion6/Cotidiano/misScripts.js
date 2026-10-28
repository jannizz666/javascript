
let miArray = [7, 4, 8, 9, 6];

function listarNotas() {
    let lista = document.getElementById("listaNotas");
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

    let promedio = suma / 5;

    document.getElementById("resultado-promedio").innerHTML = promedio;
}

function notaMasAlta() {
    let mayor = miArray[0];

    for (let numero of miArray) {
        if (numero > mayor) {
            mayor = numero;
        }
    }

    document.getElementById("resultado-alta").innerHTML = mayor;
}

function hayAplazados() {
    let aplazado = false;

    for (let numero of miArray) {
        if (numero < 4) {
            aplazado = true;
            break; 
        }
    }

    if (aplazado == true) {
        document.getElementById("resultado-aplazados").innerHTML = "Sí";
    } else {
        document.getElementById("resultado-aplazados").innerHTML = "No";
    }
}

