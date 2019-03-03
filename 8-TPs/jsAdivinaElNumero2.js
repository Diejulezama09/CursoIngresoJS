/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var numeroUsuario;
var contador=0;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	console.log (numeroSecreto);
	
}

function verificar()
{
	numeroUsuario=numero.value;
	numeroUsuario= parseInt (numeroUsuario);

	while (isNaN (numeroUsuario))
	{
		numeroUsuario=prompt ("Por favor, ingrese un numero válido!");
		numero.value=numeroUsuario;
	} 

	contador++;
	intentos.value=contador;

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
			switch (contador)
			{
				case 1:
					mensaje= "Usted es un Psíquico!!";
					break;
				case 2:
					mensaje="Excelente percepción.";
					break;
				case 3:
					mensaje= "Esto es suerte!";
					break;
				case 4:
					mensaje="Excelente tecnica.";
					break;
				case 5:
					mensaje="Usted esta en la media.";
					break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					mensaje= "Falta tecnica.";
					break;
				default:
					mensaje= "Afortunado en el amor.";
					break;
			}
		}//(numeroUsuario>numeroSecreto) 
	}//	if (numeroUsuario<numeroSecreto) 
 
	alert (mensaje);
	
}