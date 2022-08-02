// Creamos un pequeño registro para un sorteo y devolveremos los valores de los mismos


const main = document.getElementById("main");

let nombre = "";
let apellido = "";
let edad = 0;
let dni = 0;
let sorteo = 0;

const arrayDatos = [];


// Recolectar datos
function Datos(){

    alert(`Bienvenido, complete los datos para participar del sorteo`)
    nombre = prompt("Ingrese su nombre: ").toUpperCase();
    arrayDatos.push(nombre);
    apellido = prompt("Ingrese su apellido: ").toUpperCase();
    arrayDatos.push(apellido);
    edad = parseInt(prompt("Ingrese su edad: ").toUpperCase());
    arrayDatos.push(edad);
    dni = parseInt(prompt("Ingrese los ultimos 3 numeros de su DNI: ").toUpperCase());
    arrayDatos.push(dni);
}

// Generar numero aleatorio para sorteo
function numSorteo(min, max) {
    sorteo = Math.round(Math.random() * (max - min) + min);
    arrayDatos.push(sorteo);
    // alert(`Tu Numero de sorteo es: ${sorteo}`)
    return sorteo;
}

// Mostrar datos en el HTML
function mostrarDatos(){
    let div = document.createElement("div");
    div.innerHTML =  
        `
        <marquee direction="right" scrollamount="10"><h1>Datos de Sorteo:</h1></marquee>
        <p><b>Nombre:</b> ${nombre} </p>
        <p><b>apellido:</b> ${apellido} </p>
        <p><b>Edad:</b> ${edad} </p>
        <p><b>DNI:</b> ${dni} </p>
        <p><b>Numero de Sorteo:</b> ${sorteo} </p>
        `
    main.appendChild(div)
}


// Ejecucion de Funciones
Datos();
numSorteo(00, 99);
mostrarDatos();













