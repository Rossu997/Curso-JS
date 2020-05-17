/*  TIPOS DE DATOS
    Los tipos de datos que se pueden ingresar y reconoce JavaScript.
*/

/* string */
var letras = "Hola mundo";

/* number */
var numero = 45;

/* array */
var arreglo = ["Merluza", 7, "Pepe", true];

/* boolean */
var vof = true; //false

/* objetoLiteral */
var fichaPersonajes = {
    nombre: "Carlos",
    edad: 68,
    altura: 1.56,
    soltero: false,
    amantes: ["Julia", "María", "Mónica"],
};

/* null */
var nulo = null;     


// Bucles
// Son estructuras que permiten hacer algo X cantidad de veces o hasta que suceda algo determinado.
// Son ideales para tareas repetitivas.

/* for */
for (var i = 1; i <= 10; i++) {
    console.log("Resultado: " + (3 * i));
}

/* forOf (No se necesita indicar la cantidad de elementos) */
for (const x of arreglo) {
    console.log("Elemento: " + x)
};

/* forIn (Ideal para recorrer objetos) */
for (const y in fichaPersonajes) {
    console.log(y + ": " + fichaPersonajes[y])
};

/* doWhile (Permite repetir algo mientras una propiedad se cumple) */
do {
    console.log("Basura " + numero);
    numero++;
} while (numero <= 50);

//  OPERADORES
/*
= // asignación
+ // suma
- // resta
* // multiplicación
/ // división
% // módulo

++ // incremento
-- // decremento
== // igual siempre
=== // igual siempre estricto
!= // distinto
!== // distinto estricto

> // mayor
< // menor
>= // mayor igual
<= // menor igual

&& // and
|| // or
! // negación
*/
