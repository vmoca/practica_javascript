import readline from "readline";
import { showMenu, optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix, optionSeven, optionEight, optionNine, optionTen, optionEleven, optionTwelve, optionThirteen, optionFourteen, optionFifteen } from "./functions.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isInt = (str) => {
    const integer = parseInt(str);
    if (Number.isNaN(integer)) {
      return false;
    } else {
      return true;
    }
};

showMenu();

// productor
function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => {
      rl.question("Introduce el número: ", (num) => {
        rl.pause();
        if (isInt(num)) {
          num = Number.parseInt(num);
          resolve(num);
        } else {
          reject("Has de introducir un número del 1 al 15");
        }
      });
    });
  
    return promise;
}

// consumidor
async function executeApplication() {
    let numberFromConsole;
  
    do {
      try {
        numberFromConsole = await getNumberFromConsole();
      } catch (error) {
        console.log(error);
        process.exit(0);
      }
      
      switch(numberFromConsole) {
        case 1:
            optionOne();
            break;
        case 2:
            optionTwo();
            break;
        case 3:
            optionThree();
            break;
        case 4:
            optionFour();
            break;
        case 5:
            optionFive();
            break;
        case 6:
            optionSix();
            break;
        case 7:
            optionSeven();
            break;
        case 8:
            optionEight();
            break;
        case 9:
            optionNine();
            break;
        case 10:
            optionTen();
            break;
        case 11:
            optionEleven();
            break;
        case 12:
            optionTwelve();
            break;
        case 13:
            optionThirteen();
            break;
        case 14:
            optionFourteen();
            break;
        case 15:
            optionFifteen();
            break;
        default:
            console.log('Has introducido una opción incorrecta. Debes introducir un número del 1 al 15');
            break;
      }
  
    } while (numberFromConsole >= 1 && numberFromConsole <= 15); // condiciones para continuar ejecutando
  }
  
  executeApplication();