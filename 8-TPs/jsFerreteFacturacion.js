/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1;
var precio2;
var precio3;

function Sumar () 
{
    var suma;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    suma = parseInt(precio1) + parseInt(precio2) + parseInt(precio3)
    alert (suma);
}
function Promedio () 
{
    var promedio;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    promedio = (parseInt(precio1) + parseInt(precio2) + parseInt(precio3)) / 3;
    alert (promedio);
}
function PrecioFinal () 
{
    var precioFinal;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precioFinal = (parseInt(precio1) + parseInt(precio2) + parseInt(precio3)) * 1.21;
    alert (precioFinal);
}