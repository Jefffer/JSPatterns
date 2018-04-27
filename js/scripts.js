/*
var nombre = prompt('Nombre?');
var pais = prompt('Pais?');
alert("Bienvenido" + nombre + " de " + pais);
*/

/*
var modelo = 'Mustang';
var motor = 5.5;
var color = 'blue';

var modelo2, motor2, color2;

modelo2 = 'Camaro';
motor2 = 5.8;
color2 = 'black';

var modelo = 'Mustang';
console.log(modelo);
*/

/* Objetos */
/*
var auto = {
   nombre: 'Mustang',
   motor: 5.5,
   color: 'negro',
   clasico: true,
   anio: 1995
}
console.log(auto.nombre);
console.log(auto.motor);
console.log(auto.color);
console.log(auto.clasico);
console.log(auto.anio);
*/

/* Arreglos */
/*
var premierleague = ["Chelsea", "Manchester", "Liverpool", "Arsenal"];

var la_liga = new Array("Barcelona", "Madrid", "Atletico Madrid");
console.log(la_liga);

la_liga.push("Manchester City");
console.log(la_liga);

la_liga[2] = "Leicester";
console.log(la_liga);
console.log(la_liga.indexOf("Madrid")); //indexOf Busca en un Array

la_liga.splice(1, 2);
console.log("Con splice " + la_liga); //splice elimina elementos de un Array

//Con filtro

console.log("Filtro ");
var la_liga = new Array("Barcelona", "Madrid", "Atletico Madrid");
var nuevoArreglo = la_liga.filter(function(equipo) {
   return (equipo !== "Madrid");
});
console.log(nuevoArreglo);
*/

// Números
/*
var numero1 = "15";
var numero2 = -20;
var numero3 = 21.5;
var numero4 = 20;
var numero5 = "3.1416";
var numero6 = -30.5;

console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(numero3));
console.log(typeof(numero4));
console.log(typeof(numero5));
console.log(typeof(numero6));

var numero7 = parseFloat(numero5); //Convertir a Float
console.log(numero7 + 20);

var numero8 = Number(numero1);
console.log(typeof(numero8));
*/

// Fechas
/*
var fecha = new Date();
console.log("Año: " + fecha.getFullYear());
console.log("Dia #: " + fecha.getDate());
console.log("Dia de la semana: " + fecha.getDay());
console.log("Hora: " + fecha.getHours());
console.log("Minutos: " + fecha.getMinutes());
*/

// Strings o cadenas
/*
var texto = "Esto es una cadena de texto";
console.log(texto);
console.log(typeof(texto));
console.log(texto.toUpperCase());
console.log(texto.length);
console.log(texto.split(" ")); //Divide los espacios y crea un array
console.log(texto.slice(0, 10));
*/

// If
/*
var cantidadPagar = 200;
var saldo = 500;

if(saldo < cantidadPagar){
   console.log("No hay saldo suficiente");
} else {
   console.log("Pago realizado con exito");
   var nuevoSaldo = saldo - cantidadPagar;
}
console.log(nuevoSaldo);

var edad1 = 21;
var edad2 = 20;

if (edad1 > edad2) {
   console.log("Edad1 es mayor");
} else if(edad1 == edad2){
   console.log("Las edades son iguales");
} else {
   console.log("Edad2 es mayor");
}

var edad3 = "20";
var edad4= 20;

if (edad3 === edad4) {
   console.log("Son iguales");
} else {
   console.log("No son iguales");
}

var texto1 = "Hola mundo";
var texto2 = "";
 
console.log("Comparando textos: ");
if (texto1 == texto2) {
   console.log("Iguales");
}else {
   console.log("No son iguales");
}
*/

//If con && y ||
/*
var cantidadaPagar = 100;
var saldo = 101;
var recargaTelefono = 10;
var usuarioValido = false;

if (saldo > cantidadaPagar && usuarioValido) {
   console.log("Se pagó exitosamente");
}else{
   console.log("No se pudo pagar");
}

var cantidadaPagar = 1000;
var efectivo = 500;
var tarjetaCredito = true;

if (efectivo > cantidadaPagar || tarjetaCredito) {
   console.log ("Pago realizado")
}else {
   console.log ("Falta efectivo")
}
*/

//Método de pago
/*
var metodoPago = 'asdf';

switch(metodoPago){
   case 'Tc':
      console.log("Se pagó con tarjeta de credito");
      break;
   case 'Efectivo':
      console.log("Se pagó en efectivo");
      break;
   case 'Paypal':
      console.log("Se pagó con Paypal");
      break;
   default:
      console.log("Método no válido")
      break;
}
*/

//Operadores
/*
var numero1 = 10;
var numero2 = 20;

console.log(numero1 + numero2); //suma, resta, multiplicacion, division
numero1++; //incremento en 1
console.log(numero1);

var numero3 = 30;
console.log("numero 3: " + numero3);
numero3 *= 25;
console.log("numero 3: " + numero3);

var cantidadaPagar = 100;
var saldo = 101;
var recarga = 1;

if (saldo > cantidadaPagar) {
   console.log("Pago realizado")
   saldo -= cantidadaPagar;
   console.log("Saldo: " + saldo);
   if (recarga <= saldo) {
      console.log("Recarga exitosa")
      saldo -= recarga;
      console.log("Saldo despues de recarga: " + saldo);
   }else {
      console.log("No se pudo realizar recarga")
   }
}else {
   console.log("No se pudo pagar");
}
*/

//For
/*
var i;

for (var i = 0; i <= 20; i++) {
   if (i == 5) {
      console.log("Cinco");
      break; 
   }
   console.log(i);
}
*/

/*
var i;
var premierleague = ["Chelsea", "Manchester", "Liverpool", "Arsenal"];

for (i = 0; i < premierleague.length; i++){
   console.log(premierleague[i]);
}
*/

//While
/*
var i = 0;
var premierleague = ["Chelsea", "Manchester", "Liverpool", "Arsenal"];

while(i < premierleague.length){
   console.log(premierleague[i]);
   i++;
}
*/

//Funciones
/*
function suma(){
   console.log(4+2);
}

function array_frutas(){
   var frutas = ['fresa', 'naranja', 'pera', 'piña'];
   console.log(frutas);
}

array_frutas();

var mi_funcion = function(){
   var frutas = ['fresa', 'naranja', 'pera', 'piña'];
   console.log(frutas);
}

mi_funcion();

var auto = {
   nombre: 'Mustang',
   motor: 5.5,
   color: 'negro',
   clasico: true,
   anio: 1995
}

function recorrer_objeto(automovil){
   console.log(this.nombre);
   console.log(this.motor);
   console.log(this.color);
   console.log(this.clasico);
   console.log(this.anio);
}

auto.mostrarAuto = recorrer_objeto;
auto.mostrarAuto();
*/

//Funciones con argumentos
/*
function suma(n1, n2){
   console.log(n1+n2);
}

suma(2,3);

function multiplicar(n1, n2){
   console.log(n1*n2);
}

multiplicar(2,3);

var frutas = [];

function array_frutas(fruta){
   frutas.push(fruta);
   console.log(frutas);
}

array_frutas('durazno');

//Carrito
const IMPUESTO = 0.16;
var total = 0;

function carrito(articulo, precio){
   console.log("Articulo: " + articulo + " - Precio: $" + precio);
   total += precio + (IMPUESTO * precio);
   console.log("Impuesto: $" + precio * IMPUESTO);
   console.log("Total: $" + total.toFixed(2))
}

carrito('Cerveza',20);
*/

//Funciones que retornan valores
/*
var numero1;

function multiplicarx20(numero){
   numero *= 20;
   return numero;
}

var resultado = multiplicarx20(3);
console.log(resultado);

const IMPUESTO = 0.16;
var cantidad;

function totalPagar (numero){
   numero = numero + (numero*IMPUESTO);
   return numero;
}

var resultado = totalPagar(100);
console.log(resultado);
*/

//scope
/*
function scope1(){
   var a = 10;
   var b = 20;
}
function scope2(){
   console.log(a);
}
*/


//DOM

/**
var total, numero1, numero2;

function totalPagar(numero1, numero2){
   total = numero1*numero2;
   return total;
}

var granTotal = totalPagar(10, 20);
var calculadora = document.getElementById('resultado').innerHTML = "$" + granTotal


var n1, n2, n3, n4;

function funcion(n1, n2, n3, n4) {
   var num1 = n1.toString();
   var num2 = n2.toString();
   var num3 = n3.toString();
   var num4 = Math.pow(10, n4).toString();
   var num4sin1 = num4.substr(1, num4.length);
   console.log(num1 + num2 + num3 + num4sin1);
}

funcion(6, 8, 9, 3);


//Forma corta
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}


//Forma larga
var n;

function isSquare(n){
   var cuadrado = Math.sqrt(n);
   if (cuadrado % 1 == 0 && cuadrado >= 0) {
      return cuadrado;
   }else{
      return false;
   }
   console.log(cuadrado);
}

isSquare(9);

**/

/**
var s1, s2;

//Forma muy corta
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');


//Forma corta
function longest(s1, s2) {
   var a = Array.from(new Set(s1 + s2)).sort().join('');
   alert(a);
}
**/

/**
//Forma larga
function longest(s1, s2) {
   
   var cadenaOrdenada = s1.concat(s2).split('').sort();
   var unicos = [];
   var salida = {};
      
   for (var i = 0;  i < cadenaOrdenada.length; i++) {
      salida[cadenaOrdenada[i]] = 0;
   }

   for (i in salida) {
      unicos.push(i);
   }

   alert(unicos);
}


longest("asdfffatertert","aasdf");
**/

//Are they the same

// var a1 = [2, ,4];
// var a2 = [4,16,25];

// function comp(a1, a2){   
//    for (var i = 0; i < a1.length; i++) {
//       if (a1[i] == 'null') {
//          return false;
//       }
//    }
//    for (var i = 0; i < a2.length; i++) {
//       if (a2[i] == 'null') {
//          return false;
//       }
//    }

//    return (a1 == null || a2 == null || a1.length == 0 || a2.length == 0 || a1.some(arrVacio) || a2.some(arrVacio2)) ? false : ((((new Set(a1)).size == (new Set(a2)).size) && a1.length == a2.length) ? a1.every(num => !isNaN(a2.find(num2 => num2 === num*num))) : false); 
// }

/**
function comp2(a1,a2){
   
}

comp2(a1,a2);
**/


//Sum of the first nth term of Series

// var n;

// function SeriesSum(n) {
//    if (n != null && n>=0) {
//       var suma = 0;
//       for (i = 1; i <= n; i++) {
//          suma += (1/(2*i+(i-2)));
//       }
//       var rta = suma.toFixed(2).toString();
//       console.log(rta);   
//    }else {
//       console.log("false");
//    }
// }


//cupon vencido
/**
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
   var a = new Date(currentDate);
   var b = new Date(expirationDate);
   if (b>a) {
      console.log('b>a');
   }else {
      console.log('a>b');
   }
}

checkCoupon('123','123','September 5, 2015','October 1, 2014');
**/


//Complementary DNA
/**
function DNAStrand(dna){
   var ndna = [];
   for (var i = 0; i < dna.length; i++) {
      (dna[i] == 'A') ? ndna[i] = 'T' : ((dna[i] == 'T') ? ndna[i] = 'A' : ((dna[i] == 'C') ? ndna[i] = 'G' : ((dna[i] == 'G') ? ndna[i] = 'C' : false)));
   }

      console.log(ndna);
}

DNAStrand('ATTTAGC');

//Forma corta
function DNAStrand(dna){
  return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}
**/


//Take a Ten Minute Walk
/**
function isValidWalk(arr){
   var count = {};
   arr.forEach(function(element) {
      count[element] = (count[element] || 0) + 1;
   });
   if (count['n'] == count['s'] && count['w'] == count['e']) {
      console.log('true');
   }
   console.log(count);
}

isValidWalk(['n','s','s','n','s','n','s','n','s','t']);

//otra forma
function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}
**/


//Find the unique number
/**
function findUniq(arr) {
   var count = 0;
   var count2 = 0;
   while (count < arr.length) {
      if (arr[count] == arr[count+1]) {
         count2++;
      }
      count = count + 1;   
   }
   console.log(count2);
}

findUniq([1, 1, 5, 2, 1, 1]);

//Forma corta
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

//Forma aun mas corta
//Compara con indexof y lasIndexOf si el index del elemento e es igual, en caso de serlo, quiere decir que no se repite, despues realiza
//el filtro de esta condicion en todo el arreglo y solo un número complirá la condicion por lo tanto nunca fallara.
const findUniq = a => a.filter(e=> a.indexOf(e) == a.lastIndexOf(e))[0];
**/


//Multiples of 3 and 5
/**
function solution(number){   
   var count = 0;
   var sum = 0;
   var arr = [];
   while (count < number) {
      if (count % 3 == 0 || count % 5 == 0) {
         arr.push(count);
         sum = sum + count;        
      } 
      count++;
   }
   console.log(sum);
}

solution(3);
**/


//Find the missing term in an Arithmetic Progression

/** No pude :(

var findMissing = function (list) {
   if (list.length == 3) {
      (list[1] - list[0] > list[2] - list[1]) ? console.log(list[0]+(list[2] - list[1])) : console.log(list[2] - (list[1] - list[0]));
   } else {
      var count = 0;
      while (count < list.length){
         var a = list[count + 1] - list[count];
         var b = list[count + 2] - list[count + 1];
         var c = list[list.length - 1] - list[list.length - 2];
         if (a == b && b != c) {
            console.log(a + list[list.length - 2]);
         } else if (a != b && a == c) {
            console.log(c + list[count]); 
         }
         count++;
      }
   }
}

findMissing([3,6,9,12,18]);
**/


//Reverse words
/**
function reverseWords(str) {
   var a = str.split(" ");
   for (var i = 0; i < a.length; i++) {
      a = a[i].split('').reverse();
   }
   console.log(a);
}

reverseWords('The  quick brown fox jumps over the lazy dog.')
**/

//Find the divisors!
/**
function divisors(integer) {
   var divisores = [];
   for (var i = 2; i <= integer/2; i++) {
      if (integer % i == 0) {
         divisores.push(i);
      }
      if (divisores.length == 0) {
         console.log("primo");

      }
   }
   console.log(divisores);    
};

divisors(13);
**/

//Bouncing Balls
//Forma 1

function bouncingBall(h,  bounce,  window) {
   count = 0;

   if (bounce > 0 && bounce < 1) {
      do {
         var nh = (Math.pow(bounce,(count)))*h;
         count++

      }while (window < nh);
      console.log((count-1)*2-1);
   }else console.log("-1");
}

bouncingBall(17, 0.75, 1.7);

//Forma 2
/**
function bouncingBall(h,  bounce,  window) {
  count = 0;
   if (bounce > 0 && bounce < 1) {
      while (window <= h){
         var h = h*bounce;
         count++
      }
      return count*2 -1;
   }else return -1;  
}
**/