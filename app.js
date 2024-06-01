// números random

// let numRandom = Math.floor(Math.random() * 11)
// console.log(numRandom)

// Condicionales
// if (condición){ expresión}

// let edad = 17

// if (edad >= 18) {
//     console.log("Tienes acceso")
// } else {
//     console.log("Sin acceso, lo siento :)")
// }

// // aplicar descuento a producto
// let precioProducto = 100
// let descuento = 10 // en porcentaje mayor a cero

// if (descuento > 0) {
//     let precioFinal = precioProducto - (precioProducto * descuento) / 100;
//     console.log("El precio final con el descuento es: " + precioFinal)

// } else {
//     console.log("NO tenemos descuentos disponible")
// }


// cajero electronico
/*
    1: retirar
    2: consultar saldo
    3: Salir
*/
// let operacion = 1

// if (operacion === 1) {
//     console.log("Retirar dinero")

// } else if (operacion === 2) {
//     console.log("Su saldo es poco, no llore :(")

// } else if (operacion === 3) {
//     console.log("Gracias, nos vemos prontoooo")

// } else {
//     console.log("Operación no válida")
// }

// ternarios
//{expresion ? "Si es verdadero" : "si es falso que hago"}

// let edad = 18

// {
//     edad >= 18
//         ? (console.log("Tienes acceso"), console.log("other"))
//         : console.log("Sin acceso, lo siento :)")
// }

// cajero electronico
/*
    1: retirar
    2: consultar saldo
    3: Salir
*/

// let operacion = 2

// {
//     operacion === 1 ? console.log("Retirar dinero") :
//         operacion === 2 ? console.log("Su saldo es poco, no llore :(") :
//             operacion === 3 ? console.log("Gracias, nos vemos prontoooo") :
//                 console.log("Operación no válida")
// }

// switch 


// switch (operacion) {
//     case 1:
//         console.log("Retirar dinero");
//         break
//     case 2:
//         console.log("Su saldo es poco, no llore :(")
//         break
//     case 3:
//         console.log("Gracias, nos vemos prontoooo")
//         break
//     default:
//         console.log("Operación no válida")
// }



//funciones


// function suma(/*Insumos (parametros)*/) {
//     // suma dos numeros 
//     //Debe retornar algo
// }


function suma(num1 = 0, num2 = 0) {

    if (typeof num1 == "number" && typeof num1 == "number") {
        let result = num1 + num2
        return result
    } else {
        return "Ingresa unos datos validos";
    }
}

function multi(num1 = 0, num2 = 0) {

    if (typeof num1 == "number" && typeof num1 == "number") {
        let result = num1 * num2
        return result
    } else {
        return "Ingresa unos datos validos";
    }
}

function isPar(num1) {
    if (typeof num1 !== "number") return false;

    return num1 % 2 == 0

}

// anonima
const isParTwo = function (num1) {
    if (typeof num1 !== "number") return false;
    return num1 % 2 == 0
}

// console.log(isParTwo(52))

// ejecutar una función

// function resta(num1, num2) {
//     return num1 - num2
// }

//funciones flecha
// const resta = (num1, num2) => {
//     return num1 - num2
// }

const resta = (num1, num2) => num1 - num2


// console.log(suma(resta(15, 35), multi(suma(10, 15), resta(25, 5))))

// let numRandom = Math.floor(Math.random() * 4) + 1 // 1 - 5 
// console.log(numRandom)

//loops - bucles

for (let num = 0; num < 10; num++) {
    console.log(num)
}

