// let cosas = ["Nombre", "Apellido", "25", ["hola"], { name: "Juanito" }] // usando corchetes


// let str = "externocleidomastoideo"
// // str = str.split("")
// console.log(str[5].toUpperCase().repeat(3))

// let lista = ["d", "e", "i", "m", "i", "a"] // --> d,a -->items 

// let lastNum = lista.length - 1



// console.log(lastNum)
// console.log(lista[lastNum])
// let humans = [

// ]

// let result = [
//     [0, 0, 0],
//     [2, 2, 2],
//     [0, 0, 1]
// ]

// console.log(result[0][1])


let names = ["Apple", "Orange", "Donkey", "Daniel", "Juanito", "donkey", "Carlos", "Apple", "Orange", "Donkey", "Daniel", "Juanito", "Donkey", "Carlos"]; // Lista vacia
names[0] = "Manzana"
names[names.length - 1] = "Ultima"
let respuesta = names.push("Hola ¿qué tal?")
names.push("hola")
names.pop()
names.shift()
names.unshift("Hola soy el inicio")

//FOR - NORMAL
//for  --> for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

// console.log(names[0])

// for (let index = 0; index < names.length; index++) {
//     console.log(`Hola ¿qué tal? ${names[index]}`)
// }

// for (let index = 1; index < 10; index++) {//1, 2
//     for (let num = 1; num < 10; num++) { //1, 2, 3 .., 1,2,3...
//         console.log(`${index} * ${num} = ${index * num}`)
//     }
// }

//FOR IN
//for(item(iterando) in array 0 objeto) ---> recomiendo usarse con objetos
// for (let name in names) {
//     console.log(`Hola ¿qué tal? ${names[name]}`)
// }

/*
let variable = {
    llave(key):value(propertie)
    nombre:"Vásquez"
}
*/
let humanoOne = {
    nombre: "deimian",
    apellido: "Vásquez",
    edad: 18
}

humanoOne.mascota = ["perro"]

let humanoTwo = {
    nombre: "Martin",
    apellido: "Coimbra",
    edad: 19
}

// for (person in humanoOne) {
//     console.log(`${person} : ${humanoOne[person]}`)
// }


// FOR OF --> recorrer arrays
// for(item(iterando) of array) --> trae el iten o valor

// for (let name of names) {
//     console.log(`Hola ¿qué tal? ${name}`)
// }


// JSX --> expresiones

//FOREACH

// con function anonima
// names.forEach(function (name) {
//     return (
//         console.log(`Hola ¿qué tal? ${name}`)
//     )
// })


// arrow function
// names.forEach((_, index) => console.log(`Hola ¿qué tal? ${index}`))


// LOOP MAP
let result = names.map((name) => (`Hola ¿qué tal? ${name}`))
// console.log(result)

// LOOP FILTER

let resultFilter = names.filter((item, index, arr) => (item.toLowerCase().includes("do")))
names = resultFilter
console.log(resultFilter)