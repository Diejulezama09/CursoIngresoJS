/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var uno;
var dos;
var resultado;

function sumar()
{	
    uno = document.getElementById ("numeroUno").value;
    dos = document.getElementById ("numeroDos").value;;
    resultado = parseInt(uno)+ ParseInt(dos);
    alert (resultado);
}

function restar()
{
    uno = document.getElementById ("numeroUno").value;
    dos = document.getElementById ("numeroDos").value;
    uno = parseInt (uno);
    dos = parseInt (dos);
    resultado = uno - dos;
    alert (resultado);
}

function multiplicar()
{ 
    uno = document.getElementById ("numeroUno").value;
    dos = document.getElementById ("numeroDos").value;
    uno = parseInt (uno);
    dos = parseInt (dos);
    resultado = uno * dos;
    alert (resultado);
}

function dividir()
{
    uno = document.getElementById ("numeroUno").value;
    dos = document.getElementById ("numeroDos").value;
    uno = parseInt (uno);
    dos = parseInt (dos);
    resultado = uno / dos;
    alert (resultado);
}

