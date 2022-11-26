import { students, availableMaleNames, availableFemaleNames, availableGenders } from "./utilities.js";

export function showMenu() {
    const menu = [{
        option: "1",
        functionality: "Mostrar en formato de tabla todos los alumnos"
    },
    {
        option: "2",
        functionality: "Mostrar por consola la cantidad de alumnos que hay en clase"
    },
    {
        option: "3",
        functionality: "Mostrar por consola todos los nombres de los alumnos"
    },
    {
        option: "4",
        functionality: "Eliminar el último alumno de la clase"
    },
    {
        option: "5",
        functionality: "Eliminar un alumno aleatoriamente de la clase"
    },
    {
        option: "6",
        functionality: "Mostrar por consola todos los datos de los alumnos que son chicas"
    },
    {
        option: "7",
        functionality: "Mostrar por consola el número de chicos y chicas que hay en la clase"
    },
    {
        option: "8",
        functionality: "Mostrar true o false por consola si todos los alumnos de la clase son chicas"
    },
    {
        option: "9",
        functionality: "Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años"
    },
    {
        option: "10",
        functionality: "Añadir un alumno nuevo con los siguientes datos: *Nombre aleatorio. *Edad aleatoria entre 20 y 50 años. *Género aleatorio. *Listado de calificaciones vacío."
    },
    {
        option: "11",
        functionality: "Mostrar por consola el nombre de la persona más joven de la clase"
    },
    {
        option: "12",
        functionality: "Mostrar por consola la edad media de todos los alumnos de la clase"
    },
    {
        option: "13",
        functionality: "Mostrar por consola la edad media de las chicas de la clase"
    },
    {
        option: "14",
        functionality: "Añadir nueva nota a los alumnos"
    },
    {
        option: "15",
        functionality: "Ordenar el array de alumnos alfabéticamente según su nombre"
    }];

    console.table(menu);
}

export function optionOne() {
    console.log('Has seleccionado la opción 1');
}

export function optionTwo() {
    console.log('Has seleccionado la opción 2');
}

export function optionThree() {
    console.log('Has seleccionado la opción 3');
}

export function optionFour() {
    console.log('Has seleccionado la opción 4');
}

export function optionFive() {
    console.log('Has seleccionado la opción 5');
}

export function optionSix() {
    console.log('Has seleccionado la opción 6');
}

export function optionSeven() {
    console.log('Has seleccionado la opción 7');
}

export function optionEight() {
    console.log('Has seleccionado la opción 8');
}

export function optionNine() {
    console.log('Has seleccionado la opción 9');
}

export function optionTen() {
    console.log('Has seleccionado la opción 10');
}

export function optionEleven() {
    console.log('Has seleccionado la opción 11');
}

export function optionTwelve() {
    console.log('Has seleccionado la opción 12');
}

export function optionThirteen() {
    console.log('Has seleccionado la opción 13');
}

export function optionFourteen() {
    console.log('Has seleccionado la opción 14');
}

export function optionFifteen() {
    console.log('Has seleccionado la opción 15');
}