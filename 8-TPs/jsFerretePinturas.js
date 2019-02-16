/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temperatura;

function FahrenheitCentigrados () 
{
    var farACel;
    temperatura = document.getElementById("Temperatura").value;
    farACel = (parseInt(temperatura) - 32) * 0.55;
    alert (farACel);
}

function CentigradosFahrenheit () 
{
    var celAFar;
    temperatura = document.getElementById("Temperatura").value;
    celAFar = parseInt(temperatura) * 1.8 + 32
    alert (celAFar);
}
