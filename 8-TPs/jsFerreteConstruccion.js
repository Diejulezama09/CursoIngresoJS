/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    alambre = (parseInt(largo)*2 + parseInt(ancho)*2) * 3;
    alert (alambre);

}
function Circulo () 
{
    var radio;
    var circulo;
    var alambre;
    radio = document.getElementById("Radio").value;
    circulo = 2 * 3.14 * parseInt (radio);
    alambre = parseInt(circulo) * 3;
    alert (circulo);
}
function Materiales () 
{
	
}