/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroRandom1;
var numeroRandom2;
var operacionRandom;
var resultado;

function comenzar()
{
    numeroRandom1 = Math.floor ((Math.random()*10) + 1);
    numeroRandom2 = Math.floor ((Math.random()*10) + 1);
    operacionRandom = Math.floor ((Math.random()*4) + 1);

    switch (operacionRandom)
    {
        case 1:
            operacionRandom="+";
            resultado=numeroRandom1+numeroRandom2;
            break;
        
        case 2:
            operacionRandom="-";
            resultado=numeroRandom1-numeroRandom2;
            break;

        case 3:
            operacionRandom="/";
            resultado=numeroRandom1/numeroRandom2;
            break;

        case 4:
            operacionRandom="*";
            resultado=numeroRandom1*numeroRandom2;
            break;
    }
	
    console.log(resultado);
    PrimerNumero.value=numeroRandom1;
    Operador.value=operacionRandom;
    SegundoNumero.value=numeroRandom2;

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuesta=Respuesta.value;
	


    if (respuesta == resultado)
    {
        mensaje="¡La respuesta es correcta!";
    } else
    
    {
        mensaje="La respuesta es incorrecta..."
    }

    alert(mensaje);

}//FIN DE LA FUNCIÓN
