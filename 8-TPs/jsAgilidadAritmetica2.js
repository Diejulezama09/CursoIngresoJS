/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var numeroRandom1;
var numeroRandom2;
var operacionRandom;
var resultado;
var temporizador;

function comenzar()
{
	numeroRandom1 = Math.floor ((Math.random()*10) + 1);
    numeroRandom2 = Math.floor ((Math.random()*10) + 1);
    operacionRandom = Math.floor ((Math.random()*4) + 1);
    temporizador=setTimeout (4000);


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
	


}//FIN DE LA FUNCIÓN
