/*Al comenzar el juego generamos un número
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número
  ingresado es el mismo que el número secreto se dará
  por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var numeroUsuario;
var contador=0;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100

    //
  numeroSecreto = Math.floor((Math.random () * (101 - 1)) + 1);
  console.log(numeroSecreto);


}

function verificar()
{
  numeroUsuario=numero.value;
	numeroUsuario=parseInt (numeroUsuario);

	while (isNaN (numeroUsuario))
	{
		numeroUsuario=prompt ("Por favor, ingrese un numero válido!");
		numero.value=numeroUsuario;
		numeroUsuario=parseInt (numeroUsuario);
	} 

	contador++;
	
	if (numeroUsuario<numeroSecreto) 
	{
		mensaje="Falta para llegar al numero!";
	}
	else
	{
		if (numeroUsuario>numeroSecreto) 
		{
			mensaje="Te pasaste del numero!";
		}
		else
		{
			mensaje="Ganó y en tan solo " + contador + " intentos.";
		}
	}
		
	alert (mensaje);
	intentos.value=contador;

}
