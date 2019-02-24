function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta = "si";
	var numero;
	var max;
	var min;
	

	while(respuesta!='no')
	{
		numero = prompt("Ingrese numero: ");
		numero = parseInt(numero);
		respuesta = prompt( "Desea continuar?");

		if (contador == 0){

			max = numero;

			min = numero;
		}

		else if ( numero > max){

			max = numero;

		} 
		
		else if (numero < min){

			min = numero;
		}

		contador++;
		
	
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
	


}//FIN DE LA FUNCIÓN