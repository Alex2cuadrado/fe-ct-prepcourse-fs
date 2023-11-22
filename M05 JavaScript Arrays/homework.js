/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código: 
   
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
  
  return array.at(-1)
  
  //var arr = array[array.length(-1)]
  //console.log(arr)
  //return valor
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
   }

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arr = array.map(x => x +1);
   return arr
   
   }


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   //array.push(elemento);
   //return array;

   array.push(elemento);
   return array

}
console.log(agregarItemAlFinalDelArray([2, 5, 3], 6))
function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}
console.log(agregarItemAlComienzoDelArray([2, 4, 5], 7))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
palabras = palabras.join(" ")
return palabras   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce(function(acum, elem) {
      acum = acum + elem
      return acum
   })
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   return agregarNumeros(resultadosTest)/obtenerLargoDelArray(resultadosTest)
   
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código: 
   //arrayOfNums=[2, 4, 6, 8]
   var numeroAlto = -Infinity
   /*
   for(var elemento of arrayOfNums){
      if(elemento > numeroAlto){
         numeroAlto = elemento
         console.log(numeroAlto);
      }
   }*/
   arrayOfNums.forEach(function (elem) {
      if(elem > numeroAlto) numeroAlto = elem
      
   });
   return numeroAlto
}
//console.log(numeroMasGrande())
function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0) return 0
   var total = 1
 for (var el of arguments){
      total = total * el
 }
   return total
  
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:-
   //array =[ 10, 20, 40, 12, 10]
var filtrados = array.filter(function (params) {
      if(params > 18) return params
      
   })
   //console.log(filtrados)
   return filtrados.length
}
//console.log(cuentoElementos())
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana"
   }
   else if ( 1< numeroDeDia && numeroDeDia < 7) return "Es dia laboral"
   
   else {
      return " no es ningun  dia disponible"}   
  
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if (num.toString()[0] == 9) return true

  else return false

   
  /*empiezaConNueve = (num) => num.toString()[0] == 9
  if (num == 9){
   return true
  }
  else{ 
   return false
  }*/
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var elemref = array [0]
   return array.every(function (elem) {
   return  elem == elemref
   })
   }

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var resultado = array.filter(function (el) {
      if (el === "Enero" ||  el === "Marzo" || el === "Noviembre") {
         return el
      }   
   })
   //var meses = array
   //var resultado = []
   
   //for(var i=0 ; i< meses.length; i++){
   //  if (meses[i] === "Enero" ||  meses[i] === "Marzo" || meses[i] === "Noviembre"){
    //     resultado.push(meses[i]);
    //  }
   //}
   if (resultado.length == 3){
      return resultado
   }
   else return "No se encontraron los meses pedidos"
   
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

var tabla = []
for (var i = 0; i<=10; i++){
   tabla.push(6 * i)
}
return tabla
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   return array.filter(function(elem) {
      if (elem> 100) return elem
   })
  

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
var array = [];   
var suma = num;

for ( var i = 0; i < 10; i++){
    suma = suma + 2;
   console.log(suma)
   if(suma === i){
      break;
   }
   else {
      array.push(suma);
   }
}  
   
if ( i < 10){
   return "Se interrumpió la ejecución"
}  
else{
  return array
} 

}
console.log(breakStatement([]))
function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   
   var arr = []
   var suma = num
for (var i = 0; i < 10; i++){//se genera el bucle
   if (i === 5){//se crea la condicion si el iterador (i) es igual al valor 5
  continue
   }

  suma = suma + 2//se escribe la condicion del for luego de ejecutar el if
   arr.push(suma)//y el push va agregar un nuevo elemento realizando la suma += 2 y genera el nuevo arr
   
  }

return arr

}
console.log(breakStatement(2))//++
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
