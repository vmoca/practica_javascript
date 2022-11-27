import { students, availableMaleNames, availableFemaleNames, availableGenders } from "./utilities.js";

function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// Genera nuevos estudiantes de forma aleatoria
function generateRandomStudent() {
    const newStudent = {
        age: 0,
        name: '',
        gender: '',
        examScores: []
    }

    const randomGender = calculateRandomNumber(0, 1);
    if (randomGender === 0) {
        newStudent.name = availableMaleNames[calculateRandomNumber(0, availableMaleNames.length -1)];
    } else {
        newStudent.name = availableFemaleNames[calculateRandomNumber(0, availableFemaleNames.length -1)];
    }

    newStudent.age = calculateRandomNumber(20, 25);
    newStudent.gender = availableGenders[randomGender];

    return newStudent;
}

// Saca la persona de menor edad
function getYoungestAge(studentList) {
    return studentList.reduce((min, student) => {
        if (student.age <= min.age) {
            return student;
        } else {
            return min;
        }
    });
 }

 // opciones del menú
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
    },
    {
        option: "16",
        functionality: "Mostrar por consola el alumno de la clase con las mejores notas"
    },
    {
        option: "17",
        functionality: "Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece"
    }];

    console.table(menu);
}

// Muestra en formato tabla todos los alumnos de la clase
export function optionOne() {
    console.table(students);
}

// Muestra la cantidad de alumnos en la clase
export function optionTwo() {
    console.log(`Hay un total de ${students.length} alumnos en clase`);
}

// Muestra por consola todos los nombres de los alumnos
export function optionThree() {
    let names = []

    students.forEach((e) => {
        names.push(e.name)
    } )
    console.log('Los nombres de los alumnos de la clase son:', names.join(', '))
}

// Elimina el último alumno de la clase
export function optionFour() {
    students.pop();
    console.log('Se ha eliminado el último alumno de la clase. \nEstos son los alumnos actuales:');
    console.table(students);
}

// Elimina un alumno aleatoriamente de la clase
export function optionFive() {
    const MIN = 0;
    const MAX = students.length;

    const randomStudent = calculateRandomNumber(MIN, MAX);
    students.splice(randomStudent,1);
    console.log('Un alumno ha sido eliminado de la clase aleatoriamente. \nEstos son los alumnos actuales:');
    console.table(students);
}

// Muestra por consola todos los datos de los alumnos que son chicas
export function optionSix() {
    const femaleStudents = students.filter((filteredFemale) => {
        return filteredFemale.gender === 'female'
    });

    console.table(femaleStudents);
}

// Muestra por consola el número de chicos y chicas que hay en la clase
export function optionSeven() {
    const femaleStudents = students.filter((filteredFemale) => {
        return filteredFemale.gender === 'female'
    });

    const maleStudents = students.filter((filteredMale) => {
        return filteredMale.gender === 'male'
    });

    console.log('Estos son los alumnos que hay en clase. \nChicos:', maleStudents.length, '\nChicas:', femaleStudents.length);
}

// Muestra true o false por consola si todos los alumnos de la clase son chicas
export function optionEight() {
    const maleStudents = students.some(student => student.gender === 'male');
    console.log(!maleStudents);
}

// Muestra por consola los nombres de aquellos alumnos que tengan entre 20 y 25 años
export function optionNine() {
    const ageRange = students.filter((filterStudent) => {
        return filterStudent.age >= 20 && filterStudent.age <= 25;
    });

    console.log('Los alumnos que tienen entre 20 y 25 años son: ')

    ageRange.forEach((item) => {
        console.log(item.name)
    });
}

// Añade un nuevo alumno con: NOMBRE ALEATORIO, EDAD ENTRE 20 y 25 años, GENERO ALEATORIO, CALIFICACIONES VACÍAS.
export function optionTen() {
    const newStudent = generateRandomStudent();
    students.push(newStudent);
    console.log('Se ha añadido un nuevo alumno a la clase. Estos son sus datos:')
    console.table(newStudent);
}

// Muestra por consola el nombre de la persona más joven de la clase
export function optionEleven() {
    const youngest = getYoungestAge(students) 
    console.log('La persona más joven de la clase es:', youngest.name);
}

// Muestra por consola la edad media de todos los alumnos de la clase
export function optionTwelve() {
    const averageAge = students.reduce((sum, student) => sum + student.age, 0) / students.length;
    console.log('La edad media de los alumnos de la clase es:', averageAge);
}

// Muestra por consola la edad media de las chicas de la clase
export function optionThirteen() {
    const studentsGirls = students.filter((filterStudent) => {
        return filterStudent.gender === 'female';
    });

    const girlsAverageAge = studentsGirls.reduce((sum, student) => sum + student.age, 0) / studentsGirls.length;
    console.log('La edad media de las chicas de la clase es:', girlsAverageAge);
}

// Añade una nueva nota a los alumnos de la clase, dicha nota ha de ser calculada de forma aleatoria (número entre 0 y 10)
export function optionFourteen() {
    const MIN = 0;
    const MAX = 10;

    students.forEach((student) => {
        const randomScore = calculateRandomNumber(MIN, MAX);
        student.examScores.push(randomScore);
    });

    console.log('Se ha añadido una nueva nota a cada alumno');
    console.table(students);
}

// Ordena el array de alumnos alfabéticamente según su nombre
export function optionFifteen() {
    students.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      
        // para nombres que deben ser iguales
        return 0;
      });

    console.table(students);
}

// Muestra por consola el alumno de la clase con las mejores notas
export function optionSixteen() {
    const bestStudent = students.map(student => ({
            ...student,
            averageScores: student.examScores.reduce((a, b) => a + b, 0) / student.examScores.length,
        }))
        .sort((a, b) => a.averageScores - b.averageScores)
        .pop();

        console.log('Este es el alumno con las mejores notas de clase:')
        console.table(bestStudent);
}

// Muestra por consola la nota media más alta de la clase y el nombre del alumno al que pertenece
export function optionSeventeen() {
    const bestStudent = students.map(student => ({
        ...student,
        averageScores: student.examScores.reduce((a, b) => a + b, 0) / student.examScores.length,
    }))
    .sort((a, b) => a.averageScores - b.averageScores)
    .pop();

    console.log(bestStudent.name, 'es el alumno con la nota media más alta de la clase. \nSu nota media es:', bestStudent.averageScores)
}