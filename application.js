/*
****************************************
ESPECIFICACIONES PARA LA APLICACIÓN:
****************************************
Necesitamos desarrollar una aplicación hecha con javascript que nos ayude a gestionar los alumnos de nuestra clase.
Cada requisito tiene un número asignado. Cuando ejecutemos la aplicación, aparecerá el listado completo de requisitos. El usuario debe pulsar el número correspondiente a ese requisito para que se ejecute. Una vez la ejecución termine, volveremos a mostrar el listado de requisitos para que el usuario pueda seleccionar otro. En caso de que el usuario pulse el 0 o un número no contemplado, la aplicación terminará.
*/

/*
***********
TO DO:
***********
- Crear array con el listado de requisitos y mostrarlo por consola en formato tabla.
- Crear switch con todos los casos contemplados (del 1 al 15) y sus breaks.
- Pedir por consola al usuario que introduzca el número del requisito a ejecutar.
- Crear Función Opción 1 - Muestra por consola en formato de tabla el array de los alumnos, con todos los alumnos. 
- Crear Función Opción 2 - Suma de el número de alumnos, total de elemntos del array.
- Crear Función Opción 3 - Muestra por consola el atributo nombre de todos los elementos del array de alumnos.
- Crear Función Opción 4 - Elimina el último alumno del array de alumnos (pop)
- Crear Función Opción 5 - Elimina un alumno aleatoriamente de la clase:
    - Generar un número aleatorio entre el min length y el max length del array.
    - Eliminarlo con splice ??. 
- Crear Función Opción 6 - Muestra por consola todos los datos de los alumnos que son chicas. 
    - Seleccionar elementos de array que tengan "gender" female y mostrar todos sus datos. 
- Crear Función Opción 7 - Muestra por consola el Nº total de chicos y el Nº total de chicas.
- Crear Función Opción 8 - Muestra por consola "TRUE" o "FALSE" si todos los alumnos de la clase son chicas.
    - Comprobar si el atributo "gender" de todos los elementos del array es female, si es así devuelvo TRUE, si no, devuelve FALSE.
- Crear Función Opción 9 - Muestra por consola los nombres de los alumnos que tengan entre 20 y 25 años. 
    - Seleccionar los elementos del array cuyo atributo "age" esté entre 20 y 25 años, ambos inclusive.
- Crear Función Opción 10 - Añade al array de alumnos un nuevo alumno con los siguientes datos: 
    *- nombre aleatorio.
    *- edad aleatoria entre 20 y 50 años.
    *- género aleatorio.
    *- listado de calificaciones vacío.
    
    El nombre y el genero tiene que ir acorde / Cómo?  --  ¿¿??
- Crear Función Opción 11 - Muestra por consola el nombre del alumno más joven de clase. Si varias personas comparten edad más baja, cualquiera de ellos vale.
    - Selecciona el elemento del array de alumnos cuyo atributo "age" sea menor.
- Crear Función Opción 12 - Muestra por consola la edad media de todos los alumnos de clase.
    - Sacar la media del atributo age de todos los elementos del array y mostrar por consola. 
- Crear Función Opción 13 - Muestra por consola la edad media de las chicas de la clase. 
    - Sacar media de el atrubuto age de aquellos elementos del array cuyo atributo gender sea === female. Mostrarlo por consola. 
- Crear Función Opción 14 - Añade una nueva nota a los alumnos. Por cada alumno de clase. Para ello:
    - Calcular nota aleatoria entre 0 y 10.
    - Añadirla al listado de notas de cada alumno. 
- Crear Función Opción 15 - Ordena el array de alumnos alfabeticamente, según su atributo "name".
*/

import readline from "readline";

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// declaramos el array de alumnos con el que partimos inicialmente.
const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
},
{
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
}];

// declaramos arrays de nombres y generos que nos servirá para crear nuevos alumnos 
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];