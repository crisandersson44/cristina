




//Declaración de constantes para los punteros

const primero = document.getElementById("primero"); // Puntero para el primer número introducido
const segundo = document.getElementById("segundo"); //    "     "    " segundo  "       "
const tercero = document.getElementById("tercero"); //    "     "    " tercer   "       "

const menor = document.getElementById("menor"); // Puntero para el menor número introducido en orden
const medio = document.getElementById("medio"); //    "     "   "  medio   "       "        "    "
const mayor = document.getElementById("mayor"); //    "     "   "  medio   "       "        "    "

//Pedir de introducir tu nombre

let nombre = prompt('Introduce tu nombre')
alert('Gracias, pulsa en aceptar.')
let element = document.getElementById("nombre");
element.innerHTML =`${nombre}, has introducido estos 3 números`;

//Declaración de las variables "num" 
// El parseInt lo que hace es que, si no pongo un número me sale NaN
let num1 = Number.parseInt(prompt('introduce un Número')); 
let num2 = Number.parseInt(prompt('introduce un segundo Número'));
let num3 = Number.parseInt(prompt('introduce un tercer Número'));

console.log(`${num1},${num2},${num3}`);

if (Number.isNaN(num1) === true || Number.isNaN(num2) === true || Number.isNaN(num3) === true) {
    alert("Te he dicho un Número, te doy otra oportunidad");
    num1 = Number,parseInt(prompt('Introduce un Número'));
    num2 = Number,parseInt(prompt('Introduce un segundo Número'));
    num3 = Number,parseInt(prompt('Introduce un tercer Número'));
    /* num3 = Math.round(Math.random()*100); *///Crearia un número aleatorio
} 

if (Number.isNaN(num1) === true || Number.isNaN(num2) === true || Number.isNaN(num3) === true) {
    alert("Tocate las pelotas, te he dicho un Número, no mereces otra oportunidad");
    num1 = Number,parseInt(prompt('Introduce un Número'));
    num2 = Number,parseInt(prompt('Introduce un segundo Número'));
    num3 = Number,parseInt(prompt('Introduce un tercer Número'));
} 

if (Number.isNaN(num1) === true || Number.isNaN(num2) === true || Number.isNaN(num3) === true) {
    alert("Te avisé");
} else {
    alert("Tras aceptar te devolveré los números ordenados ");
    primero.textContent = `${num1}`; // Reescribe los datos en el campo Id primero del html
    segundo.textContent = `${num2}`; // Reescribe los datos en el campo Id segundo del html
    tercero.textContent = `${num3}`; // Reescribe los datos en el campo Id tercero del html

    


// Comparador para generar una respuesta ordenada

if (num1 >= num2 && num1 >= num3){ // Num1 es mayor que num2 y num3
    if (num2 > num3 ){//num2 es mayor que num3
        mayor.textContent = `${num1}`;
        medio.textContent = `${num2}`;
        menor.textContent = `${num3}`;
    } else {  //El num3 es mayor que num2
        mayor.textContent = `${num1}`;
        medio.textContent = `${num3}`;
        menor.textContent = `${num2}`;//num3 es mayor 
    } 
}

 else if (num1 <= num2 && num1 <= num3){// num2 es mayor que num1 y num3
    if (num2 > num3){//num1 es mayor que num3
        mayor.textContent = `${num2}`;
        medio.textContent = `${num3}`;
        menor.textContent = `${num1}`;

    } else{ //num3 es mayor que num1
        mayor.textContent = `${num3}`;
        medio.textContent = `${num2}`;
        menor.textContent = `${num1}`;
    }
 }
 else {
    if(num2 > num3){ //num2 es mayor que num1
        mayor.textContent = `${num2}`;
        medio.textContent = `${num1}`;
        menor.textContent = `${num3}`;

    } else{ //num2 es mayor que num1
        mayor.textContent = `${num3}`;
        medio.textContent = `${num1}`;
        menor.textContent = `${num2}`;
    }
 };
}
   
// menor.textContent = `${}`
// medio.textContent = 
// mayor.textContent = 